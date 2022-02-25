const bcrypt = require('bcryptjs')
const { BCRYPT_ROUNDS } = require('../../secret')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: bcrypt.hashSync('1234', Number( BCRYPT_ROUNDS))},
      ]);
    });
};
