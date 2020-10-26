const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const PREFIX = "!"
const bot = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

// Episode 5 ->

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./src/${file}`);
  bot.commands.set(command.name, command);
}

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

});
bot.login(token);
