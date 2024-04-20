let {UserModel} = require('../models/User');
const Employee = require('../models/Employee');
let bcrypt = require('bcrypt');
let JWT = require('jsonwebtoken');


require('dotenv').config()


let login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const employee = await Employee.findOne({ email });
        if (employee) {
            bcrypt.compare(password, employee.password, (err, result) => {
                if (result) {
                    const token = JWT.sign({ employeeId: employee._id, employee: employee.name }, process.env.privateKey, { expiresIn: "4h" });
                    res.status(200).json({ "msg": "Login successfully", "token": token });
                } else {
                    res.status(200).json({ "msg": "Wrong Credentials or You didn't have Employee account" });
                }
            });
        } else {
            res.status(200).json({ "msg": "Wrong Credentials or You didn't have Employee account" });
        }
    } catch (err) {
        res.status(400).json({ "msg": err.message }); 
    }
};

let adminLogin = async(req,res) => {
    let adminPassword = req.query.password;
    if(adminPassword == process.env.adminPassword && adminEmail == process.env.adminEmail){
        res.send({ msg: "Admin login successfully" });
    }else{
        res.send({msg:"Admin password or email is incorrect"})
    }
}

let signup = async (req,res)=>{

    try {
       const {name, email, password} = req.body;
       let data = await Employee.find({ email: email })
       if(data.length==0) return res.status(404).send({msg:"You didn't have Employee account"})

       const hashed = await bcrypt.hash(password, 10);

       const user = new UserModel({name, email, password: hashed});
       await user.save();

       res.status(201).json({message: 'User registered Successfully'});
    } catch (err) {
       res.status(500).json({message: 'An error occurred'});
    }

}

module.exports = { login, adminLogin, signup }
