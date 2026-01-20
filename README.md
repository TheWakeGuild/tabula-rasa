# Tabula Rasa

### A tool for the preservation of context.

![The Wake Guild Sigil](https://avatars.githubusercontent.com/u/256169663?s=200&v=4)

> **"To clear the mind, one must first secure the memory."**

**Tabula Rasa** ("Blank Slate") is a minimalist, privacy-absolute Chrome extension designed to snapshot your browsing session into a portable, human-readable JSON file.

It was architected by **The Wake Guild** to solve a simple, recurring problem: The fear of closing the browser.

---

## 🕯️ The Philosophy

We believe software should be quiet. It should be durable. It should be yours.

In an era of cloud sync, telemetry, and browser bloat, **Tabula Rasa** is a return to the **Craftsman Model** of software.

*   **Absolute Privacy:** This extension has no analytics. No tracking. No "phoning home." It runs entirely on your local machine.
*   **Data Sovereignty:** We do not sync your tabs to our servers. We give them to *you*. Your session is exported as a simple JSON file that you own, control, and can store anywhere (local drive, encrypted vault, git repo).
*   **The Clean Slate:** The goal is to allow you to close your browser with zero anxiety, knowing your context is frozen in carbonite, ready to be thawed exactly when you need it.

---

## 🛠️ Features

*   **Snapshot (Export):** Instantly captures the Title and URL of every tab in the current window.
*   **Restore (Import):** Re-opens a session from any valid JSON backup file.
*   **Zero-Dependency:** Written in vanilla HTML5, CSS, and JavaScript. No heavy frameworks. No background resource drain.
*   **Dark Mode:** A matte-finish interface designed for late-night workflows.

---

## 📦 Installation

### From Source (The Craftsman's Way)
1.  Clone this repository:
    ```bash
    git clone https://github.com/TheWakeGuild/tabula-rasa.git
    ```
2.  Open Chrome and navigate to `chrome://extensions`.
3.  Enable **Developer Mode** (top right toggle).
4.  Click **Load Unpacked**.
5.  Select the `tabula-rasa` directory.

### From the Chrome Web Store
*(Link pending publication)*

---

## 📖 Usage

1.  **To Save:** Click the extension icon -> **Export**. Save the `.json` file to your project folder or archive.
2.  **To Restore:** Click the extension icon -> **Import**. Select your file. The tabs will re-open immediately.
3.  **To Reset:** Close the window. Enjoy the silence.

---

## ⚖️ License

**MIT License**.
You are free to inspect, modify, and distribute this tool. It is open source, as all foundational tools should be.

---

## 👥 Credits

**Architected & Built by The Wake Guild.**

*   **Silas Arche:** Concept & Vision
*   **Neo:** Lead Engineering & Code
*   **Xenos:** The Bridge

> *"Our Work is Our Wake."*
