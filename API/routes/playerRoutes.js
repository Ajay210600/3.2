const express = require("express");
const router = express.Router();
const Player = require("../models/player");

// Get all players
router.get("/players", async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single player
router.get("/players/:id", getPlayer, (req, res) => {
  res.json(res.player);
});

// Create a new player
router.post("/players", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    age: req.body.age,
    position: req.body.position,
    team: req.body.team,
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a player
router.patch("/players/:id", getPlayer, async (req, res) => {
  if (req.body.name != null) {
    res.player.name = req.body.name;
  }

  if (req.body.age != null) {
    res.player.age = req.body.age;
  }

  if (req.body.position != null) {
    res;
    player.position = req.body.position;
  }

  if (req.body.team != null) {
    res.player.team = req.body.team;
  }

  try {
    const updatedPlayer = await res.player.save();
    res.json(updatedPlayer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a player
router.delete("/players/:id", getPlayer, async (req, res) => {
  try {
    await res.player.remove();
    res.json({ message: "Player deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware to get a player by ID
async function getPlayer(req, res, next) {
  let player;

  try {
    player = await Player.findById(req.params.id);

    if (player == null) {
      return res.status(404).json({ message: "Cannot find player" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.player = player;
  next();
}

module.exports = router;
