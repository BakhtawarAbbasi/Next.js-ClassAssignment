"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
const [navOpen, setNavOpen] = useState(false);

const toggleNav = () => {
  setNavOpen(!navOpen);
};

return (
  <header className="bg-primary text-white py-4 px-5 md:px-10">
  
    <div className="flex items-center justify-between">
      {/* Logo or Brand Name */}
      <h1 className="text-2xl font-bold text-slate-300">Bakhtawar</h1>
        
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/Home" className="hover:text-purple hover:underline mt-2 transition duration-300 cursor-pointer">Home</Link>
        <Link href="/about" className="hover:text-purple hover:underline mt-2 transition duration-300 cursor-pointer">About</Link>
        <Link href="/skills" className="hover:text-purple hover:underline mt-2 transition duration-300 cursor-pointer">Skills</Link>
        <Link href="/project" className="hover:text-purple hover:underline mt-2 transition duration-300 cursor-pointer">Projects</Link>
        <Link href="/contact" className="mt-0 bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white transition duration-300 ">Let's Connect</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer text-3xl" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>


      {/* Mobile Navigation */}
      {navOpen && (
        <nav className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300 cursor-pointer ">Home</Link>
          <Link href="/about" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300 cursor-pointer ">About</Link>
          <Link href="/skills" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300 cursor-pointer ">Skills</Link>
          <Link href="/projects" onClick={toggleNav} className="hover:text-purple hover:underline transition duration-300 cursor-pointer ">Projects</Link>
          <button><Link href="/contact" onClick={toggleNav} className="cursor-pointer bg-transparent border border-gray-300 py-2 px-5 rounded-full hover:bg-purple hover:text-white transition duration-300">Let's Connect</Link></button>
        </nav>
      )}
    </header>
  );
};
export default Header;