import moment from 'moment'
import encrypt from '@Server/helpers/hash'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'adminUsers',
      [
        {
          username: 'admin01',
          password: encrypt('123Admin'),
          createdAt: moment().format('YYYY-MM-DD HH:mm'),
          updatedAt: moment().format('YYYY-MM-DD HH:mm'),
        },
        {
          username: 'admin02',
          password: encrypt('123Tkc'),
          createdAt: moment().format('YYYY-MM-DD HH:mm'),
          updatedAt: moment().format('YYYY-MM-DD HH:mm'),
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
}
