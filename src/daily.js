// Episode 10 ->

module.exports = {
  name: 'daily',
  description: "provides the user with coins daily",
  execute(message, args, db) {

   if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using \`${PREFIX}start\``)
    }

    else {

    let rand = Math.floor(Math.random() * (1000 - 500) + 500)

    db.add(`user_${message.author.id}.bal`, rand)

    message.channel.send(`You have received ${rand} coins`)

    }

  }
}