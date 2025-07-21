# Disable YouTube "Experiencing interruptions?" Popup and Playback Delay

## 📌 Overview

This userscript automatically disables the confirmation popup and a few seconds of playback delay that appear during the initial load of a new tab or page on YouTube. For example:

- **"Experiencing interruptions?"** (Japanese: 「再生が中断されていますか？」)

No more interruptions or playback stalls when opening new tabs or loading YouTube pages.

---

## 🚀 Installation

1. Install a userscript manager:
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Tampermonkey](https://www.tampermonkey.net/)
2. Click below to install the script:  
   👉 [Install This Script](https://raw.githubusercontent.com/koyasi777/youtube-disable-experiencing-interruptions/main/youtube-disable-experiencing-interruptions.user.js)

---

## ⚙️ How It Works

- The script intercepts access to the `ytInitialData` property early in the page lifecycle
- It overrides YouTube’s internal logic that schedules inactivity popups
- Executed at `document-start` to prevent popup logic from initializing

---

## 🧪 Compatibility

- ✅ YouTube desktop site (`https://www.youtube.com/*`)
- ✅ Tested with latest Chrome and Firefox
- ✅ Works with Tampermonkey and Violentmonkey

---

## 📜 License

MIT License  
Free to use, modify, and redistribute. Use at your own risk.

