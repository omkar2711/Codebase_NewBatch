import { Router } from "express";
import userAuthentication from "../middleware/authentication.js";
import authorization from "../middleware/authorization.js";

import { userLogin, userRegister, getAllUsers } from "../controller/userController.js";

const UserRouter = Router();

UserRouter.get("/", (req, res) => {
    res.send("User route is working!");
});

UserRouter.post("/login", userLogin);

UserRouter.post("/register", userRegister);

UserRouter.get("/getAllUsers", userAuthentication, authorization, getAllUsers);

export default UserRouter;