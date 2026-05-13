import { Router } from "express"; // Importing the Router class from the Express framework to create modular route handlers
import { loginController, registerController } from "../controller/userController.js"; // Importing the login and register controller functions from the userController module

const UserRouter = Router(); // Creating a new router instance for handling user-related routes


UserRouter.get("/", (req, res) => { // Defining a GET route for the root path of the user router to check if the route is working
    res.send("User route is working!");
});

UserRouter.post("/login", loginController); // Defining a POST route for /login that uses the loginController to handle login requests

UserRouter.post("/register", registerController); // Defining a POST route for /register that uses the registerController to handle registration requests


export default UserRouter;
