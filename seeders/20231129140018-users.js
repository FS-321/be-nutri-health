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
        {
          user_id: 4,
          nama_depan: 'Emma',
          nama_belakang: 'Stone',
          email: 'emma.stone@example.com',
          tanggal_lahir: new Date('1991-11-06'),
          password: 'password123',
          role: 'user',
          no_hp: '08223456789',
          foto_url: 'http://example.com/path/to/emma_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 5,
          nama_depan: 'Oliver',
          nama_belakang: 'Smith',
          email: 'oliver.smith@example.com',
          tanggal_lahir: new Date('1992-03-14'),
          password: 'password456',
          role: 'user',
          no_hp: '08223456780',
          foto_url: 'http://example.com/path/to/oliver_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 6,
          nama_depan: 'Rachel',
          nama_belakang: 'Green',
          email: 'rachel.green@example.com',
          tanggal_lahir: new Date('1994-04-04'),
          password: 'user789',
          role: 'user',
          no_hp: '08123458888',
          foto_url: 'http://example.com/path/to/rachel_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 7,
          nama_depan: 'Ross',
          nama_belakang: 'Geller',
          email: 'ross.geller@example.com',
          tanggal_lahir: new Date('1989-10-18'),
          password: 'dinosaur',
          role: 'user',
          no_hp: '08123459999',
          foto_url: 'http://example.com/path/to/ross_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 8,
          nama_depan: 'Monica',
          nama_belakang: 'Geller',
          email: 'monica.geller@example.com',
          tanggal_lahir: new Date('1990-12-22'),
          password: 'chef123',
          role: 'user',
          no_hp: '08123451111',
          foto_url: 'http://example.com/path/to/monica_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        // Tambahkan admin kedua
        {
          user_id: 9,
          nama_depan: 'Alice',
          nama_belakang: 'Johnson',
          email: 'alice.johnson@example.com',
          tanggal_lahir: new Date('1988-07-22'),
          password: 'admin789',
          role: 'admin',
          no_hp: '08233456789',
          foto_url: 'http://example.com/path/to/alice_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: 10,
          nama_depan: 'Lucas',
          nama_belakang: 'Brown',
          email: 'lucas.brown@example.com',
          tanggal_lahir: new Date('1993-09-17'),
          password: 'user1010',
          role: 'user',
          no_hp: '08223456791',
          foto_url: 'http://example.com/path/to/lucas_photo.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
