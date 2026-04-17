const mineflayer = require('mineflayer')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let bot = null
let reconnectAttempts = 0
let savedUsername = null
const MAX_RECONNECT = 30

function askUsername() {
  return new Promise((resolve) => {
    rl.question('Enter your Minecraft username: ', (username) => {
      if (!username || username.trim() === '') {
        console.log('Username cannot be empty!')
        resolve(askUsername())
      } else {
        resolve(username.trim())
      }
    })
  })
}

async function createBot(username) {
  savedUsername = username
  console.log(`\nConnecting with account: ${username}...`)

  bot = mineflayer.createBot({
    host: 'donutsmp.net',
    username: username,
    auth: 'microsoft',
    version: false
  })

  bot.on('spawn', () => {
    console.log(`Successfully connected as ${username}`)
    reconnectAttempts = 0

    setTimeout(() => {
      bot.chat('/afk 20')
      console.log('Sent /afk 20 - AFK Lobby 20 activated')
    }, 6000)

    setInterval(() => {
      if (bot.entity) {
        bot.setControlState('jump', true)
        setTimeout(() => bot.setControlState('jump', false), 180)
      }
    }, 550)

    setInterval(() => {
      if (bot.entity) {
        bot.look(bot.entity.yaw + (Math.random() * 0.8 - 0.4), bot.entity.pitch)
      }
    }, 8500)
  })

  bot.on('kicked', (reason) => {
    console.log(`Kicked: ${reason}`)
    reconnect()
  })

  bot.on('end', () => {
    console.log('Connection lost. Reconnecting in 5 minutes...')
    reconnect()
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

function reconnect() {
  if (reconnectAttempts >= MAX_RECONNECT) {
    console.log('Too many reconnect attempts. Stopping bot.')
    rl.close()
    return
  }

  reconnectAttempts++
  console.log(`Reconnect attempt ${reconnectAttempts}/${MAX_RECONNECT} - Waiting 5 minutes...`)

  setTimeout(() => {
    if (bot) bot.quit()
    createBot(savedUsername)
  }, 300000)
}

console.log('DonutSMP AFK Bot started.\n')

askUsername().then((username) => {
  createBot(username)
})

process.on('SIGINT', () => {
  console.log('\nBot shutting down...')
  if (bot) bot.quit()
  rl.close()
  process.exit(0)
})
