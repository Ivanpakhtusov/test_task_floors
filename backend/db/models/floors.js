"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Floors extends Model {
    static associate(models) {}
  }
  Floors.init(
    {
      floor: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      pos_on_floor: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      rooms: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      area_total: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      area_kitchen: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      area_live: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      layout_image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Floors",
      timestamps: false,
    }
  );
  return Floors;
};
