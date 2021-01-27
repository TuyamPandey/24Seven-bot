const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RpsCommand extends BaseCommand {
  constructor() {
    super('rps', 'fun', []);
  }

  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()
    .setTitle("Rock Paper Scissors Shoot!")
    .setDescription("React to play!")
    .setTimestamp()
    .setColor("Random")
    let msg = await message.channel.send(embed)
    await msg.react("🗿")
    await msg.react("📃")
    await msg.react("✂️")

    const filter = (reaction, user) => {
      return ["🗿", "📃", "✂️"].includes(reaction.emoji.name) && user.id === message.author.id;
    }

    const choices = ["🗿", "📃", "✂️"]
    const me = choices[Math.floor(Math.random() * choices.length)]
    msg.awaitReactions(filter, {max: 1, time: 60000, errors: ["time"]}).then(
      async collected => {
        const reaction = collected.first()
        let result = new Discord.MessageEmbed()
        .setTitle("Result!")
        .addField("Your choice: ", reaction.emoji.name)
        .addField("Bot's choice: ", me)
        await msg.edit(result)
        if((reaction.emoji.name === "🗿" && me === "✂️") ||
            (reaction.emoji.name === "✂️" && me === "📃") ||
            (reaction.emoji.name === "📃" && me === "🗿"))
        {
          message.reply("You won!")
        } 
        if((reaction.emoji.name === "🗿" && me === "🗿") ||
            (reaction.emoji.name === "✂️" && me === "✂️") ||
            (reaction.emoji.name === "📃" && me === "📃"))
        {
          message.reply("It's a tie!")
        } 
        if((reaction.emoji.name === "✂️" && me === "🗿") ||
            (reaction.emoji.name === "📃" && me === "✂️") ||
            (reaction.emoji.name === "🗿" && me === "📃"))
        {
          message.reply("You lost!")
        }
      }
    )
    
    .catch(collected => {
      message.reply("Game aborted as you did not react to any emoji.")
    })
  }
}