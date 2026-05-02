const mineflayer = require('mineflayer')
const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let bot = null
let reconnectAttempts = 0
let savedUsername = null
let reconnectTimer = null
let activeIntervals = []   // FIX 1: track all intervals
let isReconnecting = false // FIX 3: prevent double-reconnect

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

function clearIntervals() {
  activeIntervals.forEach(id => clearInterval(id))
  activeIntervals = []
}

async function createBot(username) {
  savedUsername = username
  isReconnecting = false
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
    clearIntervals() // clear any leftover intervals from previous session

    setTimeout(() => {
      if (bot) {
        bot.chat('/afk 20')
        console.log('Sent /afk 20 - AFK Lobby 20 activated')
      }
    }, 6000)

    // FIX 2: capture bot reference at interval creation time
    const jumpInterval = setInterval(() => {
      const b = bot
      if (b && b.entity) {
        b.setControlState('jump', true)
        setTimeout(() => {
          if (b && b.entity) b.setControlState('jump', false)
        }, 180)
      }
    }, 550)

    const lookInterval = setInterval(() => {
      const b = bot
      if (b && b.entity) {
        b.look(b.entity.yaw + (Math.random() * 0.8 - 0.4), b.entity.pitch)
      }
    }, 8500)

    activeIntervals.push(jumpInterval, lookInterval) // FIX 1: track them
  })

  bot.on('kicked', (reason) => {
    try {
      const parsed = typeof reason === 'string' ? JSON.parse(reason) : reason
      console.log('Kicked:', JSON.stringify(parsed, null, 2))
    } catch {
      console.log('Kicked:', reason)
    }
    reconnect()
  })

  bot.on('end', () => {
    if (isReconnecting) return // FIX 3: kicked already triggered reconnect
    console.log('Connection lost. Reconnecting in 5 minutes...')
    reconnect()
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

function reconnect() {
  if (isReconnecting) return // FIX 3: deduplicate
  if (reconnectTimer) return

  isReconnecting = true
  clearIntervals() // FIX 1: stop all intervals immediately

  if (reconnectAttempts >= MAX_RECONNECT) {
    console.log('Too many reconnect attempts. Stopping bot.')
    rl.close()
    return
  }

  reconnectAttempts++
  console.log(`Reconnect attempt ${reconnectAttempts}/${MAX_RECONNECT} - Waiting 5 minutes...`)

  reconnectTimer = setTimeout(() => {
    reconnectTimer = null
    if (bot && typeof bot.end === 'function') bot.end()
    bot = null
    createBot(savedUsername)
  }, 300000)
}

console.log('DonutSMP AFK Bot started.\n')
askUsername().then((username) => createBot(username))

process.on('SIGINT', () => {
  console.log('\nBot shutting down...')
  clearIntervals()
  if (reconnectTimer) clearTimeout(reconnectTimer)
  if (bot && typeof bot.end === 'function') bot.end()
  rl.close()
  process.exit(0)
})
