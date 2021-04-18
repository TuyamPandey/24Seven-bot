const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  async run(client, message, args) {

    const helpmenu = new Discord.MessageEmbed()
    .setTitle('Welcome to the Help Menu!')
    .setDescription('Type `s- invite` to invite me to your server. Following are the list of Help Pages available. You may click on the reactions below to visit the pages.')
    .addFields(
      { name: `1. Help Menu`, value: `Current page.`, inline: false },
      { name: `2. Moderation`, value: `Commands for moderation.`, inline: false },
      { name: `3. Giveaway`, value: `Commands for conducting giveaways.`, inline: false },
      { name: `4. Fun-Zone`, value: `Commands for games and fun activites.`, inline: false },
      { name: `5. Utility`, value: `Commands for utility services.`, inline: false },
    )
    .addField( '`Support Server Link: `', '[Join Server](https://discord.gg/EkMm9Zzr5Q)')
    .addField( '`Voting Link: `', '[Vote](https://top.gg/bot/801139364372414475/vote)')
    .setTimestamp()

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation Commands: ')
        .addFields(
          { name: '`s- kick`', value: `Kicks mentioned user. [s- kick @user <reason>]`, inline: false },
          { name: '`s- ban`', value: `Bans mentioned user. [s- ban @user <reason>]`, inline: false },
          { name: '`s- unban`', value: `Unbans mentioned user ID. [s- unban userid <reason> | (Enable developer options in your settings to see user id)]`, inline: false },
          { name: '`s- purge`', value: `Deletes specified number of messages. [s- purge <number of messages>]`, inline: false },
          { name: '`s- nuke`', value: `Deletes channel and creates a copy of it. [s- nuke]`, inline: false },
          { name: '`s- nickname`', value: `Changes server name of mentioned user. [s- nickname @user <new nick>]`, inline: false },
        )
        .setColor("#5708ab")
        .setTimestamp()

        const giveawayemb = new Discord.MessageEmbed()
        .setTitle('Giveaway Commands: ')
        .addFields(
          { name: '`s- giveaway`', value: `Create giveaway. [s- giveaway <#channel> <time> <no. of winners> <prize> | (for time denote as: 3s,4h,6d)]`, inline: false },
          { name: '`s- end`', value: `Ends the giveaway instantly. [s- end <message id> | (Enable developer options in your settings to see message id. Right click on message and click copy id, then paste as given in format.)]`, inline: false },
          { name: '`s- reroll`', value: `Reroll the giveaway. [s- reroll <message id>]`, inline: false },
        )
        .setColor("#5708ab")
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun-Zone: ')
        .addFields(
          { name: '`s- meme`', value: `Fetches a meme for the user. [s- meme]`, inline: false },
          { name: '`s- rps`', value: `Classic rock paper scissors game vs the bot. [s- rps]`, inline: false },
          { name: '`s- tictactoe`', value: `Play tictactoe with another user. [s- tictactoe @user]`, inline: false },
          { name: '`s- hangman`', value: `Moderators(Manage Messages perm required) can conduct hangman games for the chat. [s- hangman #channel]`, inline: false },
          { name: '`s- 8ball`', value: `Mysterious 8ball to answer your questions. [s- 8ball <question>]`, inline: false },
          { name: '`s- howgay`', value: `Gay rate calculator. [s- howgay @user]`, inline: false },
          { name: '`s- simprate`', value: `Simp rate calculator. [s- simprate @user]`, inline: false },
          { name: '`s- say`', value: `The bot displays user's message as an embed. [s- say <message>]`, inline: false },
        )
        .setColor("#5708ab")
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility Commands: ')
        .addFields(
          { name: '`s- weather`', value: `Displays weather information. [s- weather <location name>]`, inline: false },
          
        )
        .setColor("#5708ab")
        .setTimestamp()


        const pages = [
                helpmenu,
                moderation,
                giveawayemb,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '150000';

        pagination(message, pages, emojiList, timeout)
    }
}