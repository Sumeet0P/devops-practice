// backend/index.js
const express = require("express");
const cors = require('cors');
const app = express();
const client = require("prom-client")

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ]
}));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(5000, () => console.log("Server running on port 5000"));