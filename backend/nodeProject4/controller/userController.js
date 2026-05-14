import { loginService, registerService, getAllUsersService } from "../service/userService.js";


const userLogin = async (req, res) => {
    try{
        if(!req.body) {
            return res.status(400).json({ message: 'Bad Request: Missing request body' });
        }

        const { email, password } = req.body;
        
        const result = await loginService(email, password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while logging in' });
    }
};

const userRegister = async (req, res) => {
    try{
        if(!req.body) {
            return res.status(400).json({ message: 'Bad Request: Missing request body' });
        }

        const { name, email, password, role } = req.body;

        const result = await registerService(name, email, password, role);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while registering' });
    }
};

const getAllUsers = async (req, res) => {
    try{
        //check jwt role from req.header form jwt token and allow only admin to access this route
        const result = await getAllUsersService();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while fetching users' });
    }
};

export { userLogin, userRegister, getAllUsers };