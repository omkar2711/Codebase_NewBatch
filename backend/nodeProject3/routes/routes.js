import { Router } from "express";
import { loginController, registerController } from "../controller/userController.js";

const UserRouter = Router();


UserRouter.get("/", (req, res) => {
    res.send("User route is working!");
});

UserRouter.post("/login", loginController);

UserRouter.post("/register", registerController);


export default UserRouter;
