// Episode 7 ->

module.exports = {
  name: 'math',
  description: "performs simple math functions",
  execute(message, args) {

    let op = args[0]
    let no1 = args[1]
    let no2 = args[2]

    let noo1 = parseInt(no1)
    let noo2 = parseInt(no2)

    let sum;

    if (!args[0]) {
      message.channel.send("You need to type the operation and operands as follows: \`!math add 1 2\`")
    }

    else {

    if (op === "add") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = noo1 + noo2
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "subtract") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = noo1 - noo2
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "multiply") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = noo1 * noo2
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "divide") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = noo1 / noo2
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "power") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = Math.pow(noo1, noo2)
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "root") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = Math.pow(noo1, -(noo2))
        message.channel.send("Your answer is " + sum)
      }
    }
    else if (op === "modulus") {
      if (!args.length || !args[2]) {
        message.reply("You need to enter both the operands next to the operation like this: \`!math add 1 2\`")
      }
      else {
        sum = noo1 % noo2
        message.channel.send("Your answer is " + sum)
      }
    }

    }

  }
}