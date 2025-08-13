import { Button } from "@/components/ui/button";
import UpRightArrow from "@/components/ui/up-right-arrow";

const HeroSection = () => {
  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="flex items-center justify-start pt-20 relative w-full"
      style={{
        minHeight: 'calc(70vh + 48px)',
        backgroundImage: `url('/lovable-uploads/a745b6f4-a37e-4951-8c91-c63527f55c8e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="w-full relative z-10">
        <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight animate-fade-in">
            Ask. Answer. Connect.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-normal animate-fade-in">
            From inspiring leaders to everyday experts, Sip lets you ask questions and get answers through AMAs (Ask Me Anything).
          </p>
          <button 
            onClick={scrollToDownload}
            className="bg-primary text-white font-normal rounded-lg px-7 py-3.5 inline-flex items-center transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-fade-in text-lg"
          >
            Get Started
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;