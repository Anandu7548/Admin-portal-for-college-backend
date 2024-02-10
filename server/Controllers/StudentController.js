const StudentModel = require("../Models/StudentModel");

// Teacher Login
exports.stdLogin = async (req, res) => {
    console.log("std login api called");
    const { stdEmail, stdPassword } = req.body;
    console.log(req.body);
    try {
        const student = await StudentModel.findOne({ stdEmail });
        if (!student || student.stdPassword !== stdPassword) {
            res.status(401).json({ error: "Invalid Student credentials" });
            return;
        }
        res.status(200).json({ message: "Student login successful" });
    } catch (error) {
        console.error("Error while Student login:", error);
        res.status(500).json({ error: "An error occurred during the Student login" });
    }
};


  // Get all Students
  exports.getStudents = async(req,res)=>{
    try{
      const response = await StudentModel.find()
      console.log(response);
      res.status(200).json(response)
      console.log("Stidents details are fetched successfully");
    }
    catch(err){
      res.status(404).json(err)
    }
  }