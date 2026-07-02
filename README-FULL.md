# 🌊 Aqua Cart

> ⚡ Prefer the quick version?  
> See **[README](README.md)**.

Aqua Cart is a full-stack e-commerce application for showcasing and selling premium aquarium fish (e.g., Arowana, Koi, Ranchu).  
The repository currently contains:

- a **legacy Vanilla JS frontend** (`.html/.css/.js`)
- a **modern React (Vite) frontend** under `Aqua Cart React/`
- a **Node.js + Express backend API**
- a **MySQL database schema/seed script**

> This project is currently in a migration phase from Vanilla JS UI to React.

---

## 📸 Preview

Add screenshots or GIFs here (recommended):

- Landing page
- Product listing
- Cart flow
- Login/Register
- Admin/management screens (if available)

---

## ✨ Features

### Customer Experience
- Responsive storefront UI for desktop/mobile
- Product browsing for premium aquarium fish
- Add/remove cart items
- Running cart total and checkout-ready flow

### Authentication
- User registration
- User login
- Session/auth state handling in frontend/backend flow

### Backend/API
- Express API for auth and cart operations
- Modular backend setup for future feature expansion
- CORS-enabled client/server communication

### Data Layer
- MySQL-backed persistence
- SQL schema and seed data included (`aquacart_db.sql`)

### Frontend Architecture
- Legacy Vanilla frontend retained for stability
- New React + Vite frontend under active migration

---

## 🛠️ Tech Stack

**Frontend (Legacy):**
- HTML5
- CSS3
- Vanilla JavaScript (DOM + Fetch API)

**Frontend (Modern):**
- React
- Vite

**Backend:**
- Node.js
- Express
- CORS
- mysql2

**Database:**
- MySQL

---

## 📂 Project Structure

```text
Aqua-Cart/
├── Aqua Cart React/         # React + Vite frontend (migration target)
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js API server
│   ├── db.js                # MySQL connection config
│   ├── server.js            # API routes and server bootstrap
│   └── package.json
├── Aqua Cart.html           # Legacy storefront page
├── Aqua Cart.css            # Legacy storefront styling
├── Aqua Cart.js             # Legacy frontend logic
├── Login.html               # Login page
├── Register.html            # Registration page
├── aquacart_db.sql          # Database schema + seed
└── .gitignore
```

---

## ✅ Prerequisites

Make sure the following are installed:

- **Node.js** 18+ (recommended)
- **npm** 9+ (or compatible)
- **MySQL** 8+ (or compatible)

---

## ⚙️ Environment Configuration

Create a `.env` file in `backend/` (or update `db.js` if using hardcoded config).

Example:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=aquacart_db
DB_PORT=3306
```

> If your current code reads directly from `db.js`, migrate credentials to `.env` for safer configuration management.

---

## 🗄️ Database Setup

1. Start your MySQL server.
2. Create/import the database using `aquacart_db.sql`.

Example (CLI):

```bash
mysql -u root -p < aquacart_db.sql
```

Or import via MySQL Workbench.

---

## 🚀 Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/RajKamalPathak/Aqua-Cart.git
cd Aqua-Cart
```

### 2) Run backend API

```bash
cd backend
npm install
npm start
```

Backend expected at: `http://localhost:5000` (or your configured `PORT`)

### 3) Run React frontend (recommended modern UI)

```bash
cd "../Aqua Cart React"
npm install
npm run dev
```

Frontend expected at Vite default: `http://localhost:5173`

### 4) Run legacy frontend (optional)

Open `Aqua Cart.html` directly in browser  
or serve statically with any local server.

---

## 🔌 API Overview (Document Your Actual Routes)

> Update these endpoints to exactly match `backend/server.js`.

Example route groups:
- `POST /api/register`
- `POST /api/login`
- `GET /api/cart/:userId`
- `POST /api/cart`
- `PUT /api/cart/:itemId`
- `DELETE /api/cart/:itemId`

---

## 🧪 Testing & Quality (Recommended Improvements)

Current repo appears focused on implementation. For production hardening, add:

- Unit/integration tests (Jest + Supertest)
- Input validation (Joi/Zod/express-validator)
- Password hashing (`bcrypt`)
- Auth tokens/sessions with secure cookie/JWT practices
- Rate limiting (`express-rate-limit`)
- Helmet security headers
- Structured logging (pino/winston)
- Linting + formatting (ESLint + Prettier)

---

## 🔐 Security Notes

For real-world deployment:

- Do **not** commit secrets or DB credentials.
- Use `.env` and secret managers.
- Hash passwords before storing.
- Validate and sanitize all user input.
- Restrict CORS to trusted origins.
- Use HTTPS in production.

---

## 📦 Deployment

You can deploy components independently:

- **Frontend (React):** Vercel / Netlify
- **Backend (Express):** Render / Railway / Fly.io / VPS
- **Database (MySQL):** PlanetScale / Railway / managed MySQL

Suggested production architecture:
- React static app + API as separate services
- Managed DB with backups
- Environment-based config (`development`, `staging`, `production`)

---

## 🗺️ Roadmap

- [ ] Complete migration from Vanilla frontend to React
- [ ] Introduce product inventory management dashboard
- [ ] Add checkout/payment integration
- [ ] Add order history and tracking
- [ ] Add automated tests and CI pipeline
- [ ] Add role-based access (admin/customer)

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch (`feature/your-feature`)
3. Commit changes
4. Open a Pull Request

---


## 👤 Author

**Raj Kamal Pathak**  
GitHub: [@RajKamalPathak](https://github.com/RajKamalPathak)

---

## 🙏 Acknowledgements

- Aquarium and aquascaping enthusiast communities
- Open-source Node.js and React ecosystem
