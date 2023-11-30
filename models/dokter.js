'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokter extends Model {
    static associate(models) {
      
      Dokter.hasMany(models.JadwalPraktik, {
        foreignKey: 'dokter_id',
        as:'JadwalPraktik'
      });
      
      Dokter.belongsTo(models.Poliklinik, {
        foreignKey: 'poli_id',
      });
    }
  }
  Dokter.init({
    dokter_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    no_telp: {
      type: DataTypes.STRING
      // allowNull true by default
    },
    spesialis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foto_dokter: {
      type: DataTypes.STRING
      // allowNull true by default
    },
    poli_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Poliklinik',
        key: 'poli_id'
      }
    }
  }, {
    sequelize,
    modelName: 'Dokter',
    tableName: 'dokter'
  });
  return Dokter;
};