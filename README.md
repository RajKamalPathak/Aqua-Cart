# 🌊 Aqua Cart - Private Aquarium Collection

Aqua Cart is a premium e-commerce platform designed for curating and selling luxury aquarium fish, including Golden Highback Arowanas, Japanese Koi, and Black Ranchu. The platform caters to private clients, offering a seamless experience from browsing exclusive collections to booking custom aquatic spaces for luxury homes.

## ✨ Features

- **Dynamic User Interface:** Time-based greetings and responsive design optimized for desktop and mobile viewing.
- **Client Authentication:** Secure registration and login system handling user sessions.
- **Shopping Cart System:** Real-time cart tracking, price calculation, and seamless checkout/booking flow.
- **Dual-Frontend Architecture:** A stable vanilla HTML/CSS/JS frontend, alongside an active migration to a modern React (Vite) application.
- **Custom Backend API:** Node.js Express server handling modular endpoints for authentication and cart operations.
- **Relational Database:** MySQL-backed architecture for managing client profiles, fish inventory, and cart data.

## 🛠️ Tech Stack

- **Vanilla Frontend:** HTML5, CSS3, Vanilla JavaScript (DOM manipulation & Fetch API).
- **React Frontend:** React, Vite (`Aqua Cart React/` directory).
- **Backend:** Node.js, Express, CORS.
- **Database:** MySQL (`mysql2` package).

## 📂 Project Structure

```text
Aqua-Cart/
├── Aqua Cart React/         # Modern React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js API Server
│   ├── node_modules/
│   ├── db.js                # MySQL connection configuration
│   ├── server.js            # Express server and API routes
│   └── package.json         # Backend dependencies (express, cors, mysql2)
├── .gitignore               # Git ignore rules
├── Aqua Cart.css            # Core stylesheet for vanilla frontend
├── Aqua Cart.html           # Main landing and shopping page
├── Aqua Cart.js             # Frontend logic (cart, authentication, UI)
├── Aqua Cart.jsx            # Experimental React component
├── Login.html               # Client login interface
├── Register.html            # Client registration interface
├── aquacart_db.sql          # Database schema and seed data
└── *.jpg / *.webp / *.avif  # High-quality gallery and product images
```
