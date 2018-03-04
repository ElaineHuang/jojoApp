const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  description: String,
  host: String,
  dates: [Date],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }]
});

const Activity = mongoose.model('activity', ActivitySchema);

module.exports = Activity;
