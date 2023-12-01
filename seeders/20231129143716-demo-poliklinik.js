'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('poliklinik', [
        {
          poli_id: 1,
          nama_poli: 'Umum',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 2,
          nama_poli: 'Paru-paru',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 3,
          nama_poli: 'Jantung',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 4,
          nama_poli: 'Mata',
          lokasi_gedung: 'Lantai 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 5,
          nama_poli: 'Kulit',
          lokasi_gedung: 'Lantai 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 6,
          nama_poli: 'Tulang',
          lokasi_gedung: 'Lantai 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 7,
          nama_poli: 'Anak',
          lokasi_gedung: 'Lantai 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 8,
          nama_poli: 'THT (Telinga, Hidung, Tenggorokan)',
          lokasi_gedung: 'Lantai 3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 9,
          nama_poli: 'Kandungan',
          lokasi_gedung: 'Lantai 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          poli_id: 10,
          nama_poli: 'Saraf',
          lokasi_gedung: 'Lantai 3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('poliklinik', null, {});
  }
};
