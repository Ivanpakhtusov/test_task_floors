require("dotenv").config();
const express = require("express");

const app = express();

const PORT = 4000;

const apiRouter = require("./api/api.routes");

app.use(express.json());

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
