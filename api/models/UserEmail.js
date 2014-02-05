/**
 * UserEmail
 *
 * @module      :: Model
 * @description :: Email addresses for users
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {

    // Reference to the user object
    userId: 'INTEGER',

    // Email address
    email: 'EMAIL',

    // Designate primary contact?
    isPrimary: {
      type: 'BOOLEAN',
      defaultsTo: false
    },

    // Has the email address been verified?
    isVerified: {
      type: 'BOOLEAN',
      defaultsTo: false
    },

    // Verification token for this email address
    token: 'STRING'

  }

};
