"use strict";

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
    let authors = require("../authors.json");
    authors = authors.map((author) => {
      author.createdAt = new Date();
      author.updatedAt = new Date();
      return author;
    });
    await queryInterface.bulkInsert("Authors", authors, {});
    await queryInterface.sequelize.query(`SELECT setval('"Authors_id_seq"', (SELECT MAX(id) FROM "Authors"))`);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
