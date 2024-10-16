const TopNav = () => {
    return (
      <nav className="p-4">
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
              href="/"
              className="hover:bg-foreground hover:text-background text-foreground p-2 rounded-md transition-colors duration-300"
            >
              API
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default TopNav;
  