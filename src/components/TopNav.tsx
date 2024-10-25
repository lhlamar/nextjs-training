'use client'; // Marks this as a client component

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const TopNav = () => {
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // Use router to navigate programmatically

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor behavior

    if (pathname === '/') {
      // If already on the home page, scroll to #contact
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the home page, redirect to the home page and scroll to #contact
      router.push('/?scrollToContact=true');
    }
  };


  useEffect(() => {
    // Check if we need to scroll to the contact section after redirecting
    if (pathname === '/' && window.location.search.includes('scrollToContact=true')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState({}, document.title, '/'); // Clean up the URL query
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 p-4">
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href={pathname === '/' ? "#home": "/"}
            className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            onClick={handleContactClick}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href={pathname === '/spotify-stats' ? "#top-tracks-nav" : "/spotify-stats"}
            className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
          >
            Spotify Stats
          </a>
        </li>
        {pathname=== '/spotify-stats' && (
          <li>
            <a
              href="#top-artists-nav"
              className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            >
              Top Artists
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default TopNav;
