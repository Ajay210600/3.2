const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const playerRoutes = require('./routes/playerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', playerRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
