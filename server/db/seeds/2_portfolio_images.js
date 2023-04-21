/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('portfolio_images').insert([
    {
      id: 1,
      entry_id: 1,
      image_url: '/img/portfolio/portfolio-1.jpg',
      image_alt_text: 'sample portfolio image',
    },
  ])
}
