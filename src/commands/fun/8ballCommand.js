const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class eightballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  async run(client, message, args) {
    if(!args[0]) return message.reply(`Please ask a question`)
    let replies = ["Yes", "No", "Maybe", "I doubt that", "Not in 100000000 years!!!", "Absolutely"]

    let answer = Math.floor((Math.random() * replies.length));
    let question = args.slice().join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(`🎱 ${message.author.username}`)
    .setColor(`#5708ab`)
    .addField("Question: ", question)
    .addField("Answer: ", replies[answer])

    message.channel.send(ballembed)
  }
}