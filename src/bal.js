// Episode 10 ->

module.exports = {
  name: 'bal',
  description: "gets the balance of a user",
  execute(message, args, db, Discord, PREFIX) {

    if (db.get(`user_${message.author.id}.bal`) === null) {
      message.reply(`You need to first create an account using \`${PREFIX}start\``)
    }

    else {

    let bal = db.get(`user_${message.author.id}.bal`)

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}\'s Balance`)
    .setDescription(`${bal} coins`)
    .setColor("GREEN")
    .setTimestamp()

    message.channel.send(embed)

    }

  }
}