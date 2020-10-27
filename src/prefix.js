// Episode 9 ->

module.exports = {
  name: 'prefix',
  description: "allows you to change the bot prefix",
  execute(message, args, db) {
    let pre = args[0]

    if (!pre) {
      message.channel.send("You will have to specify the prefix next to the cmd.")
    }

    else {
      db.set(`prefix_${message.guild.id}`, pre)

     message.channel.send(`Your new prefix is ${pre}`)
    }
  }
}