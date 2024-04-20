let express = require("express")
let { login, signup, adminLogin } = require("../controllers/userController")
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
let JWT = require('jsonwebtoken')
let UserRouter = express.Router()

require('dotenv').config()


/**
 *@swagger
 * components:
 *   schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          name:
 *             type: string
 *             description: The name of the user 
 *          email:
 *             type: string
 *             description: The email of the user 
 *          password:
 *             type: string
 *             description: The password of the user 
 *          role:
 *             type: string
 *             description: The role of the user 
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: All the API routes of the user
 */ 


/**
 * @swagger
 * /user/signup:
 *  post:
 *       summary: To post the details of new user
 *       tags: [Users]
 *       responses:
 *           201:
 *               description: User has been successfully registered.
 *           500:
 *               description: An error occured while registering.      
 */


/**
 * @swagger
 * /user/login:
 *  post:
 *       summary: To post the details of existing user
 *       tags: [Users]
 *       responses:
 *           200:
 *               description: User has been logged in.
 *           500:
 *               description: An error occured.      
 */


UserRouter.post('/signup',signup)
UserRouter.post('/adminLogin', adminLogin)
UserRouter.post('/login',login)




module.exports = { UserRouter }