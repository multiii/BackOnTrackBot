// Episode 2 ->

module.exports = {
  name: 'ping',
  description: "ping cmd",
  execute(message, args) {
    if (!args.length){
    message.channel.send("Ping!")
  }
  else if (args[0] === "pong"){
  message.reply("Pong!")
  }
  }
}