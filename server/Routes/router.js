// router.js
const express = require("express");
const router = express.Router();
const AdminContoller = require("../Controllers/AdminController");



// Admin Routers
router.post("/admLogin", AdminContoller.adminLogin);



module.exports = router;
