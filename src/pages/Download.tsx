import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Download = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation variant="download" logoSrc="/lovable-uploads/6c4b5a04-1c5a-42a6-897f-ec2cfbc075f1.png" />
      <main className="pt-20 w-full" style={{ marginTop: '-72px' }}>
        <section className="w-full bg-white" style={{ paddingTop: '116px', paddingBottom: '44px' }}>
          <div className="container mx-auto px-6">
            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Left column - iPhone mockup */}
              <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="transform -rotate-12 transition-transform hover:scale-105">
                  <picture>
                    <source 
                      srcSet="/lovable-uploads/d497aeae-7abc-492b-86b7-8be163ab4dc3.png" 
                      type="image/png"
                    />
                    <img 
                      src="/lovable-uploads/d497aeae-7abc-492b-86b7-8be163ab4dc3.png" 
                      alt="SIP App iPhone Mockup" 
                      className="w-96 md:w-[420px] lg:w-[480px] xl:w-[520px] h-auto max-w-full drop-shadow-2xl"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 384px, (max-width: 768px) 420px, (max-width: 1024px) 480px, 520px"
                    />
                  </picture>
                </div>
              </div>
              
              {/* Right column - Text and button */}
              <div className="flex flex-col justify-center lg:justify-start space-y-8 order-1 lg:order-2 lg:pl-8">
                <p className="font-medium leading-relaxed" style={{ color: '#ED0942', fontSize: '1.5rem' }}>
                  Sip brings AMAs into one place. Download our beta version today!
                </p>
                
                <div className="flex justify-start">
                  <a 
                    href="#" 
                    className="inline-block transition-all duration-200 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Download on the App Store"
                  >
                    <div className="bg-black text-white px-2 py-1 rounded-xl flex items-center space-x-4 min-w-[220px] shadow-lg hover:shadow-2xl transition-shadow duration-200">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-sm opacity-90">Download on the</div>
                        <div className="text-xl font-semibold -mt-1">App Store</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;