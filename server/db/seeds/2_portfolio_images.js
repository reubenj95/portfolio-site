/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      entry_id: 1,
      image_url: '/img/portfolio/portfolio-1.jpg',
      image_alt_text: 'sample portfolio image',
    },
  ])
}

table.increments('id')
table.integer('entry_id')
table.text('image_url')
table.text('image_alt_text')
