const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1980",
  database: "aquacart_db",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Aqua Cart Backend Running");
});

/* ---------- LOGIN (WORKING – DO NOT TOUCH) ---------- */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM clients WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).send("Server error");
    }

    if (result.length === 0) {
      return res.status(401).send("Invalid credentials");
    }

    res.json({
      message: "Login successful",
      name: result[0].name,
    });
  });
});

/* ---------- REGISTER (FIXED) ---------- */
app.post("/register", (req, res) => {
  const { name, email, password, city } = req.body;

  if (!name || !email || !password || !city) {
    return res.status(400).send("All fields required");
  }

  const checkSql = "SELECT * FROM clients WHERE email=?";

  db.query(checkSql, [email], (err, result) => {
    if (err) {
      return res.status(500).send("Server error");
    }

    if (result.length > 0) {
      return res.status(409).send("Email already registered");
    }

    const insertSql =
      "INSERT INTO clients (name, email, password, city) VALUES (?, ?, ?, ?)";

    db.query(insertSql, [name, email, password, city], (err) => {
      if (err) {
        return res.status(500).send("Registration failed");
      }

      res.send("Registration successful");
    });
  });
});
app.post("/cart/add", (req, res) => {
  const { client_name, fish_name, price } = req.body;

  if (!client_name || !fish_name || !price) {
    return res.status(400).send("Missing cart data");
  }

  const sql =
    "INSERT INTO cart (client_name, fish_name, price) VALUES (?, ?, ?)";

  db.query(sql, [client_name, fish_name, price], (err) => {
    if (err) {
      return res.status(500).send("Failed to add to cart");
    }
    res.send("Added to cart");
  });
});
app.get("/cart/:client_name", (req, res) => {
  const sql = "SELECT * FROM cart WHERE client_name = ?";
  db.query(sql, [req.params.client_name], (err, result) => {
    if (err) return res.status(500).send("Error");
    res.json(result);
  });
});
app.delete("/cart/clear/:client_name", (req, res) => {
  const sql = "DELETE FROM cart WHERE client_name = ?";
  db.query(sql, [req.params.client_name], (err) => {
    if (err) return res.status(500).send("Failed to clear cart");
    res.send("Cart cleared");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
