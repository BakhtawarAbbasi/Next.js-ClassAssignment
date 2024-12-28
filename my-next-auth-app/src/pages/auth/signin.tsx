import { GetServerSideProps } from "next";
import { getProviders, signIn } from "next-auth/react";

interface Props {
  providers: Record<string, any>;
}

const SignIn = ({ providers }: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded mb-4"
          >
            Sign in with {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return { props: { providers } };
};

export default SignIn;
