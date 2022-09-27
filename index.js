const { Client, Intents, Collection } = require("discord.js");
const db = require("pro.db")
const Discord = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


client.login(process.env.token)
