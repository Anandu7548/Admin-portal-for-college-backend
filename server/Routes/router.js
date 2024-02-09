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




// Teacher Routers
// Teacher Login
router.post("/thrLogin", TeacherController.thrLogin);



// Student Routers
// Student Login
router.post("/stdLogin", StudentController.stdLogin);




module.exports = router;
