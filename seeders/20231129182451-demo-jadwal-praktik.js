'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jadwal_praktik', [
      {
        hari: 'Senin',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 1, // Resuaikan dengan dokter_id dari tabel dokter
      },
      {
        hari: 'Selasa',
        mulai: '13:00',
        akhir: '17:00',
        dokter_id: 1, // sesuaikan dengan dokter_id dari tabel dokter
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jadwal_praktik', null, {});
  }
};

