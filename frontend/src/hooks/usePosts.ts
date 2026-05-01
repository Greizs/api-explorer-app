import { useEffect, useState } from 'react';
import { getPosts, getPostById } from '@/services/posts.service';
import { Post } from '@/types/post.types';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError('No se pudieron cargar los posts'))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
}

export function usePost(id: number) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPostById(id)
      .then(setPost)
      .catch(() => setError('No se pudo cargar el post'))
      .finally(() => setLoading(false));
  }, [id]);

  return { post, loading, error };
}