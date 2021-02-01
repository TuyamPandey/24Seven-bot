
const { Client, ReactionCollector } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

client.config = config;

const AutoPoster = require('topgg-autoposter')
const ap = AutoPoster("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwMTEzOTM2NDM3MjQxNDQ3NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEyMTQ5MTgzfQ.Zya2K7FM_I4Mzvm-X7JGqM2yr0eXtogokA-9u8y3n2w", client)

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

