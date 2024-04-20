const express = require('express');
const Employee = require('../models/Employee');
let bcrypt = require('bcrypt');
let JWT = require('jsonwebtoken');


// Get all employees
let getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get one employee
let getEmployee = async (req, res) => {
    let employee = await Employee.findById({ _id: req.params.id })
    if(employee){
        res.send(employee);
    }
    else{
        res.status(404).send({message: "Employee not found."});
    }    
};

// Create an employee
let addEmployee = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const hashed = await bcrypt.hash(password, 10);
        const newEmployee = Employee({ name, email, password: hashed, role });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an employee
let updateEmployee = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body);
        if(!updateEmployee) {
            res.status(404).json({ message: 'No employee found with this Id' });
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an employee
let deleteEmployee = async (req, res) => {
    try {
        const deleted = await Employee.findByIdAndDelete(req.params.id);
        if(!deleted) {
            res.status(404).json({message: 'No employee found with this Id'});
        }
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee};
