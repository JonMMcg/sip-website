import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

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
    <footer className="w-full" style={{ backgroundColor: '#032B49' }}>
      <div className="container mx-auto px-6 py-10">
        {/* Main footer content - three columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8" style={{ columnGap: '36px' }}>
          {/* Left Column - Logo and Tagline */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4 lg:pr-8">
            <Link to="/" className="inline-block">
              <img 
                src="https://framerusercontent.com/images/ee4rrhr6y0285HlULgJjFYnNI.png" 
                alt="Sip Logo" 
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
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
            <Link
              to="/contact"
              className="block text-white hover:text-white/70 transition-colors text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sipthatpipinghottea/"
                target="_blank"
                rel="noopener"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on Instagram"
              >
                <img
                  src="https://framerusercontent.com/assets/hxtNS4tj0gfpcErgQhvJxoF869Y.png"
                  alt="Instagram"
                  className="w-8 h-8 rounded"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/sip-inc/"
                target="_blank"
                rel="noopener"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on LinkedIn"
              >
                <img
                  src="https://logo.clearbit.com/LinkedIn.com?size=500"
                  alt="LinkedIn"
                  className="w-8 h-8 rounded"
                />
              </a>
              <a
                href="https://x.com/sip_scribe"
                target="_blank"
                rel="noopener"
                className="transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg"
                aria-label="Follow us on X (Twitter)"
              >
                <img
                  src="https://logo.clearbit.com/twitter.com?size=500"
                  alt="X (Twitter)"
                  className="w-8 h-8 rounded"
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