'use client';

import { use } from 'react';
import Link from 'next/link';
import { usePost } from '@/hooks/usePosts';

export default function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { post, loading, error } = usePost(Number(id));

  if (loading) return (
    <main className="max-w-2xl mx-auto px-8 py-10 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-8" />
      <div className="h-8 bg-gray-200 rounded mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded" />
        <div className="h-4 bg-gray-100 rounded" />
        <div className="h-4 bg-gray-100 rounded w-2/3" />
      </div>
    </main>
  );

  if (error || !post) return (
    <main className="max-w-2xl mx-auto px-8 py-10">
      <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4">
        {error || 'Post no encontrado'}
      </div>
      <Link href="/" className="text-blue-500 hover:underline text-sm mt-4 inline-block">
        ← Volver a posts
      </Link>
    </main>
  );

  return (
    <main className="max-w-2xl mx-auto px-8 py-10">
      <Link href="/" className="text-blue-500 hover:underline text-sm">
        ← Volver a posts
      </Link>
      <article className="mt-6 bg-white border rounded-xl p-8 shadow-sm">
        <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
          Post #{post.id}
        </span>
        <h1 className="text-2xl font-bold text-gray-800 capitalize mt-4">{post.title}</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">{post.body}</p>
        <div className="mt-8 pt-4 border-t">
          <span className="text-xs text-gray-400">Publicado por Usuario #{post.userId}</span>
        </div>
      </article>
    </main>
  );
}