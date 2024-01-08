// import bcrypt from 'bcryptjs';
// import Users from '../database/Users';
import * as userRepo from "../Repositories/UserRepo";

export class UserService {
  static getUsers() {
    return userRepo.getAllUsers();
  }
}
