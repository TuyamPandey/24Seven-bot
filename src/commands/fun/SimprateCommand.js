const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SimprateCommand extends BaseCommand {
  constructor() {
    super('simprate', 'fun', []);
  }

  async run(client, message, args) {
    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    const simpEmbed = new Discord.MessageEmbed()
    .setTitle(`Simp r8 Calculator`)
    .setDescription(`${member.username} is ` + rng + "% Simp🥺")
    .setColor("Random")
    .setTimestamp();

    let msg = await message.channel.send('///@$%#!...Fixing errors...Calculating with 100% Accuracy...');
        msg.edit('',simpEmbed);
  }
}