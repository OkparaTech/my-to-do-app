# 🎨 Premium To-Do App

A clean, modern To-Do application built with HTML, CSS, and JavaScript. It features an elegant custom theme color picker and saves all your data automatically.

**🔗 Live Website:** [Click here to view my live website](https://okparatech.github.io/my-to-do-app/)

---

## ✨ Features

- 🎨 **Fancy Theme Button:** Click the custom paintbrush button at the top to change the background color instantly.
- 💾 **Data Persistence:** Tasks and your chosen background color are saved to `localStorage`, so they stay put even if you refresh the page.
- 🔓 **No Text Limits:** Long text wraps cleanly inside the app box without breaking the design layout.
- 📱 **Mobile Friendly:** Works perfectly on phones, tablets, and desktop computers.

---

## 🛠️ How the Files Work Together

- **`index.html` (The Bones):** Sets up the visual structure, inputs, and buttons.
- **`style.css` (The Skin):** Handles the colors, animations, layout positioning, and button designs.
- **`script.js` (The Brain):** Listens for clicks, adds or deletes tasks, and handles browser memory storage.

---

## 🚀 How to Run it Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/OkparaTech/my-to-do-app.git
   ```
2. Navigate into the folder:
   ```bash
   cd my-to-do-app
   ```
3. Open `index.html` in your browser to run it.

## 🧠 Software Engineering Principles Applied
- **Separation of Concerns:** Distinctly dividing structure (HTML), presentation (CSS), and runtime logic (JavaScript) into isolated files to maximize code maintainability.
- **State Management:** Tracking data state alterations locally before updating the visual representation in the DOM.
