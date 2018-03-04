const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendSchema = new Schema({
  time: Date,
  attend: {
    type: String,
    default: 'not sure',
  },
});

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.']
  },
  dates: [AttendSchema],
  activity: {
    type: Schema.Types.ObjectId,
    ref: 'activity',
    required: [true, 'Activity is missing.']
  }
});

UserSchema.pre('save', function(next) {
  const Activity = mongoose.model('activity');

  Activity.findByIdAndUpdate({ _id: this.activity }, { $push: { user: this._id } })
    .then(() => next());
});


const User = mongoose.model('user', UserSchema);

module.exports = User;
