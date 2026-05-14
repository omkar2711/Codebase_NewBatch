import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRouter from './routes/userRoutes.js';
import ProductRouter from './routes/productRoutes.js';
import dbConnect from './utils/dbConnect/dbConnect.js';

dotenv.config();

const app = express();
const PORT = 3000;

dbConnect();

app.use(cors());
app.use(express.json());

app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});