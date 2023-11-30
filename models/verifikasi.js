'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verifikasi extends Model {
    static associate(models) {
      Verifikasi.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  Verifikasi.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users', // Should match the table name
        key: 'user_id'
      }
    },
    verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Verifikasi',
  });
  return Verifikasi;
};