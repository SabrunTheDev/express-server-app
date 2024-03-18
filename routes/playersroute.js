const express = require("express");
const router = express.Router();

const players = require("../data/players");

router
  .route("/")
  .get((req, res) => {
    let filteredPlayers = [...players];
    const { team, rings } = req.query;

    if (team) {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.team === team
      );
    }

    if (rings) {
      filteredPlayers = filteredPlayers.filter(
        (player) => player.rings === parseInt(rings)
      );
    }
    res.send(filteredPlayers);
  })
  .post((req, res) => {
    if (req.body.name && req.body.team) {
      if (players.find((player) => player.name === req.body.name)) {
        res
          .status(400)
          .json({ error: `Player already exists: ${req.body.name}` });
        return;
      }

      const newPlayer = {
        id: players[players.length - 1].id + 1,
        name: req.body.name,
        rings: parseInt(req.body.rings),
        mvps: parseInt(req.body.mvps),
        team: req.body.team,
      };

      players.push(newPlayer);

      res.json({ message: "Player added successfully", player: newPlayer });
      console.log({ message: "Player added successfully", player: newPlayer });
    } else {
      res.status(400).json({ error: "Missing required fields" });
    }
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const eachplayer = players.find((a) => a.id == req.params.id);
    if (eachplayer) {
      res.json(eachplayer);
    } else {
      const err = new Error("Player not found");
      err.status = 404;
      next(err);
    }
  })
  .delete((req, res, next) => {
    const index = players.findIndex((u) => u.id == req.params.id);
    if (index !== -1) {
      const deletedPlayer = players.splice(index, 1)[0];
      res.json({ message: "Player has been deleted", player: deletedPlayer });
    } else {
      next();
    }
  });

module.exports = router;
