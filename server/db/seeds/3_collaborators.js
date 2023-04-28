/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('collaborators').insert([
    {
      id: 1,
      name: 'Joon Young Jeong',
      url: 'https://github.com/junwaa-sys',
      image_url: null,
    },
    {
      id: 2,
      name: 'Daniel Petrie',
      url: 'https://github.com/Daniel-Petrie',
      image_url: null,
    },
  ])
}
