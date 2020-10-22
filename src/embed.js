// Episode 4 ->

const Discord = require('discord.js');

module.exports = {
  name: 'embed',
  description: "embed cmd",
  execute(message, args, Discord) {
    const embedTutorial = new Discord.MessageEmbed()
  .setTitle("Title")
  .setDescription("Description")
  .setColor("GREEN")
  .addField("Field Title", "Field Value", true)
  .addField("Field Title2", "Field Value2", true)
  .addField("Field Title3", "Field Value3", true)
  .setImage("https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=600")
  .setAuthor("Author", "https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=600")
  .setFooter("Footer")
  .setTimestamp()

  message.channel.send(embedTutorial)
  }
}