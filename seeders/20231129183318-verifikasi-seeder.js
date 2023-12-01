'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('verifikasi', [
      {
        user_id: 1, // asumsi user dengan ID 1 ada
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3, // asumsi user dengan ID 3 ada
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10, 
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 11, 
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 12, 
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('verifikasi', null, {});
  }
};
