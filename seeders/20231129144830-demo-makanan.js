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
      },
      {
        makanan_id: 3,
        nama_makanan: 'Tempe Goreng',
        energi: 195,
        lemak: 11,
        lemak_jenuh: 2.2,
        lemak_tak_jenuh_ganda: 3,
        lemak_tak_jenuh_tunggal: 5,
        kolesterol: 0,
        protein: 19,
        karbohidrat: 9,
        serat: 6,
        gula: 0,
        sodium: 11,
        kalium: 412,
        gambar_makanan_url: 'http://example.com/path/to/tempe_goreng.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 4,
        nama_makanan: 'Ikan Bakar',
        energi: 200,
        lemak: 7,
        lemak_jenuh: 1.5,
        lemak_tak_jenuh_ganda: 2,
        lemak_tak_jenuh_tunggal: 2.5,
        kolesterol: 60,
        protein: 30,
        karbohidrat: 0,
        serat: 0,
        gula: 0,
        sodium: 70,
        kalium: 300,
        gambar_makanan_url: 'http://example.com/path/to/ikan_bakar.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 5,
        nama_makanan: 'Sayur Asem',
        energi: 80,
        lemak: 1,
        lemak_jenuh: 0.2,
        lemak_tak_jenuh_ganda: 0.3,
        lemak_tak_jenuh_tunggal: 0.4,
        kolesterol: 0,
        protein: 2,
        karbohidrat: 17,
        serat: 3,
        gula: 6,
        sodium: 15,
        kalium: 250,
        gambar_makanan_url: 'http://example.com/path/to/sayur_asem.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 6,
        nama_makanan: 'Rendang Daging',
        energi: 260,
        lemak: 18,
        lemak_jenuh: 8,
        lemak_tak_jenuh_ganda: 0.8,
        lemak_tak_jenuh_tunggal: 7.2,
        kolesterol: 70,
        protein: 25,
        karbohidrat: 0,
        serat: 0,
        gula: 0,
        sodium: 300,
        kalium: 350,
        gambar_makanan_url: 'http://example.com/path/to/rendang_daging.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 7,
        nama_makanan: 'Soto Ayam',
        energi: 150,
        lemak: 6,
        lemak_jenuh: 2.5,
        lemak_tak_jenuh_ganda: 1.8,
        lemak_tak_jenuh_tunggal: 1.2,
        kolesterol: 40,
        protein: 12,
        karbohidrat: 10,
        serat: 1,
        gula: 3,
        sodium: 800,
        kalium: 300,
        gambar_makanan_url: 'http://example.com/path/to/soto_ayam.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 8,
        nama_makanan: 'Gado-Gado',
        energi: 180,
        lemak: 9,
        lemak_jenuh: 1.5,
        lemak_tak_jenuh_ganda: 3,
        lemak_tak_jenuh_tunggal: 4,
        kolesterol: 0,
        protein: 8,
        karbohidrat: 20,
        serat: 4,
        gula: 6,
        sodium: 300,
        kalium: 400,
        gambar_makanan_url: 'http://example.com/path/to/gado_gado.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 9,
        nama_makanan: 'Nasi Goreng',
        energi: 320,
        lemak: 12,
        lemak_jenuh: 3,
        lemak_tak_jenuh_ganda: 4,
        lemak_tak_jenuh_tunggal: 4.5,
        kolesterol: 30,
        protein: 10,
        karbohidrat: 45,
        serat: 2,
        gula: 5,
        sodium: 800,
        kalium: 300,
        gambar_makanan_url: 'http://example.com/path/to/nasi_goreng.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        makanan_id: 10,
        nama_makanan: 'Martabak Manis',
        energi: 350,
        lemak: 15,
        lemak_jenuh: 7,
        lemak_tak_jenuh_ganda: 4,
        lemak_tak_jenuh_tunggal: 3,
        kolesterol: 20,
        protein: 6,
        karbohidrat: 50,
        serat: 1,
        gula: 30,
        sodium: 220,
        kalium: 100,
        gambar_makanan_url: 'http://example.com/path/to/martabak_manis.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('makanan', null, {});
  }
};
