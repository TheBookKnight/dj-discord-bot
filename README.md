# DJ Discord Bot

Udemy

## Part 1: Register Discord Bot

Steps:

1. Install Discord
2. Create a Server for practice
3. Submit an [application for a bot on Discord](https://discord.com/developers/applications)

- Under Redirects so you can register the app to test it locally
  - http://localhost:3001/auth/discord/redirect
- Enable scopes:
  - bot
  - applications.commands
- Bot Merissions:
  - Enable slash commands

4. Install Dotenv and DiscordJS

```
npm install dotenv
npm install discord.js
```

## Part 2: Add Slash commands and DMs

```
npm install @discordjs/rest discord-api-types
```

What are these libraries?

1. @discordjs/rest

- This library allows you to make REST requests to the Discord API

2. discord-api-types

- Sets up type definitions for Discord API
