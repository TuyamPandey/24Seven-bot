
const { Client, ReactionCollector } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

client.config = config;

const { GiveawaysManager } = require('discord-giveaways')
client.giveaways = new GiveawaysManager(client, {
  storage: `./giveaways.json`,
  updateCountdownEvery: 5000,
  embedColor: `Random`,
  reaction: `🎉`,
});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

