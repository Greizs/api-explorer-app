import { Request, Response } from 'express';
import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching post' });
  }
};