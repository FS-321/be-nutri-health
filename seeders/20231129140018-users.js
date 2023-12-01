'use strict';

const hash = require('../utils/hash');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
        {
          user_id : 1,
          nama_depan: 'Jane',
          nama_belakang: 'Doe',
          email: 'jane.doe@example.com',
          tanggal_lahir: new Date('1990-01-01'),
          password: hash('123'),
          role: 'user',
          no_hp: '08123456789',
          foto_url: 'http://example.com/path/to/jane_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 2,
          nama_depan: 'John',
          nama_belakang: 'Doe',
          email: 'john.doe@example.com',
          tanggal_lahir: new Date('1985-05-15'),
          password: hash('456'),
          role: 'admin',
          no_hp: '08198765432',
          foto_url: 'http://example.com/path/to/john_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 3,
          nama_depan: 'Alan',
          nama_belakang: 'Wake',
          email: 'alan@example.com',
          tanggal_lahir: new Date('1992-10-21'),
          password: hash('789'),
          role: 'user',
          no_hp: '08123457709',
          foto_url: 'http://example.com/path/to/john_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
