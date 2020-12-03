module.exports = {
  name: 'kick',
  description: "Used to kick members out of a server",
  execute(message, args, Discord) {

    if (!(message.member.roles.cache.some(r => r.id === "783700556472254525"))) return

    try
    {

      let reason;

      const member = message.mentions.members.first()

      if (!args[1])
      {
        reason = "Not specified"
      }

      else
      {
        reason = args[1]
      }

      const embed = new Discord.MessageEmbed()
      .setTitle(`${message.mentions.users.first().username} was kicked!`)
      .setDescription(`${message.mentions.users.first().username} was kicked by ${message.author.username} for: ${reason}`)
      .setColor("GREEN")
      .setFooter("Kick Command")
      .setTimestamp()

      message.channel.send(embed)
      member.kick()

    }

    catch(e)
    {
      message.channel.send(e)
    }

  }
}