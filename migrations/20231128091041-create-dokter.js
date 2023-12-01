'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dokter', {
      dokter_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_depan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama_belakang: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      no_telp: {
        type: Sequelize.STRING
      },
      spesialis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      foto_dokter: {
        type: Sequelize.STRING
      },
      poli_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'poliklinik',
          key: 'poli_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('dokter');
  }
};