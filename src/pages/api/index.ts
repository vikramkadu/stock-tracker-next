import express from 'express';
import { config } from 'dotenv';
import connectDB from './config/db';
import pollData from '@/pollData';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

pollData();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


