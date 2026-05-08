import express from 'express'
import todoRouter from './routes/routes.js';
import cors from 'cors';
const app = express()
const port = 3000

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/todos', todoRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-Jokes', (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!"
  ];
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.send(randomJoke);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
