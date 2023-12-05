'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('data_rekam_medis', [
        {
          data_rekam_id: 1,
          tanggal_periksa: new Date(),
          keluhan: 'Sakit kepala',
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
          diagnosa: 'Asma',
          pasien_id: 3, // Asumsikan ada user dengan user_id 3
          dokter_id: 2, // Asumsikan ada dokter dengan dokter_id 2
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 3,
          tanggal_periksa: new Date(),
          keluhan: 'Nyeri pada dada',
          diagnosa: 'serangan jantung ringan',
          pasien_id: 4,
          dokter_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 4,
          tanggal_periksa: new Date(),
          keluhan: 'Alergi kulit',
          diagnosa: 'Dermatitis',
          pasien_id: 5,
          dokter_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 5,
          tanggal_periksa: new Date(),
          keluhan: 'Cedera pada kaki',
          diagnosa: 'Patah tulang',
          pasien_id: 6, 
          dokter_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 6,
          tanggal_periksa: new Date(),
          keluhan: 'Batuk parah',
          diagnosa: 'Radang tenggorokan',
          pasien_id: 7, 
          dokter_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 7,
          tanggal_periksa: new Date(),
          keluhan: 'Sakit tenggorokan',
          diagnosa: 'Faringitis',
          pasien_id: 8, 
          dokter_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 8,
          tanggal_periksa: new Date(),
          keluhan: 'Nyeri perut bagian bawah',
          diagnosa: 'Endometriosis',
          pasien_id: 10, 
          dokter_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 9,
          tanggal_periksa: new Date(),
          keluhan: 'Gangguan penglihatan',
          diagnosa: 'Miopia',
          pasien_id: 1, 
          dokter_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          data_rekam_id: 10,
          tanggal_periksa: new Date(),
          keluhan: 'Nyeri pada pergelangan tangan',
          diagnosa: 'Saraf kejepit',
          pasien_id: 8, 
          dokter_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('data_rekam_medis', null, {});
  }
};
