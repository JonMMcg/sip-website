
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
        minHeight: 'calc(64.4vh + 48px)',
        backgroundImage: `url('https://framerusercontent.com/images/Q6FaB1b5REn9773AVqI6BmID4A.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-primary-black/45"></div>
      <div className="w-full relative z-10">
        <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="hero-title font-medium text-primary-white mb-6 leading-tight animate-fade-in">
            Ask. Answer. Connect.
          </h1>
          <p className="text-base md:text-lg text-primary-white/90 mb-12 leading-relaxed font-normal animate-fade-in">
            From inspiring leaders to everyday experts, Sip lets you ask questions and get answers through AMAs (Ask Me Anything).
          </p>
          <button 
            onClick={scrollToDownload}
            className="cta-button text-primary-white font-medium px-8 py-3 bg-primary-red hover:bg-primary-red/90 rounded-xl inline-flex items-center transition-all duration-200 ease-out hover:shadow-lg focus:ring-2 focus:ring-primary-red focus:ring-offset-2 animate-fade-in text-base"
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