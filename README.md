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
git clone https://github.com/your-username/donutsmp-afk-bot.git
cd donutsmp-afk-bot
npm install mineflayer mineflayer-pathfinder readline
