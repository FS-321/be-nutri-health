'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_rekam_medis', {
      data_rekam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
      },
      tanggal_periksa: {
        type: Sequelize.DATE
      },
      keluhan: {
        type: Sequelize.STRING
      },
      diagnosa: {
        type: Sequelize.STRING
      },
      pasien_id: {
        type: Sequelize.STRING(255),
        references: {
          model: 'users', // name of the users table
          key: 'user_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      dokter_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'dokter', // name of the dokters table
        //   key: 'dokter_id',
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
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
    await queryInterface.dropTable('data_rekam_medis');
  }
};