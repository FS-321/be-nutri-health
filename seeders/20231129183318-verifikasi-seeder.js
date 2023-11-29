'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('verivikasi', [
      {
        user_id: 1, // asumsi user dengan ID 1 ada
        verified: true
      },
      {
        user_id: 3, // asumsi user dengan ID 3 ada
        verified: false
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('verivikasi', null, {});
  }
};
