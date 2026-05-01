import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/env';
import { env } from './config/env';
import postsRouter from './routes/posts.routes';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL || '',
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
}));

app.use(express.json());
app.use('/api/posts', postsRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Backend running 🟢' });
});

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});