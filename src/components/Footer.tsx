import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full" style={{ backgroundColor: '#032B49' }}>
      <div className="container mx-auto px-6 py-10">
        {/* Main footer content - three columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" style={{ columnGap: '36px' }}>
          {/* Left Column - Logo and Tagline */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4 lg:pr-8">
            <a href="/" className="inline-block">
              <img 
                src="/lovable-uploads/21230cba-4d53-4c8f-8c9c-9c9a10da157e.png" 
                alt="Sip Logo" 
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
            <p className="text-white/80 text-sm leading-relaxed">
              From inspiring voices to everyday experts, Sip brings you the best AMAs (Ask Me Anything).
            </p>
          </div>

          {/* Middle Columns - Company and Support */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-base">Company</h3>
            <button
              onClick={() => scrollToSection('about')}
              className="block text-white hover:text-white/70 transition-colors text-sm"
            >
              About
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium text-base">Support</h3>
            <button
              onClick={() => scrollToSection('contact')}
              className="block text-white hover:text-white/70 transition-colors text-sm"
            >
              Contact
            </button>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="#"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on LinkedIn"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="#"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on X (Twitter)"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                  alt="X (Twitter)"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright and Legal Links */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white">
            <span>Sip Inc. Copyright ©2024</span>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-white/70 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;