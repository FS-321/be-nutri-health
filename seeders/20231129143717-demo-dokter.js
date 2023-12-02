'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('dokter', [
        {
          dokter_id: 1,
          nama_depan: 'dr. Mori',
          nama_belakang: 'Calliope',
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
          nama_depan: 'dr. Dimas',
          nama_belakang: 'Alan',
          email: 'dimas@example.com',
          no_telp: '0800000002',
          spesialis: 'Paru-paru',
          foto_dokter: 'http://example.com/path/to/john_image.jpg',
          poli_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 3,
          nama_depan: 'dr. Aisyah',
          nama_belakang: 'Putri',
          email: 'aisyah@example.com',
          no_telp: '0800000003',
          spesialis: 'Jantung',
          foto_dokter: 'http://example.com/path/to/aisyah_image.jpg',
          poli_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 4,
          nama_depan: 'dr. Siti',
          nama_belakang: 'Nurhaliza',
          email: 'siti@example.com',
          no_telp: '0800000004',
          spesialis: 'Mata',
          foto_dokter: 'http://example.com/path/to/siti_image.jpg',
          poli_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 5,
          nama_depan: 'dr. Ahmad',
          nama_belakang: 'Dhani',
          email: 'ahmad@example.com',
          no_telp: '0800000005',
          spesialis: 'Kulit',
          foto_dokter: 'http://example.com/path/to/ahmad_image.jpg',
          poli_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 6,
          nama_depan: 'dr. Budi',
          nama_belakang: 'Doremi',
          email: 'budi@example.com',
          no_telp: '0800000006',
          spesialis: 'Tulang',
          foto_dokter: 'http://example.com/path/to/budi_image.jpg',
          poli_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 7,
          nama_depan: 'dr. Clara',
          nama_belakang: 'Bella',
          email: 'clara@example.com',
          no_telp: '0800000007',
          spesialis: 'Anak',
          foto_dokter: 'http://example.com/path/to/clara_image.jpg',
          poli_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 8,
          nama_depan: 'dr. Denny',
          nama_belakang: 'Cagur',
          email: 'denny@example.com',
          no_telp: '0800000008',
          spesialis: 'THT',
          foto_dokter: 'http://example.com/path/to/denny_image.jpg',
          poli_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 9,
          nama_depan: 'dr. Eka',
          nama_belakang: 'Dewi',
          email: 'eka@example.com',
          no_telp: '0800000009',
          spesialis: 'Kandungan',
          foto_dokter: 'http://example.com/path/to/eka_image.jpg',
          poli_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          dokter_id: 10,
          nama_depan: 'dr. Fajar',
          nama_belakang: 'Baskoro',
          email: 'fajar@example.com',
          no_telp: '0800000010',
          spesialis: 'Saraf',
          foto_dokter: 'http://example.com/path/to/fajar_image.jpg',
          poli_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('dokter', null, {});
  }
};
