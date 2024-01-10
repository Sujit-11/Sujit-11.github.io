import { Knex } from 'knex';

const TABLE_NAME = 'dogs';

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();
    table.string('name');
    table.string('image');
    table.boolean('availability').defaultTo(true);
    table.string('address');
    table.integer('age');
    table.string('gender');
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users');

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));

    table.timestamp('updated_at').nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
