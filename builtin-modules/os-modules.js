const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method return the system uptime in seconds
const time = os.uptime()

const hours = time / 3600
const minutes = (time % 3600) / 60
const seconds = time % 60

const timeString = `${Math.floor(hours)} Hour ${Math.floor(
  minutes
)} Minutes ${Math.floor(seconds)} Seconds`

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
