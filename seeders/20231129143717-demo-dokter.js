'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('dokter', [
        {
          dokter_id: 1,
          first_name: 'dr. Mori',
          last_name: 'Calliope',
          email: 'mori@example.com',
          no_telp: '0800000001',
          spesialis: 'Umum',
          foto_dokter: 'http://example.com/path/to/jane_image.jpg',
          poli_id: 1, // Asumsikan 'poli_id' ini sudah ada di tabel 'poliklinik'
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 2,
          first_name: 'dr. Dimas',
          last_name: 'Alan',
          email: 'dimas@example.com',
          no_telp: '0800000002',
          spesialis: 'Paru-paru',
          foto_dokter: 'http://example.com/path/to/john_image.jpg',
          poli_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('dokter', null, {});
  }
};
