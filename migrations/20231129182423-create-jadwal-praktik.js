'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jadwal_praktik', {
      jadwal_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hari: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mulai: {
        type: Sequelize.TIME,
        allowNull: false
      },
      akhir: {
        type: Sequelize.TIME,
        allowNull: false
      },
      dokter_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'dokter', 
          key: 'dokter_id'
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
    await queryInterface.dropTable('jadwal_praktik');
  }
};