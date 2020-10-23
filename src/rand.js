// Episode 6 ->

module.exports = {
  name: 'rand',
  description: "generates a random number",
  execute(message, args, Discord) {

    if (!args.length || !args[1]) {
      message.channel.send("You need to type in the min and max values like this \`!rand 10 5\`")
    }

    else {

      let max = args[0]
      let min = args[1]

    let randNo = Math.round(Math.random() * max + min)

    const embed = new Discord.MessageEmbed()
    .setTitle("You random number is: ")
    .setDescription(randNo)
    .setColor("YELLOW")
    .setFooter("Random Number Generator")
    .setTimestamp()

    message.reply(embed)

    }

  }
}