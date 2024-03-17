const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
});
