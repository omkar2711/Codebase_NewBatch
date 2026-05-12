import axios from 'axios';
const api_url = import.meta.env.VITE_API_URL;


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${api_url}/users/register`, userData);
        return response.data;
    }
    catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return { success: false, message: 'An error occurred while registering' };
        }
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${api_url}/users/login`, userData);
        console.log('Login response:', response.data);
        return response.data;
    }
    catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            return { success: false, message: 'An error occurred while logging in' };
        }
    }
};