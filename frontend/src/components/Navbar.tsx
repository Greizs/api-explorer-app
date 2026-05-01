import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600 hover:opacity-80 transition-opacity">
          API Explorer
        </Link>
        <span className="text-sm text-gray-400">
          Powered by JSONPlaceholder
        </span>
      </div>
    </nav>
  );
}