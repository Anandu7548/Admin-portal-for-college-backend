const AdminModel = require("../Models/AdminModel");
const TeacherModel = require("../Models/TeacherModel");
const StudentModel = require("../Models/StudentModel");
const { response } = require("express");

// For admins
// Admin login
exports.adminLogin = async (req, res) => {
  console.log("admin login api called");
  const { adminEmail, adminPassword, adminSecretKey } = req.body;
  console.log(req.body);
  try {
    const admin = await AdminModel.findOne({ adminEmail });
    if (
      !admin ||
      admin.adminPassword !== adminPassword ||
      (admin.adminSecretKey && admin.adminSecretKey !== adminSecretKey)
    ) {
      res.status(401).json({ error: "Invalid admin credentials" });
      return;
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error("Error during admin login:", error);
    res.status(500).json({ error: "An error occurred during admin login" });
  }
};

// Add new Admin
exports.addAdmin = async (req, res) => {
  console.log("req body for new admin=", req.body);
  try {
    const {
      adminUsername,
      adminPassword,
      adminEmail,
      adminPhoneNumber,
      adminSecretKey,
    } = req.body;
    console.log(req.body);
    // Check if admin with the same email already exists
    const existingAdmin = await AdminModel.findOne({ adminEmail });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ error: "Admin with this email already exists" });
    }
    // Create a new admin instance
    const newAdmin = new AdminModel({
      adminUsername,
      adminPassword,
      adminEmail,
      adminPhoneNumber,
      adminSecretKey,
    });
    // Save the new admin to the database
    await newAdmin.save();
    console.log(newAdmin);
    res.status(201).json({ message: "Admin added successfully" });
  } catch (error) {
    console.error("Error adding admin:", error);
    res.status(500).json({ error: "An error occurred while adding admin" });
  }
};

// Get all admins
exports.getAdmins = async (req, res) => {
  try {
    const response = await AdminModel.find();
    console.log(response);
    res.status(200).json(response);
    console.log("admin details fetched successfully");
  } catch (err) {
    res.status(404).json(err);
  }
};

// get details of logined admin
exports.getAdmin = async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  try {
    const admin = await AdminModel.findOne({ _id });
    console.log(admin);
    res.status(200).json(admin);
  } catch (err) {
    res.status(404).json("Admin Not Found");
  }
};


// Update admin profile
exports.updateAdmin = async (req, res) => {
  const id = req.params.id;
  const { adminPassword, adminPhoneNumber, adminSecretKey, adminEmail } =
    req.body;

  console.log("Admin updation called for ", id);

  try {
    const admin = await AdminModel.findById(`${id}`);
    console.log(admin);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    if (adminPassword) {
      admin.adminPassword = adminPassword;
    }
    if (adminPhoneNumber) {
      admin.adminPhoneNumber = adminPhoneNumber;
    }
    if (adminSecretKey) {
      admin.adminSecretKey = adminSecretKey;
    }
    if (adminEmail) {
      admin.adminEmail = adminEmail;
    }

    const updatedAdmin = await admin.save();
    console.log("Updated Admin =", updatedAdmin);
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json("Internal Server Error", error);
  }
};

// For teachers
//   Add New Teacher
exports.addTeacher = async (req, res) => {
  try {
    const {
      thrUsername,
      thrEmail,
      thrPassword,
      thrPhoneNumber,
      thrDept,
      
      thrAadhar,
    } = req.body;

    console.log("Request body = ", req.body);
    // Check if teacher with the same email already exists
    const existingTeacher = await TeacherModel.findOne({ thrEmail });
    if (existingTeacher) {
      return res
        .status(400)
        .json({ error: "Teacher with this email already exists" });
    }

    // Create a new teacher instance
    const newTeacher = new TeacherModel({
      thrUsername,
      thrEmail,
      thrPassword,
      thrPhoneNumber,
      thrDept,
      thrAadhar,
    });

    // Save the new teacher to the database
    await newTeacher.save();

    res.status(201).json({ message: "Teacher added successfully" });
  } catch (error) {
    console.error("Error adding teacher:", error);
    res.status(500).json({ error: "An error occurred while adding teacher" });
  }
};

// Get all teachers
exports.getTeachers = async (req, res) => {
  try {
    const response = await TeacherModel.find();
    console.log(response);
    res.status(200).json(response);
    console.log("Teachers details are fetched successfully");
  } catch (err) {
    res.status(404).json(err);
  }
};

// For students
//   Add new student
exports.addStudent = async (req, res) => {
  try {
    const { stdName, stdEmail, stdPassword, stdPhoneNumber, regNo, stdDept } =
      req.body;

    console.log("new Student request body = ", req.body);
    const existingStudent = await StudentModel.findOne({
      $or: [{ stdEmail }, { regNo }],
    });
    if (existingStudent) {
      return res.status(400).json({
        error: "Student with this email or registration number already exists",
      });
    }
    // Create a new student instance
    const newStudent = new StudentModel({
      stdName,
      stdEmail,
      stdPassword,
      stdPhoneNumber,
      regNo,
      stdDept,
    });

    // Save the new student to the database
    await newStudent.save();

    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    console.log("Error adding student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding student", error });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await StudentModel.find();
    console.log(students);
    res.status(200).json(students);
    console.log("Students Details fetched Succesfully");
  } catch (err) {
    res.status(404).json(err);
  }
};
