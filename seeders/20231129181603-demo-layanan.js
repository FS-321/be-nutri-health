'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('layanan', [
      {
        nama_layanan: 'Konsultasi Umum',
        biaya: 50000,
        nama_dokter: 'Dr. Mori Calliope',
      },
      {
        nama_layanan: 'Usg Paru',
        biaya: 80000,
        nama_dokter: 'Dr. Dimas Alan',
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('layanan', null, {});
  }
};
