'use strict';
/** @type {import('sequelize-cli').Migration} */
const generateUserId = require('../utils/generateId');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('makanan', {
      makanan_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      nama_makanan: {
        type: Sequelize.STRING
      },
      energi: {
        type: Sequelize.DECIMAL
      },
      lemak: {
        type: Sequelize.DECIMAL
      },
      lemak_jenuh: {
        type: Sequelize.DECIMAL
      },
      lemak_tak_jenuh_ganda: {
        type: Sequelize.DECIMAL
      },
      lemak_tak_jenuh_tunggal: {
        type: Sequelize.DECIMAL
      },
      kolesterol: {
        type: Sequelize.DECIMAL
      },
      protein: {
        type: Sequelize.DECIMAL
      },
      karbohidrat: {
        type: Sequelize.DECIMAL
      },
      serat: {
        type: Sequelize.DECIMAL
      },
      gula: {
        type: Sequelize.DECIMAL
      },
      sodium: {
        type: Sequelize.DECIMAL
      },
      kalium: {
        type: Sequelize.DECIMAL
      },
      gambar_makanan_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('makanan');
  }
};