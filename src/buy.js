// Episode 10 ->

module.exports = {
  name: 'buy',
  description: "used to buy items",
  execute(message, args, db) {

    let item = args[0]

    if (!item) {
      message.channel.send("You will have to specify the item next to the command like this: \`!buy <item>\`")
    }

    else {

      if (item === "water_bottle") {
        db.push(`user_${message.author.id}.inv`, "Water_Bottle")
        message.channel.send("You have bought a water bottle!")
      }

      else if (item === "pencil") {
        db.push(`user_${message.author.id}.inv`, "Pencil")
        message.channel.send("You have bought a pencil!")
      }

      else {
        message.reply("We don't sell that here")
      }

    }

  }
}