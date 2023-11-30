'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('makanan', [
      {
        makanan_id: 1,
        nama_makanan: 'Nasi Putih',
        energi: 130, // asumsikan ini adalah kalori per porsi
        lemak: 0.3,
        lemak_jenuh: 0.1,
        lemak_tak_jenuh_ganda: 0.1,
        lemak_tak_jenuh_tunggal: 0.1,
        kolesterol: 0,
        protein: 2.7,
        karbohidrat: 28,
        serat: 0.4,
        gula: 0.1,
        sodium: 1,
        kalium: 35,
        gambar_makanan_url: 'http://example.com/path/to/nasi_putih.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 2,
        nama_makanan: 'Ayam Goreng',
        energi: 250,
        lemak: 15,
        lemak_jenuh: 3.5,
        lemak_tak_jenuh_ganda: 3.6,
        lemak_tak_jenuh_tunggal: 6.3,
        kolesterol: 75,
        protein: 24,
        karbohidrat: 0,
        serat: 0,
        gula: 0,
        sodium: 75,
        kalium: 200,
        gambar_makanan_url: 'http://example.com/path/to/ayam_goreng.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('makanan', null, {});
  }
};
