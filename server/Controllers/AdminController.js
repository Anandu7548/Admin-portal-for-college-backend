const AdminModel = require("../Models/AdminModel");




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
      res.status(200).json({ message: "Admin login successful" });
    } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ error: "An error occurred during admin login" });
    }
};
