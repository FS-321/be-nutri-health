'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JadwalPraktik extends Model {
    static associate(models) {
      JadwalPraktik.belongsTo(models.Dokter, {
        foreignKey: 'dokter_id',
        as: 'dokter'
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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Dokter',
        key: 'dokter_id'
      }
    }
  }, {
    sequelize,
    modelName: 'JadwalPraktik',
    tableName: 'jadwal_praktik'
  });
  return JadwalPraktik;
};