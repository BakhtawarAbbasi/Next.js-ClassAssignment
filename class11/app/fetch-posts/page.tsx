"use client";

import { useEffect, useState } from "react";

// Define the Post interface for TypeScript
interface Post {
  id: number;
  title: string;
  body: string;
}

const FetchPostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/external");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        // Error handling with type checking
        if (err instanceof Error) {
          setError(err.message); // Access the error message safely
        } else {
          setError("An unknown error occurred"); // Fallback error message
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Show loading message
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-blue-500 font-bold">Loading...</div>
      </div>
    );

  // Show error message if any
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );

  // Render posts when data is fetched successfully
  return (
    <div className="p-6 md:p-12 max-w-screen-lg mx-auto bg-slate-50 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Latest Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 border border-gray-300 rounded-xl shadow-lg hover:bg-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
              <p className="text-gray-500 mt-4">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchPostsPage;
