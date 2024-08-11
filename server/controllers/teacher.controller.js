const Student = require('../models/student.model');
const Classroom = require('../models/classroom.model');
const Timetable = require('../models/timetable.model'); 
const Teacher = require('../models/teacher.model');
const bcrypt = require('bcrypt');
const { generateAccessToken,generateRefreshToken } = require('../utils/auth');



  const viewStudents=async(req, res)=> {
    try {
      const teacherId = req.userId; 
      const classroom = await Classroom.findOne({ teacher: teacherId }).populate('students');

      if (!classroom) {
        return res.status(404).json({ message: 'Classroom not found' });
      }

      res.status(200).json({ students: classroom.students });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching students', error });
    }
  }

  const viewAssignedStudents=async(req, res)=> {
    try {
      
      const teacherId = req.userId; 
      const teacher = await Teacher.findById(teacherId).
      populate('students');
      
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }

      res.status(200).json({ students: teacher.students });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching students', error });
    }
  }

  const updateStudent=async(req, res)=> {
    try {
      const { studentId } = req.params;
      const updates = req.body;
      const student = await Student.findByIdAndUpdate(studentId, updates, { new: true });

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
      res.status(400).json({ message: 'Error updating student', error });
    }
  }

  const deleteStudent=async(req, res)=>{
    try {
      const { studentId } = req.params;
      const student = await Student.findByIdAndDelete(studentId);

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting student', error });
    }
  }

  const createTimetable=async(req, res)=>{
    try {
      const teacherId = req.userId; 
      const classroom = await Classroom.findOne({ teacher: teacherId });

      if (!classroom) {
        return res.status(404).json({ message: 'Classroom not found' });
      }

      const { timetable } = req.body; 
      console.log('Creating timetable:', timetable);

      /**
       // Check if any periods overlap with classroom times
      const classroomStartTime = new Date(`1970-01-01T${classroom.startTime}`);
      const classroomEndTime = new Date(`1970-01-01T${classroom.endTime}`);

      for (const period of timetable) {
        const periodStart = new Date(`1970-01-01T${period.start}`);
        const periodEnd = new Date(`1970-01-01T${period.end}`);

        if (periodStart < classroomStartTime || periodEnd > classroomEndTime || periodStart >= periodEnd) {
          return res.status(400).json({ message: 'Period times must be within classroom hours and non-overlapping' });
        }
      }
       */

      const timeTable = new Timetable({
        classroom: classroom._id,
        timetable
      });

      await timeTable.save();

      res.status(201).json({ message: 'Timetable created successfully', timeTable });
    } catch (error) {
      res.status(400).json({ message: 'Error creating timetable', error });
    }
  }

  const teacherLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(400).json({ message: "Teacher not found" });
        }
        const validPassword = await bcrypt.compare(password, teacher.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }
        
        const accessToken = generateAccessToken(teacher._id);
        const refreshToken = generateRefreshToken(teacher._id);
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        });
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        });
        
        res.status(200).json({ message: "Login successful", teacher });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const viewclassroom=async(req, res)=> {
  try {
    const teacherId = req.userId; 
    const classroom = await Classroom.findOne({ teacher: teacherId });

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    res.status(200).json({ classroom });
  } catch (error) {
    res.status(400).json({ message: 'Error fetching classroom', error });
  }
}


module.exports = {
    viewStudents,
    updateStudent,
    deleteStudent,
    createTimetable,
    teacherLogin,
    viewAssignedStudents,
    viewclassroom
};
