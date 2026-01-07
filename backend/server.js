const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Aqua Cart Backend Running");
});

app.get("/api/fishes", (req, res) => {
  res.json([
    { id: 1, name: "Golden Arowana", price: 375000 },
    { id: 2, name: "Japanese Koi", price: 125000 },
    { id: 3, name: "Black Ranchu", price: 48000 },
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
