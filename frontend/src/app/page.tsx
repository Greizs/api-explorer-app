'use client';

import { usePosts } from '@/hooks/usePosts';
import PostCard from '@/components/PostCard';
import SkeletonCard from '@/components/SkeletonCard';

export default function Home() {
  const { posts, loading, error } = usePosts();

  return (
    <main className="max-w-4xl mx-auto px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Posts</h1>
        <p className="text-gray-500 mt-1">Exploraa los posts obtenidos desde la API por Bran</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : posts.map((post) => <PostCard key={post.id} post={post} />)
        }
      </div>
    </main>
  );
}