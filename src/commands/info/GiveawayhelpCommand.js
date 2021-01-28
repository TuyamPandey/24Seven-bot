const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class GiveawayhelpCommand extends BaseCommand {
  constructor() {
    super('giveawayhelp', 'info', []);
  }

  async run(client, message, args) {
    const ghelpEmbed = new Discord.MessageEmbed()
    .setTitle(`Welcome to the Giveaway Help Menu! `)
    .setDescription(`Following are the list of all commands (Prefix = "s-"): `)
    .setFooter('---Giveaway help log---')
    .addFields(
      { name: `giveaway`, value: `Create giveaway. [s- giveaway <#channel> <time> <no. of winners> <prize> | (for time denote as: 3s,4h,6d)]`, inline: false },
      { name: `end`, value: `Ends the giveaway instantly. [s- end <message id> | (Enable developer options in your settings to see message id. Right click on message and click copy id, then paste as given in format.)]`, inline: false },
      { name: `reroll`, value: `Reroll the giveaway. [s- reroll <message id>]`, inline: false },
      

    )
    .setColor("#5708ab")
    .setTimestamp();

    let msg = await message.channel.send('Displaying the giveaway help menu...');
        msg.edit(ghelpEmbed);
  }
}
    