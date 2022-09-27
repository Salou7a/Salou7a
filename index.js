const { Discord , Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents : 32767
});


client.login(process.env.token)
