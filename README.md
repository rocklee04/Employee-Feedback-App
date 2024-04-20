# Employee Feedback App

The Employee Feedback App is a web application that facilitates the process of providing and receiving feedback on performance reviews within an organization.

## Features

- **Admin View:**
  - Manage employees
  - Create, update, and delete performance reviews

- **Employee View:**
  - View assigned performance reviews
  - Submit feedback on performance reviews

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - Bcrypt

- **Frontend:**
  - React.js 

## Getting Started

To get started with the Employee Feedback App, follow these steps:

1. Clone the repository:

2. Navigate to the backend directory and install dependencies:

   ```bash
    cd 
    npm install employee-feedback-app/backend
   ```
3. Set up environment variables by creating a `.env` file and defining the following variables:

   ```bash
    port
    mongodb
    privateKey
    adminPassword=admin
    adminEmail=admin@gmail.com
   ```
4. Start the backend server:

   ```bash
    npm start
    ```

5. Repeat steps 2-4 for the frontend directory.

4. User Authentication

    This API uses JSON Web Tokens (JWT) for user authentication. To access authenticated endpoints, include a valid JWT token in the Authorization header of your requests.  

6. Open your web browser and navigate to http://localhost:3000 to access the Employee Feedback App.

## Usage

### As an admin:
- Log in to the admin dashboard to manage employees and performance reviews with Email- `admin@gmail.com` and Password- `admin`.
### As an employee:
- Log in to view and submit feedback on performance reviews assigned to you and employee should login with its company email id and password which were setup by admin.

## Backend API Endpoints

### Employees

- **GET /employees:** Retrieve all employees.
- **GET /employees/:id:** Retrieve an employee by ID.
- **POST /employees:** Create a new employee.
- **PUT /employees/:id:** Update an employee by ID.
- **DELETE /employees/:id:** Delete an employee by ID.

### Performance Reviews

- **GET /reviews:** Retrieve all performance reviews.
- **GET /reviews/:id:** Retrieve a performance review by ID.
- **POST /reviews:** Create a new performance review.
- **PUT /reviews/:id:** Update a performance review by ID.
- **DELETE /reviews/:id:** Delete a performance review by ID.
- **PUT /reviews/:id/participants:** Assign employees to participate in a performance review.

### Feedback

- **GET /feedback/requiring-feedback:** Retrieve performance reviews requiring feedback for the logged-in employee.
- **POST /feedback/:reviewId/submit-feedback:** Submit feedback for a performance review.


## Swagger Documentation

You can find detailed documentation for this API using Swagger. It describes the available endpoints, request and response formats, and more.

Link:  `https://employee-feedback-api.onrender.com/api-docs/`


## Author

- Monisha Verma




