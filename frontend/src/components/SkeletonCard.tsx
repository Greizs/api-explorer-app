export default function SkeletonCard() {
  return (
    <div className="border rounded-lg p-4 animate-pulse">
      <div className="h-3 w-8 bg-gray-200 rounded mb-3" />
      <div className="h-5 bg-gray-200 rounded mb-2" />
      <div className="h-4 bg-gray-100 rounded mb-1" />
      <div className="h-4 bg-gray-100 rounded w-3/4" />
    </div>
  );
}