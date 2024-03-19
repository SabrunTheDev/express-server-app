const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const fs = require("fs");

const players = require("./data/players");
const teams = require("./data/teams");
const conferences = require("./data/conference");

app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(logger);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("Hello");
  res.render("index", { text: "World" });
});

const playerRouter = require("./routes/playersroute");
app.use("/players", playerRouter);

const teamsRouter = require("./routes/teamsroute");
app.use("/teams", teamsRouter);

app
  .route("/conferences")
  .get((req, res) => {
    res.send(conferences);
  })
  .post((req, res, next) => {
    res.send(conferences);
  });

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource Not Found" });
});

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`);
});
