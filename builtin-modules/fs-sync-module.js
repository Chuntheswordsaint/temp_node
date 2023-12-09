// const fs = require('fs')
// fs.readFileSync

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const third = writeFileSync(
  './content/third.txt',
  `This is the third text: ${first}`,
  { flag: 'a' }
)
console.log(first, second, third)

console.log('done with the task')
console.log('starting the next one')
