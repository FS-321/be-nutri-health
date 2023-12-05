'use strict';
const {
  Model
} = require('sequelize');
const generateId = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class DataRekamMedis extends Model {
    static associate(models) {
      DataRekamMedis.belongsTo(models.User, { 
        foreignKey: 'pasien_id' 
      });
      DataRekamMedis.belongsTo(models.Dokter, { 
        foreignKey: 'dokter_id' 
      });
    }
  }
  DataRekamMedis.init({
    data_rekam_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tanggal_periksa: {
      type: DataTypes.DATE,
      allowNull: false
    },
    keluhan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diagnosa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pasien_id: {
      type: DataTypes.STRING,
      references: {
        model: 'users', 
        key: 'user_id',
      }
    },
    dokter_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Dokter', 
        key: 'dokter_id',
      }
    }
  }, {
    sequelize,
    tableName: 'data_rekam_medis',
    modelName: 'DataRekamMedis',
  });
  return DataRekamMedis;
};