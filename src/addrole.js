module.exports = {
  name: 'addrole',
  description: "Used to addroles to a member",
  execute(message, args) {

    if (!(message.member.roles.cache.some(r => r.id === "783700556472254525"))) return

    let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(role => role.name === args[1])

    message.channel.send(`${message.mentions.users.first().username} has received the ${args[1]} role.`)

    member.roles.add(role)

  }
}