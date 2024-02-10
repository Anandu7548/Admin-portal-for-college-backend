const TeacherModel = require("../Models/TeacherModel");

// Teacher Login
exports.thrLogin = async (req, res) => {
    console.log("thr login api called");
    const { thrEmail, thrPassword } = req.body;
    console.log(req.body);
    try {
        const teacher = await TeacherModel.findOne({ thrEmail });
        if (!teacher || teacher.thrPassword !== thrPassword) {
            res.status(401).json({ error: "Invalid teacher credentials" });
            return;
        }
        res.status(200).json({ message: "Teacher login successful" });
    } catch (error) {
        console.error("Error while teacher login:", error);
        res.status(500).json({ error: "An error occurred during the teacher login" });
    }
};



  // Get all teachers
  exports.getTeachers = async(req,res)=>{
    try{
      const response = await TeacherModel.find()
      console.log(response);
      res.status(200).json(response)
      console.log("Teachers details are fetched successfully");
    }
    catch(err){
      res.status(404).json(err)
    }
  }
