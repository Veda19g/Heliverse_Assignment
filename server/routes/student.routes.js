const express=require('express');
const router=express.Router();
const {studentLogin,viewStudentDetails,viewClassroom,
    viewTimetable,viewStudents,viewSingleStudent,updateSingleStuden}=require('./../controllers/student.controller');
const { authMiddleware } = require("../middlewares/authmiddleware");
router.post('/login',studentLogin);
router.get('/details',authMiddleware,viewStudentDetails);
router.get('/classroom',authMiddleware,viewClassroom);
router.post('/timetable',authMiddleware,viewTimetable);
router.get('/students',authMiddleware,viewStudents);
router.get('/students/:id',viewSingleStudent);
router.post('/updateStudent/:studentId',authMiddleware,updateSingleStuden)

module.exports=router;