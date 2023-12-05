'use strict';
const {
  Model
} = require('sequelize');
const generateId = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class Poliklinik extends Model {
    static associate(models) {
      Poliklinik.hasMany(models.Dokter, {
        foreignKey: 'poli_id',
      });
    }
  }
  Poliklinik.init({
    poli_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama_poli: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lokasi_gedung: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Poliklinik',
    tableName: 'poliklinik'
  });
  return Poliklinik;
};