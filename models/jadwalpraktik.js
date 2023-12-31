'use strict';
const {
  Model
} = require('sequelize');
const generateId = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class JadwalPraktik extends Model {
    static associate(models) {
      this.belongsTo(models.Dokter, {
        foreignKey: 'dokter_id'
      });
    }
  }
  JadwalPraktik.init({
    jadwal_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    hari: DataTypes.STRING,
    mulai: DataTypes.TIME,
    akhir: DataTypes.TIME,
    dokter_id: {
      type: DataTypes.INTEGER, references: {
        model: "Dokter"
      }
    }
  }, {
    sequelize,
    modelName: 'JadwalPraktik',
    tableName: 'jadwal_praktik'
  });
  return JadwalPraktik;
};