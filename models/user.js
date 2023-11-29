'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    isAdmin() {
      return this.role === 'admin';
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama_depan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_belakang: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['admin', 'user']]
      }
    },
    no_hp: {
      type: DataTypes.STRING
      // allowNull true secara default
    },
    foto_url: {
      type: DataTypes.STRING
      // allowNull true secara default
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false // Menonaktifkan timestamps jika tidak digunakan
  });
  return User;
};