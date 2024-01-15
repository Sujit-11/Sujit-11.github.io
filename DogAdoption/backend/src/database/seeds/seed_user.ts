import { Knex } from 'knex';

const TABLE_NAME = 'dogs';

/**
 * Seed the users table with 10 dummy users using the same bcrypt hash key for passwords.
 *
 * @param {Knex} knex
 */
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  // Inserts seed entries with the same bcrypt hash key for password(12345678)
  const bcryptHashKey = '$2a$10$0gLyuPBQhY18laJDHTcpH.utVNkNXih/Lj4LsqtJXfOV13uQ4bxbi';
  const dummyUsers = [
    { name: 'User1', email: 'user1@example.com', password: bcryptHashKey },
    { name: 'User2', email: 'user2@example.com', password: bcryptHashKey },
    { name: 'User3', email: 'user3@example.com', password: bcryptHashKey },
    { name: 'User4', email: 'user4@example.com', password: bcryptHashKey },
    { name: 'User5', email: 'user5@example.com', password: bcryptHashKey },
    { name: 'User6', email: 'user6@example.com', password: bcryptHashKey },
    { name: 'User7', email: 'user7@example.com', password: bcryptHashKey },
    { name: 'User8', email: 'user8@example.com', password: bcryptHashKey },
    { name: 'User9', email: 'user9@example.com', password: bcryptHashKey },
    { name: 'User10', email: 'user10@example.com', password: bcryptHashKey },
  ];

  // Inserts seed entries
  await knex(TABLE_NAME).insert(dummyUsers);
}
          