// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');

require('dotenv').config()
const token = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

// register /ping command
const commands = [{
    name: 'ping',
    description: 'Replies with Pong!',
}];

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// configures token so discord rest api can reach guild
const rest = new REST({ version: '10' }).setToken(token);

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, async client => {
    try {
        console.log(`Logged into guild as ${client.user.tag}!`);
        console.log('Started refreshing application (/) commands.');

        // Registers list of commands provided above
        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
        console.log('Ready!');
    } catch (error) {
        console.error(error);
    }
});

client.on(Events.InteractionCreate, interaction => {
    const { commandName } = interaction;
    if (commandName === 'ping') {
        console.log("There was a ping!");
        interaction.reply('Pong!')
    }
});

// Login to Discord with your client's token
client.login(token);