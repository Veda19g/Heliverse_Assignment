const express=require('express');
const router=express.Router();
const {viewStudents,updateStudent,deleteStudent,createTimetable}=require('../controllers/teacher.controller');
const {auth}=require('../middleware/auth');
router.get('/students',auth,viewStudents);
router.put('/students/:id',auth,updateStudent);
router.delete('/students/:id',auth,deleteStudent);
router.post('/timetable',auth,createTimetable);
module.exports=router;