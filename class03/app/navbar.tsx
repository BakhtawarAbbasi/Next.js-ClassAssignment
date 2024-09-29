'use client'; // Ensure this component can use client-side hooks

import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route); // Use push for navigation
  };

  return (
    <nav style={{ display: 'flex', gap: '60px', padding: '20px', backgroundColor: '#295F98', textAlign: 'center',justifyContent: 'center', color: 
    'white',
     }}>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/footer')}>Footer</button>
    </nav>
  );
};

export default Navbar;
