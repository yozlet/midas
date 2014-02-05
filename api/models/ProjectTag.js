/**
 * ProjectTag
 *
 * @module      :: Model
 * @description :: Association between projects and tags (see Tag and Project models)
 *
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {
    // project that has a tag assigned to it
    projectId: 'INTEGER',
    // id of the tag
    tagId: 'INTEGER'
  }

};
