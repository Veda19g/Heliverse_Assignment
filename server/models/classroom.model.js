const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startTime: String,
  endTime: String,
  days: [String], // e.g., ['Monday', 'Wednesday']
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;
