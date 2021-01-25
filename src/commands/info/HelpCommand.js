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
    .setDescription(`Following are the list of all commands (Prefix = "-"): `)
    .setFooter('---Help log---')
    .addFields(
      { name: `kick`, value: `Kicks mentioned user.`, inline: false },
      { name: `ban`, value: `Bans mentioned user.`, inline: false },
      { name: `unban`, value: `Unbans mentioned user ID.`, inline: false },
      { name: `purge`, value: `Deletes specified number of messages.`, inline: false },
      { name: `nuke`, value: `Deletes channel and creates a copy of it.`, inline: false },
      { name: `nickname`, value: `Changes server name of mentioned user.`, inline: false },
      { name: `meme`, value: `Fetches a meme for the user.`, inline: false },
      { name: `say`, value: `The bot displays user's message as an embed.`, inline: false },

    )
    .setColor("#5708ab")
    .setTimestamp();

    let msg = await message.channel.send('Displaying the help menu...');
        msg.edit(helpEmbed);
  }
}