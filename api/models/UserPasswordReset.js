/**
 * UserPasswordReset
 *
 * @module      :: Model
 * @description :: Reset tokens for allowing a user to reset their password
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {

    // User that has requested the password reset
    userId: 'INTEGER',
    // Generated token, valid for a period of time
    token: 'STRING'

  }

};
