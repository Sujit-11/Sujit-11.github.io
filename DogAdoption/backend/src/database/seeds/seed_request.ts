import { Knex } from 'knex';

const TABLE_NAME = 'requests';

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  // Inserts seed entries
  await knex(TABLE_NAME).insert([
    {
      user_id: 14,
      dog_id: 18,
      adoption_phone: '123-456-7890',
      adoption_interest: 'I have a loving family ready for a new member.',
    },
    {
      user_id: 15,
      dog_id: 19,
      adoption_phone: '234-567-8901',
      adoption_interest: 'Looking for a friendly dog to join our household.',
    },
    {
      user_id: 16,
      dog_id: 20,
      adoption_phone: '345-678-9012',
      adoption_interest: 'I am an experienced dog owner ready to adopt.',
    },
    {
      user_id: 17,
      dog_id: 21,
      adoption_phone: '456-789-0123',
      adoption_interest: 'We would love to have a new companion for our hikes.',
    },
    {
      user_id: 18,
      dog_id: 22,
      adoption_phone: '567-890-1234',
      adoption_interest: 'Our home is missing a furry friend.',
    },
    {
      user_id: 19,
      dog_id: 23,
      adoption_phone: '678-901-2345',
      adoption_interest: 'Ready to give a forever home to a dog in need.',
    },
    {
      user_id: 20,
      dog_id: 24,
      adoption_phone: '789-012-3456',
      adoption_interest: 'I want to adopt a dog to grow up with my kids.',
    },
    {
      user_id: 21,
      dog_id: 25,
      adoption_phone: '890-123-4567',
      adoption_interest: 'I have a big yard and lots of love to give.',
    },
    {
      user_id: 22,
      dog_id: 26,
      adoption_phone: '901-234-5678',
      adoption_interest: 'Looking for a dog to be my running partner.',
    },
    {
      user_id: 23,
      dog_id: 27,
      adoption_phone: '012-345-6789',
      adoption_interest:
        'I am ready to adopt and provide a caring environment.',
    },
    // Additional requests for the same dog_id by different users
    {
      user_id: 20,
      dog_id: 18,
      adoption_phone: '123-456-7890',
      adoption_interest: 'I am interested in adopting a second dog.',
    },
    {
      user_id: 18,
      dog_id: 19,
      adoption_phone: '234-567-8901',
      adoption_interest:
        'My first dog needs a companion, and I would love to adopt.',
    },
  ]);
}
