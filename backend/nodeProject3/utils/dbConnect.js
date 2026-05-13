import mongoose from "mongoose";

const dbConnect = async () => { // This function will connect to the MongoDB database using the connection string from the environment variable MONGO_URI
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }   
}

export default dbConnect;