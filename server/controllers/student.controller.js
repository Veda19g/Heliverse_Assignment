const Classroom = require('../models/classroom.model');
const Timetable = require('../models/timetable.model');
const Student = require('../models/student.model');
const {viewAllStudents}=require("../controllers/principal.controller");
const bcrypt = require('bcrypt');
const { generateAccessToken,generateRefreshToken } = require('../utils/auth');

   const studentLogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const student=await Student
        .findOne({email})
        .populate('classroom','name');
        if(!student){
            return res.status(400).json({message:"student not found"});
        }
        const validPassword=await bcrypt.compare(password,student.password);
        if(!validPassword){
            return res.status(400).json({message:"invalid password"});
        }
        const accessToken=generateAccessToken(student._id);
        const refreshToken=generateRefreshToken(student._id);
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
        res.status(200).json({message:"login successful",student});
    }
    catch(error){

        res.status(500).json({message:"an error occured",error:error.message});
    }
}
  // View student details
  const viewStudentDetails=async(req, res)=>{
    try {
      const studentId = req.user.userId; // Assuming the student's ID is stored in req.user after authentication
      const student = await Student.findById(studentId).populate('classroom', 'name');

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ student });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching student details', error });
    }
  }

  // View classroom details
  const viewClassroom=async(req, res)=>{
    try {
      const studentId = req.user.userId;
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const classroom = await Classroom.findById(student.classroom).populate('teacher', 'name email');

      if (!classroom) {
        return res.status(404).json({ message: 'Classroom not found' });
      }

      res.status(200).json({ classroom });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching classroom details', error });
    }
  }

  // View timetable
  const viewTimetable=async(req, res)=>{
    try {
      const studentId = req.user.userId;
      const student = await Student.findById(studentId);

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const timetable = await Timetable.findOne({ classroom: student.classroom });

      if (!timetable) {
        return res.status(404).json({ message: 'Timetable not found' });
      }

      res.status(200).json({ timetable });
    } catch (error) {
      res.status(400).json({ message: 'Error fetching timetable', error });
    }
  }


module.exports ={studentLogin,viewStudentDetails,viewClassroom,viewTimetable};
