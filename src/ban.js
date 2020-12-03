module.exports = {
  name: 'ban',
  description: "Used to ban members from a server",
  async execute(message, args, Discord) {

    if (!(message.member.roles.cache.some(r => r.id === "783700556472254525"))) return

    try
    {

      let reason;

      const user = message.mentions.users.first()

      if (!args[1])
      {
        reason = "Not specified"
      }

      else
      {
        reason = args[1]
      }

      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.mentions.users.first().username} was banned!`)
      .setDescription(`${message.mentions.users.first().username} was banned by ${message.author.username} for: ${reason}`)
      .setColor("GREEN")
      .setFooter("Ban Command")
      .setTimestamp()

      message.channel.send(embed)
      await message.guild.members.ban(user)

    }

    catch(e)
    {
      message.channel.send(e)
    }

  }
}