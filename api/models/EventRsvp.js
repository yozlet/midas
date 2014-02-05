/**
 * EventRsvp
 *
 * @module      :: Model
 * @description :: Stores RSVP's for the Event model
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {

    // event to rsvp
    eventId: 'INTEGER',
    // id of the user
    userId: 'INTEGER'

  }

};
