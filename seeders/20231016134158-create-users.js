"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");
const { Shop, User } = require("../models");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const shops = await Shop.findAll();
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Kyle",
          address: "Manchester",
          age: 32,
          role: "Owner",
          shopId: shops[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emile",
          address: "London",
          age: 22,
          role: "Owner",
          shopId: shops[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Granit",
          address: "Borussia",
          age: 30,
          role: "Owner",
          shopId: shops[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kai",
          address: "London",
          age: 24,
          role: "Owner",
          shopId: shops[3].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aboy",
          address: "Bogor",
          age: 19,
          role: "Owner",
          shopId: shops[4].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    const users = await User.findAll();

    const saltRounds = 10;
    await queryInterface.bulkInsert("Auths", [
      {
        email: "kyle@gmail.com",
        password: bcrypt.hashSync("kyle123", saltRounds),
        confirmPassword: bcrypt.hashSync("kyle123", saltRounds),
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "emile@gmail.com",
        password: bcrypt.hashSync("emile123", saltRounds),
        confirmPassword: bcrypt.hashSync("emile123", saltRounds),
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "granit@gmail.com",
        password: bcrypt.hashSync("granit123", saltRounds),
        confirmPassword: bcrypt.hashSync("granit123", saltRounds),
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "kai@gmail.com",
        password: bcrypt.hashSync("kai123", saltRounds),
        confirmPassword: bcrypt.hashSync("kai123", saltRounds),
        userId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "aboy@gmail.com",
        password: bcrypt.hashSync("aboy123", saltRounds),
        confirmPassword: bcrypt.hashSync("aboy123", saltRounds),
        userId: users[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
