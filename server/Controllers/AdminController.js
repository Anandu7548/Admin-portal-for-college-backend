const AdminModel = require("../Models/AdminModel");
const TeacherModel = require("../Models/TeacherModel");
const StudentModel = require("../Models/StudentModel");


// Admin login
exports.adminLogin = async (req, res) => {
    console.log("admin login api called");
    const { adminEmail, adminPassword, adminSecretKey } = req.body;
    console.log(req.body);  
    try {
      const admin = await AdminModel.findOne({ adminEmail });
      if (!admin || admin.adminPassword !== adminPassword || (admin.adminSecretKey && admin.adminSecretKey !== adminSecretKey)) {
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
    try {
      const { adminUsername, adminPassword, adminEmail, adminPhoneNumber, adminSecretKey } = req.body;
  
      // Check if admin with the same email already exists
      const existingAdmin = await AdminModel.findOne({ adminEmail });
      if (existingAdmin) {
        return res.status(400).json({ error: 'Admin with this email already exists' });
      }
  
      // Create a new admin instance
      const newAdmin = new AdminModel({
        adminUsername,
        adminPassword,
        adminEmail,
        adminPhoneNumber,
        adminSecretKey
      });
  
      // Save the new admin to the database
      await newAdmin.save();
  
      res.status(201).json({ message: 'Admin added successfully' });
    } catch (error) {
      console.error('Error adding admin:', error);
      res.status(500).json({ error: 'An error occurred while adding admin' });
    }
  };


//   Add New Teacher
exports.addTeacher = async (req, res) => {
    try {
      const { thrUsername, thrEmail, thrPassword, thrPhoneNumber, thrDept, thrAadhar } = req.body;
  
      // Check if teacher with the same email already exists
      const existingTeacher = await TeacherModel.findOne({ thrEmail });
      if (existingTeacher) {
        return res.status(400).json({ error: 'Teacher with this email already exists' });
      }
  
      // Create a new teacher instance
      const newTeacher = new TeacherModel({
        thrUsername,
        thrEmail,
        thrPassword,
        thrPhoneNumber,
        thrDept,
        thrAadhar
      });
  
      // Save the new teacher to the database
      await newTeacher.save();
  
      res.status(201).json({ message: 'Teacher added successfully' });
    } catch (error) {
      console.error('Error adding teacher:', error);
      res.status(500).json({ error: 'An error occurred while adding teacher' });
    }
  };


//   Add new student
exports.addStudent = async (req, res) => {
    try {
      const { stdName, stdEmail, stdPassword, stdPhoneNumber, regNo, certificates } = req.body;
  
      // Check if student with the same email or registration number already exists
      const existingStudent = await StudentModel.findOne({ $or: [{ stdEmail }, { regNo }] });
      if (existingStudent) {
        return res.status(400).json({ error: 'Student with this email or registration number already exists' });
      }
  
      // Create a new student instance
      const newStudent = new StudentModel({
        stdName,
        stdEmail,
        stdPassword,
        stdPhoneNumber,
        regNo,
        certificates
      });
  
      // Save the new student to the database
      await newStudent.save();
  
      res.status(201).json({ message: 'Student added successfully' });
    } catch (error) {
      console.error('Error adding student:', error);
      res.status(500).json({ error: 'An error occurred while adding student' });
    }
  };

  // Get all admins
  exports.getAdmins = async(req,res)=>{
    try{
      const response = await AdminModel.find()
      console.log(response);
      res.status(200).json(response)
      console.log("admin details fetched successfully");
    }
    catch(err){
      res.status(404).json(err)
    }
  }

  // get details of logined admin
  exports.getAdmin = async(req,res)=>{
    const _id = req.params.id
    console.log(_id);
    try{
      const admin = await AdminModel.findOne({_id})
    console.log(admin);
    res.status(200).json(admin)
    }
    catch(err){
      res.status(404).json("Admin Not Found")
    }
  }