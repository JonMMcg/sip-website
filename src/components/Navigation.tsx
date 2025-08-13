import { useState, useEffect } from "react";

interface NavigationProps {
  variant?: 'default' | 'dark' | 'download';
  logoSrc?: string;
}

const Navigation = ({ variant = 'default', logoSrc = '/lovable-uploads/21230cba-4d53-4c8f-8c9c-9c9a10da157e.png' }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
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
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="inline-block">
          <img 
            src={logoSrc} 
            alt="Sip Logo" 
            className="h-12 w-auto max-w-full hover:opacity-80 transition-opacity"
            style={{ height: 'auto', maxHeight: '3rem' }}
          />
        </a>
        
        <div className="flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`transition-colors font-medium ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('download')}
            className={`transition-colors font-medium ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`transition-colors font-medium ${
              variant === 'dark' || variant === 'download'
                ? 'text-[#002649] hover:text-[#002649]/70' 
                : 'text-white hover:text-white/70'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;