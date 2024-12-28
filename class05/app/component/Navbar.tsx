// app/components/Navbar.tsx
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="fixed w-full shadow-md bg-navy">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">
            My Portfolio
          </div>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/projects" className="text-white hover:text-gray-300">Projects</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;