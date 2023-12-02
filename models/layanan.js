'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Layanan extends Model {
    static associate(models) {
      
    }
  }
  Layanan.init({
    layanan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama_layanan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    biaya:{
      type: DataTypes.DECIMAL,
    },
    nama_dokter: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Layanan',
    tableName: 'layanan'
  });
  return Layanan;
};