// Episode 10 -> [Changes made for Episode 11]

module.exports = {
  name: 'start',
  description: "creates an acc for the user",
  execute(message, args, db) {

    if (db.get(`user_${message.author.id}.bal`) === null) {

    db.set(`user_${message.author.id}`, { bal: 0, xp: 0, inv: { weapon: "" } })
    message.reply("An account has been created for you.")

    }

    else {
      message.reply("You already have an account.")
    }

  }
}