/**
 * UserInfo
 *
 * @module      :: Model
 * @description :: **PRIVATE** user hashed passwords
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {

    // Reference to the user object
    userId: 'INTEGER',
    // For when local authentication is used
    password: 'STRING'

  }

};
