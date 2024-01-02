import { UserModel } from '../model/UserModel';
//p1:123456
//p2:654321
//p3:Password
const Users: UserModel[] = [
  {
    id: 1,
    email: 'Ram@gmail.com',
    password: '$2a$10$RqlTRPvE/mwxhlQHpshmU.Pj9JwuFZLQLFeDaxp3gl5CKczV5TLl6',
  },
  {
    id: 2,
    email: 'Shyam@gmail.com',
    password: '$2a$10$n745cZOFgUTskMQtJtn5xuvLz03d1ARgJKCZi5mLBnC4y/o1pPZSO',
  },
  {
    id: 3,
    email: 'Hari@gmail.com',
    password: '$2a$10$U9tgCduGZd3t5WXOdWZDJ.86IV2YdV35Z2bt3vzALHE7iRD1aw45O',
  },
];

export default Users;
