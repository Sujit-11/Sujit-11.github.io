import { Knex } from 'knex';

const TABLE_NAME = 'dogs';

/**
 * Seed the users table with 15 dummy dogs 
 *
 * @param {Knex} knex
 */
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  await knex(TABLE_NAME).insert([
    {
      name: 'Buddy',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346024/o9lgeovkuu58de0g6xjr.jpg',
      availability: true,
      address: 'Kathmandu',
      age: 3,
      gender: 'Male',
      user_id: 14,
    },
    {
      name: 'Max',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346777/blyihfhjllsc1m4ro4wt.jpg',
      availability: true,
      address: 'Pokhara',
      age: 5,
      gender: 'Male',
      user_id: 15,
    },
    {
      name: 'Bella',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346853/gffo5gbwi0vquw3ekuhq.webp',
      availability: true,
      address: 'Lalitpur',
      age: 2,
      gender: 'Female',
      user_id: 16,
    },
    {
      name: 'Charlie',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346024/o9lgeovkuu58de0g6xjr.jpg',
      availability: true,
      address: 'Biratnagar',
      age: 4,
      gender: 'Male',
      user_id: 17,
    },
    {
      name: 'Lucy',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346777/blyihfhjllsc1m4ro4wt.jpg',
      availability: false,
      address: 'Birgunj',
      age: 6,
      gender: 'Female',
      user_id: 18,
    },
    {
      name: 'Cooper',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346853/gffo5gbwi0vquw3ekuhq.webp',
      availability: true,
      address: 'Dharan',
      age: 2,
      gender: 'Male',
      user_id: 19,
    },
    {
      name: 'Bailey',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346024/o9lgeovkuu58de0g6xjr.jpg',
      availability: true,
      address: 'Janakpur',
      age: 1,
      gender: 'Female',
      user_id: 20,
    },
    {
      name: 'Daisy',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346777/blyihfhjllsc1m4ro4wt.jpg',
      availability: false,
      address: 'Hetauda',
      age: 8,
      gender: 'Female',
      user_id: 21,
    },
    {
      name: 'Sadie',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346853/gffo5gbwi0vquw3ekuhq.webp',
      availability: true,
      address: 'Itahari',
      age: 5,
      gender: 'Female',
      user_id: 22,
    },
    {
      name: 'Molly',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346024/o9lgeovkuu58de0g6xjr.jpg',
      availability: true,
      address: 'Bhaktapur',
      age: 7,
      gender: 'Female',
      user_id: 23,
    },
    {
      name: 'Toby',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346777/blyihfhjllsc1m4ro4wt.jpg',
      availability: true,
      address: 'Lalitpur',
      age: 6,
      gender: 'Male',
      user_id: 14,
    },
    {
      name: 'Lola',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346853/gffo5gbwi0vquw3ekuhq.webp',
      availability: false,
      address: 'Kirtipur',
      age: 3,
      gender: 'Female',
      user_id: 15,
    },
    {
      name: 'Zoe',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346024/o9lgeovkuu58de0g6xjr.jpg',
      availability: true,
      address: 'Tulsipur',
      age: 4,
      gender: 'Female',
      user_id: 16,
    },
    {
      name: 'Stella',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346777/blyihfhjllsc1m4ro4wt.jpg',
      availability: true,
      address: 'Kalaiya',
      age: 2,
      gender: 'Female',
      user_id: 17,
    },
    {
      name: 'Chloe',
      image:
        'https://res.cloudinary.com/dlbd9gdkc/image/upload/v1705346853/gffo5gbwi0vquw3ekuhq.webp',
      availability: true,
      address: 'Ghorahi',
      age: 1,
      gender: 'Female',
      user_id: 18,
    },
  ]);
}
