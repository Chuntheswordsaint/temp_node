// call
const names = require('./modules/names')
const greet = require('./modules/hi')
const data = require('./modules/alternativecall')
require('./modules/mind-grenade-7')

const greetings = greet.greet + names[0]
const greetings1 = greet.greet + names[1]
const greetings2 = greet.greet + names[2]
const greetings3 = greet.greet + names[3]
const reply = greet.reply + names[0]

console.log(
  greetings +
    '\n' +
    greetings1 +
    '\n' +
    greetings3 +
    '\n' +
    greetings2 +
    '\n' +
    reply
)
console.log(data)
