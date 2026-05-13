import express from 'express'; // Importing the Express framework
import cors from 'cors'; // Importing CORS middleware to handle Cross-Origin Resource Sharing
import UserRouter from './routes/routes.js'; // Importing the user routes
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables
import dbConnect from './utils/dbConnect.js'; // Importing the database connection function
dotenv.config(); // Load environment variables from .env file

const app = express(); // Creating an instance of the Express application
const PORT = 3000; // Defining the port on which the server will listen

dbConnect(); // Establishing a connection to the database

app.use(cors()); // Enabling CORS for all routes to allow requests from different origins
app.use(express.json()); // Middleware to parse incoming JSON requests and make the data available in req.body

app.get('/', (req, res) => {
    res.send('Server is running!'); // A simple route to check if the server is working
});

app.use('/users', UserRouter); // Using the UserRouter for all routes that start with /users, which will handle user registration and login requests

app.listen(PORT, () => { // Starting the server and listening on the defined port
  console.log(`Server is running on http://localhost:${PORT}`);
});