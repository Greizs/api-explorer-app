'use client';

import { use } from 'react';
import Link from 'next/link';
import { usePost } from '@/hooks/usePosts';

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { post, loading, error } = usePost(Number(id));

  if (loading) return <p className="text-center mt-20">Cargando post...</p>;
  if (error || !post) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <main className="max-w-2xl mx-auto p-8">
      <Link href="/" className="text-blue-500 hover:underline text-sm">
        ← Volver a posts
      </Link>
      <div className="mt-6">
        <span className="text-xs text-gray-400">Post #{post.id}</span>
        <h1 className="text-2xl font-bold capitalize mt-1">{post.title}</h1>
        <p className="text-gray-700 mt-4 leading-relaxed">{post.body}</p>
        <span className="inline-block mt-6 text-xs text-gray-400">
          Usuario #{post.userId}
        </span>
      </div>
    </main>
  );
}