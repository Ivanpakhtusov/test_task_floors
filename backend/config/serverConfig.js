require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(cors());
};

module.exports = config;
