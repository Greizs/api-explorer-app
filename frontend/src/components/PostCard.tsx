import { Post } from '@/types/post.types';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs text-gray-400">#{post.id}</span>
      <h2 className="font-semibold text-lg capitalize mt-1">{post.title}</h2>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{post.body}</p>
    </div>
  );
}