const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');
const Classroom = require('../models/classroom.model');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../utils/auth');


  // Create a new classroom
  const createClassroom=async(req, res)=>{
    try {
      const { name, startTime, endTime, days } = req.body;
      const classroom = new Classroom({ name, startTime, endTime, days });
      await classroom.save();
      res.status(201).json({ message: 'Classroom created successfully', classroom });
    } catch (error) {
      res.status(400).json({ message: 'Error creating classroom', error });
    }
  }

  // Assign a teacher to a classroom
  const assignTeacher=async(req, res)=>{
    try {
      const { teacherId, classroomId } = req.body;
      const classroom = await Classroom.findById(classroomId);

      if (classroom.teacher) {
        return res.status(400).json({ message: 'Classroom already has a teacher assigned' });
      }

      classroom.teacher = teacherId;
      await classroom.save();

      const teacher = await Teacher.findById(teacherId);
      teacher.classroom = classroomId;
      await teacher.save();

      res.status(200).json({ message: 'Teacher assigned successfully', classroom });
    } catch (error) {
      res.status(400).json({ message: 'Error assigning teacher', error });
    }
  }

  // Assign a student to a teacher
  const  assignStudentToTeacher=async(req, res)=>{
    try {
      const { studentId, teacherId } = req.body;
      const teacher = await Teacher.findById(teacherId);
      const student = await Student.findById(studentId);

      if (!teacher || !student) {
        return res.status(404).json({ message: 'Teacher or Student not found' });
      }

      if (student.classroom.toString() !== teacher.classroom.toString()) {
        return res.status(400).json({ message: 'Student and teacher must be in the same classroom' });
      }

      student.teacher = teacherId;
      await student.save();

      res.status(200).json({ message: 'Student assigned to teacher successfully', student });
    } catch (error) {
      res.status(400).json({ message: 'Error assigning student', error });
    }
  }

  // Create a teacher account
  const createTeacher=async(req, res)=>{
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const teacher = new Teacher({ name, email, password: hashedPassword });
      await teacher.save();
      res.status(201).json({ message: 'Teacher created successfully', teacher });
    } catch (error) {
      res.status(400).json({ message: 'Error creating teacher', error });
    }
  }

  // Create a student account
  const createStudent=async(req, res)=>{
    try {
      const { name, email, password, classroomId } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const student = new Student({ name, email, password: hashedPassword, classroom: classroomId });
      await student.save();
      res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
      res.status(400).json({ message: 'Error creating student', error });
    }
  }

  // View all teachers
  const viewAllTeachers=async(req, res)=>{
    try {
      const teachers = await Teacher.find().populate('classroom', 'name');
      res.status(200).json({ teachers });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching teachers', error });
    }
  }

  // View all students
  const  viewAllStudents=async(req, res)=>{
    try {
      const students = await Student.find().populate('classroom', 'name');
      res.status(200).json({ students });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching students', error });
    }
  }


module.exports ={createClassroom,assignTeacher,assignStudentToTeacher,createTeacher,createStudent,viewAllTeachers,viewAllStudents}  ;
