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


exports.deleteStudent = async (req, res) => {
    console.log("delete");
    const id = req.params.id;

    try {
        const student = await StudentModel.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

