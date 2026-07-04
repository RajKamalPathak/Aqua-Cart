# 🌊 Aqua Cart

> 📘 Looking for full documentation?  
> See **[README Full](README-FULL.md)**.

Aqua Cart is a full-stack e-commerce project for premium aquarium fish, built to demonstrate practical frontend, backend, and database integration.

## 🚀 Highlights

- Built **two frontend versions**:
  - Legacy: HTML/CSS/JavaScript
  - Modern: React + Vite (`Aqua Cart React/`)
- Developed a **Node.js + Express API** for authentication and cart operations
- Integrated **MySQL** for persistent user and cart data
- Implemented core commerce flow: **browse → add to cart → checkout-ready state**

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React, Vite  
- **Backend:** Node.js, Express, CORS  
- **Database:** MySQL (`mysql2`)

## 📂 Structure

```text
Aqua-Cart/
├── Aqua Cart React/     # React + Vite frontend
├── backend/             # Express API + MySQL integration
├── Aqua Cart.html/css/js
├── Login.html
├── Register.html
└── aquacart_db.sql
```

## ⚙️ Run Locally

### 1) Backend
```bash
cd backend
npm install
npm start
```

### 2) React Frontend
```bash
cd "Aqua Cart React"
npm install
npm run dev
```

### 3) Database
Import schema:
```bash
mysql -u root -p < aquacart_db.sql
```

## 👨‍💻 Why this project matters

This project reflects my ability to:
- design and connect full-stack systems
- migrate from legacy UI to modern React architecture
- build real-world CRUD/auth/cart workflows with SQL-backed persistence

## 👤 Author

**Raj Kamal Pathak**  
GitHub: [@RajKamalPathak](https://github.com/RajKamalPathak)
