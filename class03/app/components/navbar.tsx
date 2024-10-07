// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><button>Home</button></Link>
      <Link href="/about"><button>About</button></Link>
      <Link href="/contact"><button>Contact</button></Link>
    </nav>
  );
};

export default Navbar;
