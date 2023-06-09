require("dotenv").config();
const { Floors } = require("./db/models");
const findAll = async () => {
  const users = await Floors.findAll({ raw: true });
  return users;
};

findAll().then((el) => console.log(el));
