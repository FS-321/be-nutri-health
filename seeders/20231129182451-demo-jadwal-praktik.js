'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('jadwal_praktik', [
      {
        jadwal_id: 1,
        hari: 'Senin',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 1, // Resuaikan dengan dokter_id dari tabel dokter
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 2,
        hari: 'Selasa',
        mulai: '13:00',
        akhir: '17:00',
        dokter_id: 1, // sesuaikan dengan dokter_id dari tabel dokter
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 3,
        hari: 'Rabu',
        mulai: '09:00',
        akhir: '13:00',
        dokter_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 4,
        hari: 'Kamis',
        mulai: '14:00',
        akhir: '18:00',
        dokter_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 5,
        hari: 'Jumat',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 6,
        hari: 'Sabtu',
        mulai: '10:00',
        akhir: '14:00',
        dokter_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 7,
        hari: 'Senin',
        mulai: '09:00',
        akhir: '13:00',
        dokter_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 8,
        hari: 'Selasa',
        mulai: '15:00',
        akhir: '19:00',
        dokter_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 9,
        hari: 'Rabu',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 10,
        hari: 'Kamis',
        mulai: '13:00',
        akhir: '17:00',
        dokter_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 11,
        hari: 'Senin',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 12,
        hari: 'Selasa',
        mulai: '13:00',
        akhir: '17:00',
        dokter_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 13,
        hari: 'Rabu',
        mulai: '09:00',
        akhir: '13:00',
        dokter_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 14,
        hari: 'Kamis',
        mulai: '14:00',
        akhir: '18:00',
        dokter_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 15,
        hari: 'Jumat',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 16,
        hari: 'Sabtu',
        mulai: '10:00',
        akhir: '14:00',
        dokter_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 17,
        hari: 'Senin',
        mulai: '09:00',
        akhir: '13:00',
        dokter_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 18,
        hari: 'Selasa',
        mulai: '15:00',
        akhir: '19:00',
        dokter_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 19,
        hari: 'Rabu',
        mulai: '08:00',
        akhir: '12:00',
        dokter_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        jadwal_id: 20,
        hari: 'Kamis',
        mulai: '13:00',
        akhir: '17:00',
        dokter_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('jadwal_praktik', null, {});
  }
};

