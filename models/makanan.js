'use strict';
const {
  Model
} = require('sequelize');
const generateId = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    static associate(models) {
      // define association here
    }
  }
  Makanan.init({
    makanan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_makanan: DataTypes.STRING,
    energi: DataTypes.DECIMAL,
    lemak: DataTypes.DECIMAL,
    lemak_jenuh: DataTypes.DECIMAL,
    lemak_tak_jenuh_ganda: DataTypes.DECIMAL,
    lemak_tak_jenuh_tunggal: DataTypes.DECIMAL,
    kolesterol: DataTypes.DECIMAL,
    protein: DataTypes.DECIMAL,
    karbohidrat: DataTypes.DECIMAL,
    serat: DataTypes.DECIMAL,
    gula: DataTypes.DECIMAL,
    sodium: DataTypes.DECIMAL,
    kalium: DataTypes.DECIMAL,
    gambar_makanan_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Makanan',
    tableName: 'makanan'
  });
  return Makanan;
};