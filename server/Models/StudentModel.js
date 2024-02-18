const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  stdName: {
    type: String,
    required: true
  },
  stdEmail: {
    type: String,
    required: true,
    unique: true
  },
  stdSem:{
    type:String,
    required: true,
  },
  stdPassword: {
    type: String,
    required: true
  },
  stdPhoneNumber: {
    type: String,
    required: true,
  },
  regNo: {
    type: String,
    required: true,
    unique: true
  },
  stdDept:{
    type:String,
    required:true
  },
  certificates: [
    {
        certificateName: String,
        grade: String,
        certificateUrl: String // Store the URL/path to the uploaded file
    }
]
});

const Students = mongoose.model("Student", studentSchema);

module.exports = Students;
