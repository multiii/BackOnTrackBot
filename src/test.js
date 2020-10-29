// Episode 10 ->

module.exports = {
  name: 'test',
  description: "test command",
  execute(message, args, db) {
    console.log(db.get(`user_${message.author.id}`))
  }
}