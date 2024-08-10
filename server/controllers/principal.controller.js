const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');
const Classroom = require('../models/classroom.model');
const Principal = require('../models/principal.model');
const bcrypt = require('bcrypt');
const { generateAccessToken,generateRefreshToken } = require('../utils/auth');

const createPrincipal=async(req,res)=>{
  const {email,password}=req.body;
  try{
      const hashedPassword=await bcrypt.hash(password,10);
      const principal=new Principal({email,password:hashedPassword});
      await principal.save();
      res.status(201).json({message:"principal created successfully",principal});
  }
  catch(error){
      console.log(error);
      res.status(400).json({message:"error creating principal",error});
  }
}

const principalLogin=async(req,res)=>{
  const {email,password}=req.body;
  try{
      const principal=await Principal.findOne({email});
      if(!principal){
          return res.status(400).json({message:"student not found"});
      }
      const validPassword=await bcrypt.compare(password,principal.password);
      if(!validPassword){
          return res.status(400).json({message:"invalid password"});
      }
      const accessToken=generateAccessToken(principal._id);
      const refreshToken=generateRefreshToken(principal._id);
      res.cookie('refreshToken',refreshToken,{
          httpOnly:true,
          sameSite:'None',
          secure:true
      });
      res.cookie('accessToken',accessToken,{
          httpOnly:true,
          sameSite:'None',
          secure:true
      });
      res.status(200).json({message:"login successful",principal});
  }
  catch(error){

      res.status(500).json({message:"an error occured",error:error.message});
  }
}

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

      await Teacher.findByIdAndUpdate(teacherId, {
        $push: { students: student._id }
      });
      await student.save();

      res.status(200).json({ message: 'Student assigned to teacher successfully', student });
    } catch (error) {
      res.status(400).json({ message: 'Error assigning student', error });
    }
  }

  
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

  const createStudent=async(req, res)=>{
    try {
      const { name, email, password, classroomId } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const student = new Student({ name, email, password: hashedPassword, classroom: classroomId });
      await Classroom.findByIdAndUpdate(classroomId, {
        $push: { students: student._id }
      });
      await student.save();
      res.status(201).json({ message: 'Student created successfully', student });
    } catch (error) {
      res.status(400).json({ message: 'Error creating student', error });
    }
  }

  const viewAllTeachers=async(req, res)=>{
    try {
      const teachers = await Teacher.find().populate('classroom', 'name');
      res.status(200).json({ teachers });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching teachers', error });
    }
  }

  const  viewAllStudents=async(req, res)=>{
    try {
      const students = await Student.find().populate('classroom', 'name');
      res.status(200).json({ students });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching students', error });
    }
  }


module.exports ={createClassroom,assignTeacher,assignStudentToTeacher,createTeacher,createStudent,viewAllTeachers,viewAllStudents,principalLogin,createPrincipal};  ;
