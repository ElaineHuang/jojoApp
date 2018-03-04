const Activity = require('../models/activity');

module.exports = {
  index(req, res, next) {
    Activity.find({}).then(activities => res.send(activities))
      .catch(next);
  },

  create(req, res, next) {
    const activityProps = req.body;

    Activity.create(activityProps)
      .then(activity => res.send(activity))
      .catch(next)
  },

  get(req, res, next) {
    const activityId = req.params.id;
    Activity.findOne({ _id: activityId }).then(activity => res.send(activity))
      .catch(next);
  },

  edit(req, res, next) {
    const activityId = req.params.id;
    const activityProps = req.body;

    Activity.findByIdAndUpdate({ _id: activityId }, activityProps)
      .then(() => User.findById({ _id: activityId }))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const activityId = req.params.id;

    Activity.findByIdAndRemove({ _id: activityId })
      .then(user => res.status(204).send(user))
      .catch(next);
  }
};
