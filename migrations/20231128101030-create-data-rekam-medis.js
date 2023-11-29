'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DataRekamMedis', {
      data_rekam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tanggal_periksa: {
        type: Sequelize.DATE
      },
      keluhan: {
        type: Sequelize.STRING
      },
      nama_dokter: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      diagnosa: {
        type: Sequelize.STRING
      },
      pasien_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // name of the users table
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      dokter_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dokters', // name of the dokters table
          key: 'dokter_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('DataRekamMedis');
  }
};