"use client";
import { signIn } from "next-auth/react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">
          Sign In / Sign Up
        </h2>
        <div className="mt-8 space-y-4">
          {/* Sign In with GitHub Button */}
          <button
            onClick={() => signIn("github")}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign in with GitHub
          </button>

          {/* Sign In with Google Button */}
          <button
            onClick={() => signIn("google")}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
