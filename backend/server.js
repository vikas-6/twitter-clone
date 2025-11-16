import express from 'express';
import authRoutes from './routes/auth.routes.js';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Add CORS middleware
app.use(express.json()); // to parse JSON request body
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded request body
app.use(cookieParser()); // to parse cookies

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectMongoDB();
});