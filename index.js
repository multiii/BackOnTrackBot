const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
let PREFIX
const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

const ms = require('parse-ms')

const cooldown = new Set();

const db = require('quick.db')

// Episode 5 ->

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./src/${file}`);
  bot.commands.set(command.name, command);
}

// Episode 9 ->

bot.on('message', async message => {

  if (db.get(`prefix_${message.guild.id}`) === null) {
    PREFIX = "!"
  }

  else {
    PREFIX = db.get(`prefix_${message.guild.id}`)
  }

})

// ... <-

bot.on('ready', () => {
console.log("Online")

});

bot.on('message', async message => {
if (!message.content.startsWith(PREFIX)) return;

let args = message.content.slice(PREFIX.length).split(" ");
let command = args.shift().toLowerCase()

// Episode 2 ->

if (command === "ping"){ 
  bot.commands.get('ping').execute(message, args)
}

if (command === "beep"){
 bot.commands.get('beep').execute(message, args)
}

// Episode 3 ->

if (command === "agl"){
  bot.commands.get('agl').execute(message, args)
}

// Episode 4 ->

if (command === 'embed') {

  bot.commands.get('embed').execute(message, args, Discord)

}

// Episode 6 ->

if (command === "rand") {
  bot.commands.get('rand').execute(message, args, Discord)
}

// Episode 7 ->

if (command === "math") {
  bot.commands.get('math').execute(message, args)
}

// Episode 8 ->

if (command === "8ball") {
  bot.commands.get('8ball').execute(message, args)
}

// Episode 9 ->

if (command === "prefix") {
  bot.commands.get('prefix').execute(message, args, db)
}

// Episode 10 ->

if (command === "start") {
  bot.commands.get('start').execute(message, args, db)
}

if (command === "bal") {
  bot.commands.get('bal').execute(message, args, db, Discord, PREFIX)
}

if (command === "daily"){

  if (cooldown.has(`daily_${message.author.id}`)) {
    message.channel.send("You will have to wait until tomorrow")
  }

  else {


  bot.commands.get('daily').execute(message, args, db)
  cooldown.add(`daily_${message.author.id}`)

  setTimeout(() => {
    cooldown.delete(`daily_${message.author.id}`)
  }, 8.64e+7)

  }
}

if (command === "buy") {
  bot.commands.get('buy').execute(message, args, db)
}

if (command === "test") {
  bot.commands.get('test').execute(message, args, db)
}

// ... <-

});
bot.login(token);
