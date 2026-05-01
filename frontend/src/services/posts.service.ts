import axios from 'axios';
import { Post } from '@/types/post.types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get(`${API_URL}/api/posts`);
  return data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const { data } = await axios.get(`${API_URL}/api/posts/${id}`);
  return data;
};