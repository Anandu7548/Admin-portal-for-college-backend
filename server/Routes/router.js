// router.js
const express = require("express");
const router = express.Router();
const AdminContoller = require("../Controllers/AdminController");
const TeacherController = require("../Controllers/TeacherController");
const StudentController = require("../Controllers/StudentController");



// Admin Routers
// Admin login
router.post("/admLogin", AdminContoller.adminLogin);
// Add new Admin
router.post("/newadmin", AdminContoller.addAdmin);
// Add new Teacher
router.post("/newTeacher",AdminContoller.addTeacher);
// Add new Student
router.post("/newStudent", AdminContoller.addStudent);
// get all admin details
router.get("/getAdmins",AdminContoller.getAdmins);
// get all teacher details
router.get("/getTeachers",AdminContoller.getTeachers);
// get all students details
router.get("/getStudents",AdminContoller.getStudents);
// get a particular admin details
router.get("/getAdmin/:id",AdminContoller.getAdmin);




// Teacher Routers
// Teacher Login
router.post("/thrLogin", TeacherController.thrLogin);


// Student Routers
// Student Login
router.post("/stdLogin", StudentController.stdLogin);



module.exports = router;
