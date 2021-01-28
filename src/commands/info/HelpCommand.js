const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  async run(client, message, args) {

    const helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome to the Help Menu! `)
    .setDescription(`Type 's- invite' to get invite link to add the bot in your server. \n Following are the list of all commands (Prefix = "s-"): `)
    .setFooter('---Help log---')
    .addFields(
      { name: `invite`, value: `Invite link for the bot. [s- invite]`, inline: false },
      { name: `giveawayhelp`, value: `Help menu for conducting giveaways. [s- giveawayhelp]`, inline: false },
      { name: `kick`, value: `Kicks mentioned user. [s- kick @user <reason>]`, inline: false },
      { name: `ban`, value: `Bans mentioned user. [s- ban @user <reason>]`, inline: false },
      { name: `unban`, value: `Unbans mentioned user ID. [s- unban userid <reason> | (Enable developer options in your settings to see user id)]`, inline: false },
      { name: `purge`, value: `Deletes specified number of messages. [s- purge <number of messages>]`, inline: false },
      { name: `nuke`, value: `Deletes channel and creates a copy of it. [s- nuke]`, inline: false },
      { name: `nickname`, value: `Changes server name of mentioned user. [s- nickname @user <new nick>]`, inline: false },
      { name: `meme`, value: `Fetches a meme for the user. [s- meme]`, inline: false },
      { name: `rps`, value: `Classic rock paper scissors game vs the bot. [s- rps]`, inline: false },
      { name: `tictactoe`, value: `Play tictactoe with another user. [s- tictactoe @user]`, inline: false },
      { name: `hangman`, value: `Moderators(Manage Messages perm required) can conduct hangman games for the chat. [s- hangman #channel]`, inline: false },
      { name: `8ball`, value: `Mysterious 8ball to answer your questions. [s- 8ball <question>]`, inline: false },
      { name: `howgay`, value: `Gay rate calculator. [s- howgay @user]`, inline: false },
      { name: `simprate`, value: `Simp rate calculator. [s- simprate @user]`, inline: false },
      { name: `say`, value: `The bot displays user's message as an embed. [s- say <message>]`, inline: false },
      

    )
    .setColor("#5708ab")
    .setTimestamp();

    let msg = await message.channel.send('Displaying the help menu...');
        msg.edit(helpEmbed);
  }
}