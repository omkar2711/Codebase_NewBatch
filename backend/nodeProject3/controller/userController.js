import { loginService, registerService } from "../service/userService.js";

const loginController = async(req, res) => {
    try{

        if(!req.body) {
            return res.status(400).json({ success: false, message: 'Request body is missing' });
        }
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const result = await loginService(email, password);
        
        if (result.success) {
            res.json(result);
        } else {
            res.status(401).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error occurred while logging in' });
    }
};

const registerController = async (req, res) => {
    try{

        if(!req.body) {
            return res.status(400).json({ success: false, message: 'Request body is missing' });
        }
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Name, email and password are required' });
        }
        const result = await registerService(name, email, password);
        
        if (result.success) {
            res.json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error occurred while registering' });
    }
};

export { loginController, registerController };

