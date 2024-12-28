import { useSession, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
        <p>Email: {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="mt-4 py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
