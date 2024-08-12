const express = require("express");
const {createPrincipal,createClassroom,assignTeacher,assignStudentToTeacher,
    createTeacher,createStudent,viewAllTeachers,viewAllStudents,principalLogin,
    viewAllClassrooms,deleteStudent,deleteTeacher,deleteClassroom,updateClassroom,singleClassroom
      ,singleTeacher,updateTeacher,singleStudent,updateStudent
}=require("./../controllers/principal.controller");
const { authMiddleware } = require("../middlewares/authmiddleware");

const router = express.Router();
router.post("/createPrincipal",createPrincipal); //done
router.post("/login",principalLogin); //done
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
router.post("/deleteClassroom/:classroomId",authMiddleware,deleteClassroom);
router.post("/updateClassroom/:classroomId",authMiddleware,updateClassroom);
router.get("/singleClassroom/:classroomId",authMiddleware,singleClassroom);
router.get("/singleTeacher/:teacherId",authMiddleware,singleTeacher);
router.post("/updateTeacher/:teacherId",authMiddleware,updateTeacher);
router.post("/updateStudent/:studentId",authMiddleware,updateStudent);
router.get("/singleStudent/:studentId",authMiddleware,singleStudent);


module.exports = router;
