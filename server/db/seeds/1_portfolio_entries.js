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
      category: 3,
      client: null,
      client_url: null,
      status: 'In progress',
      demo_url: 'https://baskit.reubenhawthornejensen.dev/',
      repo_url: null,
      video_demo: null,
      description:
        "<p>Don't you hate that feeling of standing at the supermarket checkout, watching the balance trickle up realising that you're definitely going to blow that shopping budget?</p><p>Bask.it is a grocery shopping and meal planning app with a focus on making sticking to a budget intuitive and simple. It features a running total cost while you shop, a fridge list to check what you have at home on the fly and a 'fridge list' to keep track of what you need to buy through the week.</p><h3>Technology Used</h3><div class='tech-list'><ul><li>React</li><li>Redux</li><li>Mantine (UI)</li></ul><ul><li>Node.js</li><li>Express</li><li>SQLite3</li></ul></div><h3>What comes next?</h3><p>The MVP of the app is still in progress. First step is to complete the basic operations around adding, editing and deleting items from the list.</p><p>Additional features, such as authorisation, smart ordering of shopping lists based on previous shopping behaviour and recipies are on the roadmap too.</p>",
      date: Date.now(),
    },
    {
      id: 2,
      title: 'Club Connect',
      sub_heading: 'Subscription management for community sports orgs',
      category: 2,
      client: null,
      client_url: null,
      status: 'MVP',
      demo_url: 'https://club-connect.reubenhawthornejensen.dev/',
      repo_url: 'https://github.com/tohora-2023/ClubConnect',
      video_demo: 'https://www.youtube.com/watch?v=SOkFt_XyzgU?start=2150',
      description:
        "<p>Small, community sports organisations tend to have pretty poor subscription management options. It's hardly surprising, given the lack of affordable and easy-to-use solutions out there.</p><p>Club Connect was designed to solve this problem. It gives sports organisations everything they need to manage memberships, subscriptions and payments online.</p><h3>Technology Used</h3><div class='tech-list'><ul><li>React</li><li>Redux</li><li>Mantine (UI)</li><li>Stripe (payments)</li><li>Auth0 (authorisation)</li></ul><ul><li>Node.js</li><li>Express</li><li>SQLite3</li><li>SendGrid (email)</li></ul></div><h3>What comes next?</h3><p>The MVP for this app was built as the final project for my group during the Dev Academy Bootcamp in 2023. We are working on a plan to fix some known bugs and tidy up a couple of features that would make this app useable.</p><p>I plan to use this app for my own kickboxing club as a test case. Further work on the data structure to allow multiple club accounts per instance would elevate this project, as well as adding a class booking feature.</p>",
      date: Date.now(),
    },
  ])
}
