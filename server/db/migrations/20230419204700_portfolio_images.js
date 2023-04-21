/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('portfolio_images', (table) => {
    table.increments('id')
    table.number('entry_id')
    table.text('image_url')
    table.text('image_alt_text')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('portfolio_images')
}
