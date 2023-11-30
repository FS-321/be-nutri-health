'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('data_rekam_medis', [
        {
          data_rekam_id: 1,
          tanggal_periksa: new Date(),
          keluhan: 'Sakit kepala',
          nama_dokter: 'Dr. Mori Calliope',
          tanggal_lahir: new Date('1980-12-01'),
          diagnosa: 'Migrain',
          pasien_id: 1, // Asumsikan ada user dengan user_id 1
          dokter_id: 1, // Asumsikan ada dokter dengan dokter_id 1
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 2,
          tanggal_periksa: new Date(),
          keluhan: 'Sesak napas',
          nama_dokter: 'Dr. Dimas Alan',
          tanggal_lahir: new Date('1985-07-20'),
          diagnosa: 'Asma',
          pasien_id: 3, // Asumsikan ada user dengan user_id 3
          dokter_id: 2, // Asumsikan ada dokter dengan dokter_id 2
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('data_rekam_medis', null, {});
  }
};
