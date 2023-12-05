'use strict';
const {
  Model
} = require('sequelize');
const generateId = require('../utils/generateId');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
      Favorite.belongsTo(models.Makanan, {
        foreignKey: 'makanan_id',
      })
    }
  }
  Favorite.init({
    favorite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    makanan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Makanan',
        key: 'makanan_id'
      }
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'user_id'
      }
    }
  }, {
    sequelize,
    tableName: 'favorite',
    modelName: 'Favorite',
  });
  return Favorite;
};