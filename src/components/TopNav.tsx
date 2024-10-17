const TopNav = () => {
    return (
      <nav className="fixed top-0 left-0 w-full z-10 p-4">
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/"
              className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/spotify-stats"
              className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            >
              Spotify Stats
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default TopNav;
  