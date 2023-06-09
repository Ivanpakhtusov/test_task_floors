require('dotenv').config();
const express = require('express');
const path = require('path');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

serverConfig(app);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);

});
