import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Users from '../data/Users';

let refreshTokens: string[] = [];

export const register = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = { id: Users.length + 1, email: req.body.email, password: hashedPassword };
  Users.push(user);
  res.status(201).json(user);
};

export const login = async (req: Request, res: Response) => {
  const user = Users.find(u => u.email === req.body.email);
  if (user == null) return res.status(400).send('Cannot find user');
  if (await bcrypt.compare(req.body.password, user.password)) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '30s' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET!);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  } else {
    res.send('Not Allowed');
  }
};

export const token = (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '30s' });
    res.json({ accessToken: accessToken });
  });
};

export const logout = (req: Request, res: Response) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
};
