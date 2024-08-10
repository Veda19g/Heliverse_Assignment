const express = require("express");
const {createPrincipal,createClassroom,assignTeacher,assignStudentToTeacher,createTeacher,createStudent,viewAllTeachers,viewAllStudents,principalLogin}=require("./../controllers/principal.controller");
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

module.exports = router;
