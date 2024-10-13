# DJ Discord Bot

Practice Course outline for Udemy

## Part 1: Register Discord Bot

Steps:

1. Install [the Discord app](https://discord.com/download)
2. Create a [Server for practice](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server)
3. Submit an [application for a bot on Discord](https://discord.com/developers/applications)

- Use _face.png_ for Discord bot profile

- Under Redirects so you can register the app to test it locally
  - http://localhost:3001/auth/discord/redirect
- Enable scopes:
  - bot
    - for oauth2 bots, this puts the bot in the user's selected guild by default
  - applications.commands
    - allows your app to add commands to a guild - included by default with the bot scope
- Enable permissions:
  - Enable slash commands

Information about [OAuth2, scopes, and permissions](https://discord.com/developers/docs/topics/oauth2)

4. Install Dotenv and DiscordJS

```
npm install dotenv
npm install discord.js
```

What are these libraries?

1. [Dotenv npm library](https://www.npmjs.com/package/dotenv)?

- Loads the environmental variables from the .env file

2. [DiscordJS npm library](https://www.npmjs.com/package/discord.js)?

- Discord.js is a powerful Node.js module that allows you to easily interact with the Discord API. Needs NodeJS v18 and higher.

## Part 2: Adding a Slash command

```
npm install @discordjs/rest discord-api-types
```

What are these libraries?

1. [@discordjs/rest](https://www.npmjs.com/package/@discordjs/rest)

- This library allows you to make REST requests to the Discord API

2. [discord-api-types](https://www.npmjs.com/package/discord-api-types)

- Sets up type definitions for Discord API

- Add `CLIENT_ID` and `GUILD_ID` to the .env file

  - Get `CLIENT_ID` from Discord Developer Portal > OAuth
  - Get `GUILD_ID` from Copying the Server ID from the Discord Server

- Define command (in a list) of what you want to load ([how to define doc](https://discord.com/developers/docs/interactions/application-commands#registering-a-command))
  - and also the reply you want once you get it ([how to interact doc](https://discordjs.guide/creating-your-bot/command-handling.html#receiving-command-interactions))
