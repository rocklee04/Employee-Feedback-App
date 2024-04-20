const express = require("express");
const employeeRoutes = express.Router();
const employeeController = require('../controllers/employeeController');


employeeRoutes.get("/", employeeController.getAllEmployees)
employeeRoutes.get("/:id", employeeController.getEmployee)
employeeRoutes.post("/add", employeeController.addEmployee)
employeeRoutes.put("/update/:id", employeeController.updateEmployee)
employeeRoutes.delete('/delete/:id', employeeController.deleteEmployee)


module.exports = {employeeRoutes};