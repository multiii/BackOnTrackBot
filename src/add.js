module.exports = {
  name: 'add',
  description: "Used to add money to the account of a user",
  execute(message, args, db) {

    if (message.author.id == "394320584089010179") {

      const user = message.mentions.users.first();

      const amount = args[1];

      if (db.get(`user_${user.id}.bal`) != null) {

        db.add(`user_${user.id}.bal`, amount);

        message.channel.send(`${amount} coins were added to ${user.username}'s balance`)

      } 

      else {
        message.channel.send(`${user.username} first needs to create an account using !start`)
      }

    }

    else {
      message.channel.send("You aren't authorized to use this command.")
    }

  }
}