'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'Pham Trong',
        lastName: 'Nhan',
        address: 'HCM',
        phonenumber: '0915161515',
        gender: 1,
        image: '',
        roleId: 'ROLE',
        positionId: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
