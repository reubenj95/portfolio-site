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
      image_url: 'baskit-wireframes.png',
      image_alt_text: 'Bask.it app wireframes',
    },
    {
      id: 2,
      entry_id: 2,
      image_url: 'club-connect-home.png',
      image_alt_text: 'Club Connect user dashboard view',
    },
  ])
}
