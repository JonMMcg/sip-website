import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  variant?: 'default' | 'dark' | 'download';
  logoSrc?: string;
}

const Navigation = ({ variant = 'default', logoSrc = 'https://framerusercontent.com/images/ee4rrhr6y0285HlULgJjFYnNI.png' }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        variant === 'download'
          ? 'bg-white shadow-sm'
          : isScrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      style={isScrolled && variant !== 'download' ? { backgroundColor: '#002649' } : {}}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="inline-block">
          <img 
            src={logoSrc} 
            alt="Sip Logo" 
            className="w-auto max-w-full hover:opacity-80 transition-opacity"
            style={{ height: '3.5rem', width: 'auto' }}
          />
        </Link>
        
        <div className="flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-colors ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: '500' }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className={`transition-colors ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: '500' }}
          >
            Download
          </button>
          <Link
            to="/contact"
            className={`transition-colors ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: '500' }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;