'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorite', [
      {
        makanan_id: 1, // Ganti dengan ID makanan yang valid dari tabel `makanans`
        user_id: 1, // Ganti dengan ID user yang valid dari tabel `users`
      },
      {
        makanan_id: 2, // Ganti dengan ID makanan yang valid dari tabel `makanans`
        user_id: 1, // Ganti dengan ID user yang valid dari tabel `users`
      }
    ], {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorite', null, {});
  }
};