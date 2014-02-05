/**
 * Task
 *
 * @module      :: Model
 * @description :: Metadata and state about tasks (opportunities)
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {
    // Current state of the task
    state: {
        type: 'STRING',
        defaultsTo: 'public'
    },
    // user id of the task owner
    userId: 'INTEGER',
    // project id of the parent project
    projectId: 'INTEGER',
    // title of the task
    title: 'STRING',
    // description of the task
    description: 'STRING',

  }

};
