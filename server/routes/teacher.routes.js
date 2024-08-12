const express=require('express');
const router=express.Router();
const {viewStudents,updateStudent,deleteStudent,createTimetable,viewAssignedStudents,teacherLogin,viewclassroom,
    
}=require('../controllers/teacher.controller');
const { authMiddleware } = require("../middlewares/authmiddleware");
router.get('/students',authMiddleware,viewStudents);
router.put('/students/:id',authMiddleware,updateStudent);
router.delete('/students/:id',authMiddleware,deleteStudent);
router.post('/timetable',authMiddleware,createTimetable);
router.get('/assignedstudents',authMiddleware,viewAssignedStudents);
router.post('/login',teacherLogin);
router.post('/viewclassroom',authMiddleware,viewclassroom);
module.exports=router;