const express=require('express');
const router=express.Router();
const {studentLogin,viewStudentDetails,viewClassroom,viewTimetable}=require('../controllers/student.controller');
const {auth}=require('../middleware/auth');
router.post('/login',studentLogin);
router.get('/details',auth,viewStudentDetails);
router.get('/classroom',auth,viewClassroom);
router.post('/timetable',auth,viewTimetable);
module.exports=router;