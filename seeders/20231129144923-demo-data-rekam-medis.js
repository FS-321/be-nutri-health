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
        {
          data_rekam_id: 3,
          tanggal_periksa: new Date(),
          keluhan: 'Nyeri pada dada',
          nama_dokter: 'Dr. Aisyah Putri',
          tanggal_lahir: new Date('1990-06-15'),
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
          nama_dokter: 'Dr. Ahmad Dhani',
          tanggal_lahir: new Date('1991-08-22'),
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
          nama_dokter: 'Dr. Budi Doremi',
          tanggal_lahir: new Date('1992-03-03'),
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
          nama_dokter: 'Dr. Clara Bella',
          tanggal_lahir: new Date('1989-11-09'),
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
          nama_dokter: 'Dr. Denny Cagur',
          tanggal_lahir: new Date('1990-05-20'),
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
          nama_dokter: 'Dr. Eka Dewi',
          tanggal_lahir: new Date('1987-04-14'),
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
          nama_dokter: 'Dr. Siti Nurhaliza',
          tanggal_lahir: new Date('1991-08-08'),
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
          nama_dokter: 'Dr. Fajar Baskoro',
          tanggal_lahir: new Date('1993-02-17'),
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
