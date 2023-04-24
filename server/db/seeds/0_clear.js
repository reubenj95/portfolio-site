/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('portfolio').del()
  await knex('portfolio_images').del()
  await knex('collaborators').del()
  await knex('portfolio_collaborators').del()
  await knex('categories').del()
}
