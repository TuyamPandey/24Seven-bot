const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'info', []);
  }

  async run(client, message, args) {

    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle(`Invite Page `)
    .setDescription(`Invite the bot to your server for best moderation and fun for your audience! `)
    .setFooter('---24 Seven---')
    .addField( `Invite Link: `, '[Invite Me](https://discord.com/api/oauth2/authorize?client_id=801139364372414475&permissions=2146954487&scope=bot)')
    .setColor("#5708ab")
    .setTimestamp();

    let msg = await message.channel.send('Displaying the invite page...');
        msg.edit('',inviteEmbed);
  }
}

