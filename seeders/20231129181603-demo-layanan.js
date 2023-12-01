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
      },
      {
        layanan_id: 3,
        nama_layanan: 'Pemeriksaan Jantung',
        biaya: 100000,
        nama_dokter: 'Dr. Aisyah Putri',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 4,
        nama_layanan: 'Tes Mata',
        biaya: 60000,
        nama_dokter: 'Dr. Siti Nurhaliza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 5,
        nama_layanan: 'Konsultasi Kulit',
        biaya: 70000,
        nama_dokter: 'Dr. Ahmad Dhani',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 6,
        nama_layanan: 'Pemeriksaan Tulang',
        biaya: 90000,
        nama_dokter: 'Dr. Budi Doremi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 7,
        nama_layanan: 'Konsultasi Anak',
        biaya: 80000,
        nama_dokter: 'Dr. Clara Bella',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 8,
        nama_layanan: 'Pemeriksaan THT',
        biaya: 75000,
        nama_dokter: 'Dr. Denny Cagur',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 9,
        nama_layanan: 'USG Kandungan',
        biaya: 85000,
        nama_dokter: 'Dr. Eka Dewi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        layanan_id: 10,
        nama_layanan: 'Konsultasi Saraf',
        biaya: 95000,
        nama_dokter: 'Dr. Fajar Baskoro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('layanan', null, {});
  }
};
