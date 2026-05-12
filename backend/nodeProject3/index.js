import express from 'express';
import cors from 'cors';
import UserRouter from './routes/routes.js';
import dotenv from 'dotenv';
import dbConnect from './utils/dbConnect.js';
dotenv.config();

const app = express();
const PORT = 3000;

dbConnect();

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use('/users', UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});