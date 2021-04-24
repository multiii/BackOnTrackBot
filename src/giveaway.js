// Episode 18 ->

module.exports = {
  name: "giveaway",
  description: "Used to conduct giveaways on a server",
  async execute(message, args, Discord, m) {

    // ?giveaway 2 2m prize prize

    let winners = args[0]
    let time = args[1]
    let prize = args.slice(2).join(' ')

    if (!winners) return message.channel.send("You did not enter the no. of winners.")

    if (!time) return message.channel.send("You did not enter the time.")

    if (!prize) return message.channel.send("You did not enter the prize.")

    time = m(time)

    const embed = new Discord.MessageEmbed()
    .setTitle("React with 🎉 to enter the giveaway!")
    .setDescription(`Prize: ${prize}\nDuration: ${m(time, { long: true })}\nHosted By: ${message.author.username}`)
    .setColor("#00FF00")
    .setFooter("Ends At")
    .setTimestamp(Date.now() + time)

    const e = await message.channel.send(embed)

    e.react("🎉")

    setTimeout(async () => {

      let reactions = await e.reactions.cache.get("🎉").users.fetch()
      reactions = reactions.array().filter(user => user.id != "720631615256002601")

      let w = []

      for (let i = 1; i <= winners; i++) {
        w.push(reactions[Math.floor(Math.random() * reactions.length)])
      }

      message.channel.send(`${prize} was won by the following participants: ${w.join(", ")}`)

    }, time)

  }
}