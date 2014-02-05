/**
 * ProjectParticipant
 *
 * @module      :: Model
 * @description :: Association between projects and the users that own them.
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {
    // project that has a tag assigned to it
    projectId: 'INTEGER',
    // id of the owning user
    userId: 'INTEGER'
  }

};
