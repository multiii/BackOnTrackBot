// Episode 11 ->

module.exports = {
  name: 'attack',
  description: "allows the user to gain xp by attacking",
  execute(message, args, db){

    if (db.get(`user_${message.author.id}.inv.weapon`) === "Sword") {

      let rand1 = Math.floor(Math.random() * (750 - 500) + 500)

      db.add(`user_${message.author.id}.xp`, rand1)
      message.channel.send(`You have received ${rand1} xp`)

    }

    else {
      message.channel.send("You will need to buy a weapon before attacking.")
    }

  }
}