const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hello");
  res.render("index", { text: "World" });
});

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
});
