// Episode 10 -> [Changes made for Episode 11]

module.exports = {
  name: 'test',
  description: "test command",
  execute(message, args, db) {
    //db.delete(`user_${message.author.id}`)
    console.log(db.get(`user_${message.author.id}`))
   }
}