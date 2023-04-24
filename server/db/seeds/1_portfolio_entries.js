/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('portfolio').insert([
    {
      id: 1,
      title: 'Bask.it',
      sub_heading: "A grocery app that doesn't suck",
      category: 1,
      client: null,
      client_url: null,
      status: 'In progress',
      demo_url: 'https://baskit.reubenhawthornejensen.dev/',
      repo_url: null,
      description:
        "<p>Don't you hate it when you get home from doing the shopping, only to realise you bought doubles of things that you already had in the pantry? Or when you have to double back because you missed that cauliflour was on the list when you were in the produce section?</p><p>Bask.it is a grocery shopping app with a difference. It is designed to help you keep track of what you have in the cupboard to make eating well, less of a chore.</p><p>Bask.it is also perfect for the budget concious, helping you stay on track with a running total spend visible while you shop.</p>",
      date: Date.now(),
    },
  ])
}
