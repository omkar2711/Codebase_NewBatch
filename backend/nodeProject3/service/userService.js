import userData from "../utils/userData.js";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";

const loginService = async (email, password) => {
    const user = await User.findOne({ email });

    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return { success: true, message: 'Login successful', user };
        } else {
            return { success: false, message: 'Invalid email or password' };
        }
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
};

const registerService = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return { success: false, message: 'Email already exists' };
    } else {

        const hashedPassword = await bcrypt.hash(password, 10); // In a real application, you should hash the password before saving it to the database
        const newUser = new User({
            name,
            email,
            password : hashedPassword
        });
        await newUser.save();
        return { success: true, message: 'Registration successful', user: newUser };
    }
};

export { loginService, registerService };