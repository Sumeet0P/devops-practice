// backend/index.js
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ]
}));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(5000, () => console.log("Server running on port 5000"));