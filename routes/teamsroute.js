const express = require("express");
const router = express.Router();

const teams = require("../data/teams");

router
  .route("/")
  .get((req, res) => {
    // console.log(teams);
    res.send(teams);
  })
  .post((req, res) => {
    if (req.body.team_name && req.body.division) {
      if (teams.find((u) => u.team_name == req.body.team_name)) {
        res.json({ error: "Team Already Taken" });
        return;
      }
      const newTeam = {
        id: teams[teams.length - 1].id + 1,
        team_name: req.body.team_name,
        division: req.body.division,
      };

      teams.push(newTeam);
      res.json({ message: "Team added successfully", team: newTeam });
      console.log({ message: "Team added successfully", team: newTeam });
    } else res.json({ error: "Insufficient Data" });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const team = teams.find((a) => a.id == req.params.id);
    if (team) {
      res.json(team);
    } else {
      const err = new Error("Team not found");
      err.status = 404;
      next(err);
    }
  })
  .delete((req, res, next) => {
    const teamIndex = teams.findIndex((u) => u.id == req.params.id);
    if (teamIndex !== -1) {
      const deletedTeam = teams.splice(teamIndex, 1)[0];
      res.json({ message: "Team has been deleted", team: deletedTeam });
    } else {
      next();
    }
  });

module.exports = router;
