// router.js
const express = require("express");
const router = express.Router();
const AdminContoller = require("../Controllers/AdminController");
const TeacherController = require("../Controllers/TeacherController");
const StudentController = require("../Controllers/StudentController");
const upload = require("../multerConfig/storageConfig");



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
// update the specific admin
router.put("/updateAdmin/:id", AdminContoller.updateAdmin);


// Teacher Login
// get a particular teacher details
router.get("/getTeacher/:id",TeacherController.getTeacher);
// update teacher
router.put("/updateTeacher/:id",TeacherController.updateTeacher)


// Teacher Routers
// Teacher Login
router.post("/thrLogin", TeacherController.thrLogin);


// Student Routers
// Student Login
router.post("/stdLogin", StudentController.stdLogin);
// delete student
router.delete("/deleteStudent/:id",StudentController.deleteStudent)
// get the details of a particular student
router.get("/getStudent/:id",StudentController.getStudent)
// update student details
router.put("/updateStudent/:id",StudentController.updateStudent)
// add certificates
router.post("/addCertificate/:id",upload.single('file'),StudentController.addCertificates)
// get certificate of a partiular student
router.get("/getCertificate/:id",StudentController.getCertificates)
// calculate Activity Points
router.get("/calculate/:id",StudentController.calculateActivityPoints)

module.exports = router;
