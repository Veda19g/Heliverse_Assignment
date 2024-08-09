const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
    required: true
  },
  schedule: [
    {
      subject: String,
      start: String, // Time in HH:MM format
      end: String // Time in HH:MM format
    }
  ]
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
