/**
 * Determine if a user has access to a task
 * Callback: function(err, task)
 * If both err and task are null, then task
 * was found but access is denied.
 */
var util = require('./project');
var tagUtil = require('./tag');

var authorized = function (id, userId, cb) {
  Task.findOneById(id, function (err, task) {
    if (err) { return cb('Error finding task.', null); }
    // otherwise, check that we have an owner
    if (userId && (userId == task.userId)) {
      task.isOwner = true;
    }
    if (task.userId == userId) {
      return cb(null, task);
    }
    // If not the owner, check if there is a project
    if (!task.projectId) {
      if ((task.state === 'public') || (task.state == 'closed')) {
        return cb(null, task);
      }
      return cb(null, null);
    }
    // check if the user is authorized for the project
    // or the project is public
    util.authorized(task.projectId, userId, function (err, proj) {
      if (err) { return cb(err, null); }
      if (!err && !proj) { return cb(null, null); }
      // user has access to the project, but is not the task owner
      // check the task state to make sure it is publicly accessible
      if ((task.state === 'public') || (task.state == 'closed')) {
        return cb(null, task);
      }
      // In any other state, you have to be the owner.  Denied.
      return cb(null, null);
    });
  });
};

var getTags = function (task, cb) {
  tagUtil.assemble({ taskId: task.id }, function (err, tags) {
    task.tags = tags;
    cb(err);
  });
};

var getMetadata = function(task, user, cb) {
  task.like = false;
  task.volunteer = false;
  Like.countByTaskId(task.id, function (err, likes) {
    if (err) { return cb(err, task); }
    task.likeCount = likes;
    if (!user) {
      return cb(null, task);
    }
    Like.findOne({ where: { userId: user.id, taskId: task.id }}, function (err, like) {
      if (err) { return cb(err, task); }
      if (like) { task.like = true; }
      Volunteer.findOne({ where: { userId: user.id, taskId: task.id }}, function (err, v) {
        if (err) { return cb(err, task); }
        if (v) { task.volunteer = true; }
        return cb(null, task);
      });
    });
  });
};

var getLikes = function (task, cb) {
  Like.countByTaskId(task.id, function (err, count) {
    if (!err) {
      task.likeCount = count;
    }
    cb(err);
  });
};

var getVolunteers = function (task, cb) {
  task.volunteers = [];
  Volunteer.find()
  .where({ taskId: task.id })
  .sort('createdAt')
  .exec(function (err, vols) {
    if (err) { return cb(err); }
    for (var i in vols) {
      task.volunteers.push(vols[i].userId);
    }
    cb();
  });
};

module.exports = {
  authorized: authorized,
  getTags: getTags,
  getMetadata: getMetadata,
  getLikes: getLikes,
  getVolunteers: getVolunteers
};
