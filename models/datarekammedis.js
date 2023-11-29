'use strict';
const {
  Model
} = require('sequelize');
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
      autoIncrement: true
    },
    tanggal_periksa: {
      type: DataTypes.DATE,
      allowNull: false
    },
    keluhan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_dokter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false
    },
    diagnosa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pasien_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User', 
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
    modelName: 'DataRekamMedis',
  });
  return DataRekamMedis;
};