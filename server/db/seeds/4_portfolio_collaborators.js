/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('portfolio_collaborators').insert([
    { id: 1, collaborator_id: 1, entry_id: 1 },
  ])
}
