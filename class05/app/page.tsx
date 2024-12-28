// app/page.tsx
import React from 'react';
import Navbar from './component/Navbar'

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16"> {/* Add padding to avoid overlap with fixed navbar */}
        {/* <h1 className="text-navy text-4xl text-center mt-8">Welcome to My Portfolio</h1>
        <p className="text-center text-gray-700 mt-4">This is a simple portfolio page.</p> */}
      </div>
    </main>
  );
};

export default Home;
