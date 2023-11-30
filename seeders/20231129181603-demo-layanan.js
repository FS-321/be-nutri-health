'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('layanan', [
      {
        layanan_id: 1,
        nama_layanan: 'Konsultasi Umum',
        biaya: 50000,
        nama_dokter: 'Dr. Mori Calliope',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 2,
        nama_layanan: 'Usg Paru',
        biaya: 80000,
        nama_dokter: 'Dr. Dimas Alan',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('layanan', null, {});
  }
};
