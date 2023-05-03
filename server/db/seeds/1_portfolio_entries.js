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
    {
      id: 3,
      title: 'ASCII Art (CLI)',
      sub_heading: 'A simple CLI to display ASCII Art files',
      category: 1,
      client: null,
      client_url: null,
      status: 'Completed',
      demo_url: null,
      repo_url: 'https://github.com/reubenj95/ASCII-art-cli',
      video_demo: null,
      description:
        "<p>Sometimes the terminal is a little boring. So why not spruce it up with a little art?</p><p>This project was completed as a part of the Dev Academy bootcamp. It was an exercise in working with command line applications, learning to create simple but user-friendly interfaces.</p><h3>Technology Used</h3><div class='tech-list'><ul><li>Node.js</li><li>Node File System (Fs)</li><li>Prompt</li></ul></div>",
      date: Date.now(),
    },
    {
      id: 4,
      title: 'Droble',
      sub_heading: 'Helping your dress your best',
      category: 3,
      client: null,
      client_url: null,
      status: 'In Development',
      demo_url: null,
      repo_url: 'https://github.com/reubenj95/droble',
      video_demo: null,
      description:
        "<p>My wife is plagued by an issue for which few good solutions exist, and I am sure she is not alone. That is, deciding which outfit to wear each day. I set out to build a simple application to help her decide. The application allows the user to catalogue their wardrobe, and build digital outfits for any occasion.</p><p>The application is a React/Redux front end with Ruby on Rails behind the scenes and will be deployed using two EC2 instances on AWS once the MVP is completed.</p><h3>Technology Used</h3><div class='tech-list'><ul><li>React</li><li>Redux</li></ul><ul><li>Ruby on Rails</li><li>AWS (EC2, S3)</li></ul></div>",
      date: Date.now(),
    },
  ])
}
