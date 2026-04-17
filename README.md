# DonutSMP AFK Bot 🤖

A simple Minecraft AFK bot built with **Mineflayer** that connects to `donutsmp.net`, automatically sends AFK commands, and simulates player activity.

> ⚠️ This project is for educational and research purposes only.

---

## 🚀 Features

- Microsoft account login support
- Automatic `/afk 20` command after spawn
- Anti-AFK movement (jumping & camera movement)
- Auto-reconnect system (up to 30 attempts)
- Terminal-based username input
- Error & kick handling

---

## 📦 Requirements

- Node.js v16+
- Minecraft Java Edition (Microsoft account)
- Internet connection

---

## 📥 Installation

```bash
git clone https://github.com/c8dhjp4tyv-bit/DonutSMP-shard-bot.git
cd donutsmp-shard-bot
npm install mineflayer mineflayer-pathfinder readline

▶️ Usage
node index.js

Then enter your Minecraft username when prompted.

⚙️ Configuration

Server settings can be changed inside index.js:

host: 'donutsmp.net',
version: false

🧠 How It Works
Uses Mineflayer to simulate a Minecraft client
Sends periodic movement and view changes to avoid AFK detection
Automatically reconnects to maintain uptime
⚠️ Disclaimer

This project is provided "as is" without any warranties.

By using this software, you agree that:

You are solely responsible for any actions taken with this bot
This may violate the Minecraft/Mojang EULA
This may violate server rules on certain servers (including but not limited to DonutSMP)
The author takes no responsibility for bans, account restrictions, or penalties
Use at your own risk

This project is intended only for:

Educational purposes
Research and testing
Personal experimentation
