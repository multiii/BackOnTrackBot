const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const PREFIX = "!"
const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

bot.on('ready', () => {
console.log("Online")

});

bot.on('message', async message => {
if (!message.content.startsWith(PREFIX)) return;

let args = message.content.slice(PREFIX.length).split(" ");
let command = args.shift().toLowerCase()

// Episode 2 ->

if (command === "ping"){ 
  if (!args.length){
    message.channel.send("Ping!")
  }
  else if (args[0] === "pong"){
  message.reply("Pong!")
  }
}

if (command === "beep"){
  message.reply("Boop!")
}

// Episode 3 ->

if (command === "agl"){
  if(!args.length) {
    message.channel.send('You need to provide the args')
  }
  else if (args[0] && args[1] && args[2]){
    message.channel.send(`So you are a ${args[0]} year old ${args[1]} living in ${args[2]}`)
  }
}

// Episode 4 ->

if (command === 'embed') {

  const embedTutorial = new Discord.MessageEmbed()
  .setTitle("Title")
  .setDescription("Description")
  .setColor("GREEN")
  .addField("Field Title", "Field Value", true)
  .addField("Field Title2", "Field Value2", true)
  .addField("Field Title3", "Field Value3", true)
  .setImage("https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=600")
  .setAuthor("Author", "https://pmcvariety.files.wordpress.com/2018/05/discord-logo.jpg?w=600")
  .setFooter("Footer")
  .setTimestamp()

  message.channel.send(embedTutorial)

}


});
bot.login(token);
