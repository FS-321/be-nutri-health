'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorite', [
      {
        favorite_id: 1,
        makanan_id: 1, // Ganti dengan ID makanan yang valid dari tabel `makanan`
        user_id: 1, // Ganti dengan ID user yang valid dari tabel `users`
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 2,
        makanan_id: 2, // Ganti dengan ID makanan yang valid dari tabel `makanan`
        user_id: 1, // Ganti dengan ID user yang valid dari tabel `users`
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 3,
        makanan_id: 3, // Ganti dengan ID makanan yang valid dari tabel `makanan`
        user_id: 3, // Ganti dengan ID user yang valid dari tabel `users`
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 4,
        makanan_id: 4,
        user_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Lanjutkan dengan menambahkan data favorit untuk makanan_id dan user_id
      // Contoh:
      {
        favorite_id: 5,
        makanan_id: 5,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 6,
        makanan_id: 6,
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 7,
        makanan_id: 7,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 8,
        makanan_id: 8,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 9,
        makanan_id: 9,
        user_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        favorite_id: 10,
        makanan_id: 10,
        user_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorite', null, {});
  }
};
