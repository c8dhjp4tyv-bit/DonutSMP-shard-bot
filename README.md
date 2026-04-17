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

Install node.js

**Windows (PowerShell – winget)**

```
winget install OpenJS.NodeJS.LTS
```

**Windows (Chocolatey)**

```
choco install nodejs-lts
```

**macOS (Homebrew)**

```
brew install node
```

**Debian / Ubuntu**

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Linux Mint**

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Pop!_OS**

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Kali Linux**

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

**Fedora**

```
sudo dnf install -y nodejs
```

**RHEL / CentOS / Rocky / AlmaLinux**

```
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo dnf install -y nodejs
```

**Arch Linux**

```
sudo pacman -S nodejs npm
```

**Manjaro**

```
sudo pacman -S nodejs npm
```

**openSUSE**

```
sudo zypper install nodejs20
```

**Alpine Linux**

```
sudo apk add nodejs npm
```

**Void Linux**

```
sudo xbps-install -S nodejs npm
```


```bash
git clone https://github.com/c8dhjp4tyv-bit/DonutSMP-shard-bot.git
cd DonutSMP-shard-bot
npm install mineflayer mineflayer-pathfinder
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
