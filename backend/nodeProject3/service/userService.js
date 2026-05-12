import userData from "../utils/userData.js";
import User from "../model/userModel.js";

const loginService = async (email, password) => {
    const user = await User.findOne({ email, password });
    if (user) {
        return { success: true, message: 'Login successful', user };
    } else {
        return { success: false, message: 'Invalid email or password' };
    }
};

const registerService = async (name, email, password) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return { success: false, message: 'Email already exists' };
    } else {
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        return { success: true, message: 'Registration successful', user: newUser };
    }
};

export { loginService, registerService };