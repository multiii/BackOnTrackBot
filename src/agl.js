// Episode 3 ->

module.exports = {
  name: 'agl',
  description: "agl cmd",
  execute(message, args) {
    if(!args.length) {
    message.channel.send('You need to provide the args')
  }
  else if (args[0] && args[1] && args[2]){
    message.channel.send(`So you are a ${args[0]} year old ${args[1]} living in ${args[2]}`)
  }
  }
}