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

// get all admin details
router.get("/getAdmins",AdminContoller.getAdmins)

// get all teacher details
router.get("/getTeachers",TeacherController.getTeachers)

// get all students details
router.get("/getStudents",StudentController.getStudents)

// get a particular admin details
router.post("/getAdmin/:id",AdminContoller.getAdmin)

module.exports = router;
