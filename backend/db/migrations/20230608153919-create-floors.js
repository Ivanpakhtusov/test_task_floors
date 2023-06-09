"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Floors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      floor: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pos_on_floor: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rooms: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      area_total: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      area_kitchen: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      area_live: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      layout_image: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Floors");
  },
};
