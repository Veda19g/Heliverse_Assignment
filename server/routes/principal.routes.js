const express = require("express");
const {createPrincipal,createClassroom,assignTeacher,assignStudentToTeacher,createTeacher,createStudent,viewAllTeachers,viewAllStudents,principalLogin,viewAllClassrooms,deleteStudent,deleteTeacher}=require("./../controllers/principal.controller");
const { authMiddleware } = require("../middlewares/authmiddleware");

const router = express.Router();
router.post("/createPrincipal",createPrincipal);
router.post("/login",principalLogin);
router.post("/createclassroom",authMiddleware,createClassroom);
router.post("/assignTeacher",authMiddleware,assignTeacher);
router.post("/assignStudentToTeacher",authMiddleware,assignStudentToTeacher);
router.post("/createTeacher",authMiddleware,createTeacher);
router.post("/createStudent",authMiddleware,createStudent);
router.get("/viewAllTeachers",authMiddleware,viewAllTeachers);
router.get("/viewAllStudents",authMiddleware,viewAllStudents);
router.get("/viewAllClassrooms",authMiddleware,viewAllClassrooms);
router.post("/deleteStudent/:studentId",authMiddleware,deleteStudent);
router.post("/deleteTeacher/:teacherId",authMiddleware,deleteTeacher);

module.exports = router;
