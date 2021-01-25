const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("You cannot use this command");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I require \`MANAGE_NICKNAMES\` permission to change nickname.");

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

    if (!args[0]) return message.channel.send("You must state a member to change nickname.");
    if (!mentionedMember) return message.channel.send("The member stated is not in the server.");
    if (!nickName) return message.channel.send("You must state a nickname for the member.");
    if (!mentionedMember.kickable) return message.channel.send("I cannot change that members nickname as their role is higher than mine.");

    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send("Hey I cannot add that nickname due to an error. Please make sure the input is less than 32 characters.")));
  }
}