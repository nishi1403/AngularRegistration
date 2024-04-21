const express = require("express");
const router = express.Router();
const employeeController = require("../src/employee/employeeController");

router.route("/user/create").post(employeeController.createUserControllerFn);

module.exports = router;
