import { useState } from 'react';
import { Search, User, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    living: false,
    storage: false,
    dining: false,
    bedroom: false,
    mattress: false,
    study: false,
    office: false,
    outdoor: false,
  });

  // Toggle dropdown and close any previously open dropdowns
  const toggleDropdown = (section) => {
    setDropdowns((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        // Close all dropdowns except the clicked one
        newState[key] = key === section ? !prevState[key] : false;
      });
      return newState;
    });
  };

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
            alt="Logo"
            className="w-24 h-auto" // Adjusted size for a better fit
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          {['living', 'storage', 'dining', 'bedroom', 'mattress', 'study', 'office', 'outdoor'].map((section) => (
            <div key={section} className="relative group">
              <button
                className="flex items-center hover:text-gray-300"
                onClick={() => toggleDropdown(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} <ChevronDown className="ml-1" size={16} />
              </button>
              {dropdowns[section] && (
                <div className="absolute top-full left-0 bg-white text-black p-4 shadow-lg w-48 z-50">
                  {[`Option 1 for ${section}`, `Option 2 for ${section}`, `Option 3 for ${section}`].map((option, index) => (
                    <Link key={index} to={`/${section}-${index + 1}`} className="block py-2 hover:text-gray-600">
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="hover:text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search and User Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="hover:text-gray-300">
            <Search size={24} />
          </button>
          <button className="hover:text-gray-300">
            <User size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white space-y-4 px-4 py-6">
          <Link to="/" className="block hover:text-gray-300">Home</Link>
          {['living', 'storage', 'dining', 'bedroom', 'mattress', 'study', 'office', 'outdoor'].map((section) => (
            <div key={section} className="group">
              <button
                className="block w-full text-left flex items-center justify-between hover:text-gray-300"
                onClick={() => toggleDropdown(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} <ChevronDown className="ml-2" size={16} />
              </button>
              {dropdowns[section] && (
                <div className="ml-4 mt-2 space-y-2">
                  {[`Option 1 for ${section}`, `Option 2 for ${section}`, `Option 3 for ${section}`].map((option, index) => (
                    <Link key={index} to={`/${section}-${index + 1}`} className="block hover:text-gray-300">
                      {option}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-4 mt-4">
            <button className="hover:text-gray-300">
              <Search size={24} />
            </button>
            <button className="hover:text-gray-300">
              <User size={24} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
