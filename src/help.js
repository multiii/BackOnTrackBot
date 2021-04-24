// Episode 15 ->

module.exports = {
  name: 'help',
  description: "Used to get a list of all Commands",
  execute(bot, message, args, Discord, commandFiles) {

    const embed = new Discord.MessageEmbed()
    .setTitle('Help Command')
    .setDescription("List of all Commands")
    .setColor("#00ff00")

    for (let file of commandFiles) {

      file = file.replace(".js", "")

      embed.addField(bot.commands.get(file).name, bot.commands.get(file).description, true)

    }

    message.channel.send(embed)

  }
}