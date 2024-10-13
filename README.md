# DJ Discord Bot

Practice Course outline for Udemy

## Part 1: Register Discord Bot

Steps:

1. Install [the Discord app](https://discord.com/download)
2. Create a [Server for practice](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server)
3. Submit an [application for a bot on Discord](https://discord.com/developers/applications)

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

### What is [Dotenv npm library](https://www.npmjs.com/package/dotenv)?

Loads the environmental variables from the .env file

### What is [DiscordJS npm library](https://www.npmjs.com/package/discord.js)?

Discord.js is a powerful Node.js module that allows you to easily interact with the Discord API. Needs NodeJS v18 and higher.
