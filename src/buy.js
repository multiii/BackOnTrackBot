// Episode 10 -> [Changes made for Episode 11]

module.exports = {
  name: 'buy',
  description: "used to buy items",
  execute(message, args, db) {

    let item = args[0]

    if (!item) {
      message.channel.send("You will have to specify the item next to the command like this: \`!buy <item>\`")
    }

    else {

      if (item === "sword") {
        if (db.get(`user_${message.author.id}.inv.weapon`) === "Sword") {
          message.reply("You already have this item")
        }
        else {
        db.set(`user_${message.author.id}.inv.weapon`, "Sword")
        message.channel.send("You have obtained a sword.")
        }
      }

    }

  }
}