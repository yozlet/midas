/**
 * UserSetting
 *
 * @module      :: Model
 * @description :: A representation of a user setting overriding a global configuration
 * @docs		:: http://sailsjs.org/#!documentation/models
 */
var conf = require('../../config/local');

module.exports = {

  migrate: conf.migrate,

  attributes: {
    // ID of owner of setting
    userId: 'INTEGER',
    // context to which key applies
    context: 'STRING',
    // // action trigger type that setting applies to
    // actionType: 'STRING',
    // // delivery type that the setting applies to
    // deliveryType: 'STRING',
    // key of the setting
    key: 'STRING',
    // value of the setting
    value: 'STRING',
    // Future soft-delete functionalirt
    isActive: {
      'type': 'BOOLEAN',
      'defaultsTo': true,
    }
  }

};
