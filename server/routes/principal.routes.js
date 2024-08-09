const express = require("express");

const {createClassroom,assignTeacher,assignStudentToTeacher,createTeacher,createStudent,viewAllTeachers,viewAllStudents}=require("./../controllers/principal.controller");

const router = express.Router();

router.post("/createclassroom",createClassroom);
router.post("/assignTeacher",assignTeacher);
router.post("/assignStudentToTeacher",assignStudentToTeacher);
router.post("/createTeacher",createTeacher);
router.post("/createStudent",createStudent);
router.get("/viewAllTeachers",viewAllTeachers);
router.get("/viewAllStudents",viewAllStudents);

module.exports = router;
