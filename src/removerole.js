// Episode 14 ->

module.exports = {
  name: 'removerole',
  description: "Used to remove roles to a member",
  execute(message, args) {
    if (!(message.member.roles.cache.some(r => r.id === "783700556472254525"))) return

    let member = message.mentions.members.first()
    let role = message.guild.roles.cache.find(role => role.name === args[1])

    message.channel.send(`The ${args[1]} role has been removed from ${message.mentions.users.first().username}.`)

    member.roles.remove(role)

  }
}