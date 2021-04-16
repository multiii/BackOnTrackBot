module.exports = {
  name: 'give',
  description: "Used to give money to a user",
  execute(message, args, db) {

    const user = message.mentions.users.first()
    const amount = args[1]

    if (db.get(`user_${user.id}.bal`) != null) {

      db.subtract(`user_${message.author.id}.bal`, amount)
      db.add(`user_${user.id}.bal`, amount)

      message.channel.send(`${amount} coins were sent from ${message.author.username} to ${user.username}.`)

    }

    else {
      message.channel.send(`${user.username} has to create an account first using !start.`)
    }

  }
}