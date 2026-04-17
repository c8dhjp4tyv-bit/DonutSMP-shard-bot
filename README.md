# DonutSMP AFK Bot 🤖

A simple Minecraft AFK bot built with **Mineflayer** that connects to `donutsmp.net`, automatically sends AFK commands, and simulates player activity to avoid being kicked.

> ⚠️ This project is for educational and research purposes only.

---

## 🚀 Features

- Microsoft account login support
- Automatic `/afk 20` command after spawn
- Anti-AFK movement (jumping & camera rotation)
- Auto-reconnect system (up to 30 attempts, reuses saved username)
- Reconnect counter resets on successful connection
- Terminal-based username input
- Error & kick handling

---

## 📦 Requirements

- Node.js v16+
- Minecraft Java Edition (Microsoft account)
- Internet connection

---

## 📥 Installation

### 1. Install Node.js

**Windows (winget)**
winget install OpenJS.NodeJS.LTS

**Windows (Chocolatey)**
choco install nodejs-lts

**macOS (Homebrew)**
brew install node

**Debian / Ubuntu / Linux Mint / Pop!_OS / Kali**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Fedora**
```bash
sudo dnf install -y nodejs
```

**RHEL / CentOS / Rocky / AlmaLinux**
```bash
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo dnf install -y nodejs
```

**Arch Linux / Manjaro**
```bash
sudo pacman -S nodejs npm
```

**openSUSE**
```bash
sudo zypper install nodejs20
```

**Alpine Linux**
```bash
sudo apk add nodejs npm
```

**Void Linux**
```bash
sudo xbps-install -S nodejs npm
```

### 2. Clone & Install

```bash
git clone https://github.com/c8dhjp4tyv-bit/DonutSMP-shard-bot.git
cd DonutSMP-shard-bot
npm install
```

---

## ▶️ Usage

```bash
node index.js
```

Enter your Minecraft username when prompted. The bot will connect and handle everything automatically.

---

## ⚙️ Configuration

Server settings can be changed inside `index.js`:

```js
host: 'donutsmp.net',
version: false
```

---

## 🧠 How It Works

- Uses Mineflayer to simulate a Minecraft client
- Sends `/afk 20` shortly after spawning
- Periodically jumps and rotates the camera to avoid AFK detection
- On disconnect or kick, automatically reconnects using the saved username (no re-prompt)
- Reconnect counter resets after each successful spawn

---

## ⚠️ Disclaimer

This project is provided "as is" without any warranties.

By using this software, you agree that:

- You are solely responsible for any actions taken with this bot
- This may violate the Minecraft/Mojang EULA
- This may violate server rules (including DonutSMP)
- The author takes no responsibility for bans, account restrictions, or penalties

**Use at your own risk. Intended for educational purposes, research, and personal experimentation only.**
