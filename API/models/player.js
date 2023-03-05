const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  position: String,
  team: String
});

module.exports = mongoose.model('Player', playerSchema);
