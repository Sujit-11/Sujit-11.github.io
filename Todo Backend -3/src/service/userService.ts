import bcrypt from 'bcryptjs';
import Users from '../data/Users';
import * as userRepo from "../Repositories/UserRepo";

export class UserService {
  static getUsers() {
    return userRepo.getAllUsers();
  }

  static async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      id: Users.length + 1,
      email: email,
      password: hashedPassword,
    };
    Users.push(user);
    return userRepo.addUser(user);
  }
}
