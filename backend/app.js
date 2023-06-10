require("dotenv").config();
const express = require("express");
const config = require("./config/serverConfig");

const app = express();

const PORT = 4000;

const apiRouter = require("./api/api.routes");

config(app);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
