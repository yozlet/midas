/**
 * Tag
 *
 * @module      :: Model
 * @description :: Mapping of tags to projects, tasks, and other entities
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {

    projectId: 'INTEGER',
    taskId: 'INTEGER',
    tagId: 'INTEGER',
    userId: 'INTEGER'

  }

};
