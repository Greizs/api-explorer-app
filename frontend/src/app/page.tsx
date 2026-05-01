'use client';

import { usePosts } from '@/hooks/usePosts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p className="text-center mt-20">Cargando posts...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">API Explorer 🚀</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}