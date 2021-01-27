const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HowgayCommand extends BaseCommand {
  constructor() {
    super('howgay', 'fun', []);
  }

  async run(client, message, args) {
    let member = message.mentions.users.first() || message.author

    let rng = Math.floor(Math.random() * 101);

    const howgayEmbed = new Discord.MessageEmbed()
    .setTitle(`Gay r8 Calculator`)
    .setDescription(`${member.username} is ` + rng + "% Gay🌈")
    .setColor("Random")
    .setTimestamp();

    let msg = await message.channel.send('///@$%#!...Fixing errors...Calculating with 100% Accuracy...');
        msg.edit('',howgayEmbed);
  }
}