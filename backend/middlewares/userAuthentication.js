const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authenticate(req, res, next) {
    const token = req.header('Authorization');
    try {
        const decoded = jwt.verify(token, process.env.privateKey)
        if(decoded) {
            req.body.employeeId = decoded.employeeId
            req.body.employee = decoded.employee
            next();
        }  else {
            res.status(200).json({"err": err.message})
        }

    }catch(err) {
        res.status(400).json({"msg": "Please Login"})
    }
} 

module.exports = authenticate;