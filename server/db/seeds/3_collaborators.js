/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('collaborators').insert([
    { id: 1, name: 'Bob the Builder', url: 'bob.com', image_url: null },
  ])
}
