'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('poliklinik', [
        {
          nama_poli: 'Umum',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nama_poli: 'Paru-paru',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('poliklinik', null, {});
  }
};
