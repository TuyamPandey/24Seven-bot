const BaseCommand = require('../../utils/structures/BaseCommand');
const { tictactoe } = require('reconlx');
const Discord = require('discord.js');

module.exports = class TictactoeCommand extends BaseCommand {
  constructor() {
    super('tictactoe', 'fun', []);
  }

  async run(client, message, args) {
      const member = message.mentions.members.first() 
        if(!member)  return  message.channel.send('Please specify a member')
        
      new tictactoe({
        player_two: member, 
        message: message
      })
   }
}