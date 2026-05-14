import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginService = async (email, password) => {
    try{
        if(!email || !password) {
            throw new Error('Email and password are required');
        }

        console.log('Attempting to find user with email:', email); // Debugging log

        const user = await User.findOne({ email });
        console.log('User query result:', user); // Debugging log
        
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            
            if (isPasswordValid) {
                const token = jwt.sign(
                    { userId: user._id, role: user.role },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );
                return { success: true, token };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        } else {
            return { success: false, message: 'User not found' };
        }
    }
    catch (error) {
        console.error('Error in loginService:', error);
        throw new Error('Login failed'); // You can customize the error message as needed
    }
};

const registerService = async (name, email, password, role) => {
    try{

        if(!name || !email || !password || !role) {
            throw new Error('Name, email, password and role are required');
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { success: false, message: 'User already exists' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        return { success: true, message: 'User registered successfully' };
    }
    catch (error) {
        console.error('Error in registerService:', error);
        throw new Error('Registration failed'); // You can customize the error message as needed
    }
};

const getAllUsersService = async () => {
    try {
        const users = await User.find();
        return { success: true, users };
    } catch (error) {
        console.error('Error in getAllUsersService:', error);
        throw new Error('Failed to retrieve users'); // You can customize the error message as needed
    }
};

export { loginService, registerService, getAllUsersService };