/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('categories').insert([
    { id: 1, name: 'CLI' },
    { id: 2, name: 'Ecommerce' },
    { id: 3, name: 'Fullstack' },
  ])
}
