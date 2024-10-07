// pages/index.js
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <nav>
        <Link href="/about"><button>About</button></Link>
        <Link href="/contact"><button>Contact</button></Link>
      </nav>
      <Footer />
    </div>
  );
}
