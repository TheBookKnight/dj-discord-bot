// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

require('dotenv').config()
const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, client => {
    console.log(`Logged into guild as ${client.user.tag}!`);
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);