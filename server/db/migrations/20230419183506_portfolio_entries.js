/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('portfolio', (table) => {
    table.increments('id').primary()
    table.text('title')
    table.text('sub_heading')
    table.text('category')
    table.text('client')
    table.text('client_url')
    table.text('status')
    table.text('demo_url')
    table.text('repo_url')
    table.text('description_markup')
    table.date('date')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('portfolio')
}
