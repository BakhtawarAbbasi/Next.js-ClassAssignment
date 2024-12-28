import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-6 text-center rounded-lg shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">JSON Placeholder</h1>
        <Link href="/fetch-posts">
          <button className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none">
            Fetch Posts
          </button>
        </Link>
      </div>
    </div>
  );
}
