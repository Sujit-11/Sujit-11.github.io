import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../model/UserModel';
import * as userRepo from '../Repositories/UserRepo';

let refreshTokens: string[] = [];

export class AuthService {
    
  static async register(user: UserModel) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return userRepo.addUser(user);
  }

  static async login(email: string, password: string) {
    // const user = Users.find((u) => u.email === email);
    const user = await userRepo.getUserByEmail(email);
    if (user == null) throw new Error('Cannot find user');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new Error('Not Allowed');

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: '1h',
    });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET!);
    refreshTokens.push(refreshToken);
    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  static token(refreshToken: string) {
    if (refreshToken == null) throw new Error('No token provided');
    if (!refreshTokens.includes(refreshToken)) throw new Error('Invalid token');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let user: any;
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any, u: any) => {
        if (err) throw new Error('Invalid token');
        user = u;
      }
    );

    const accessToken = jwt.sign(
      { name: user.name },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: '1800s' }
    );
    return { accessToken: accessToken };
  }

  static logout(token: string) {
    refreshTokens = refreshTokens.filter((t) => t !== token);
  }
}
