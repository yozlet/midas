/**
 * UserNotification
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
    // Reference to the Notification object
    notificationId: 'INTEGER'

  }

};
