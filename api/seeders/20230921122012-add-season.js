'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seasons', [
    {
      seasonName: 'Spring',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seasonName: 'Summer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seasonName: 'Fall',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seasonName: 'Winter',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Seasons', null, {});
  }
};
