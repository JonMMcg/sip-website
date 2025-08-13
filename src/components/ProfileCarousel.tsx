import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const profiles = [
  {
    id: 1,
    name: "Yi Yang",
    role: "Founder, Economist",
    bio: "Experienced economist turned founder, building Sip.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1d5?w=400&h=500&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Environmental Scientist",
    bio: "Pioneering research in climate science and sustainability.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Dr. Elena Rodriguez",
    role: "Medical Researcher",
    bio: "Leading breakthrough studies in personalized medicine.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "James Wright",
    role: "Investment Strategist",
    bio: "Helping individuals navigate complex financial markets.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Maya Patel",
    role: "Creative Director",
    bio: "Transforming brands through innovative design thinking.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Tech Entrepreneur",
    bio: "Building the future of collaborative technology platforms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face"
  }
];

const ProfileCarousel = () => {
  const [api, setApi] = useState<any>();
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      
      intervalRef.current = window.setInterval(() => {
        if (!isPaused) {
          api.scrollNext();
        }
      }, 6000); // 6 seconds autoplay
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [api, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-20 bg-white w-full">
      <div className="mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-2">
            Discover & Ask
          </h2>
          <p className="text-xl md:text-2xl font-normal text-muted-foreground">
            People with Unique Backgrounds
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {profiles.map((profile) => (
                <CarouselItem key={profile.id} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl transition-all duration-200 hover:scale-[1.03] cursor-pointer h-full p-7">
                     <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-7 w-4/5 mx-auto">
                        <img
                          src={profile.image}
                          alt={`${profile.name} profile picture`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                     </div>
                    <div className="w-3/5 mx-auto text-left">
                      <h3 className="font-medium mb-1 text-foreground" style={{ fontSize: '1.5rem' }}>{profile.name}</h3>
                      <p className="font-medium mb-2 text-muted-foreground" style={{ fontSize: '1.2rem' }}>{profile.role}</p>
                      <p className="leading-relaxed text-muted-foreground opacity-80" style={{ fontSize: '1.2rem' }}>{profile.bio}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-11 md:h-11 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
              aria-label="Previous slide"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#0F0F0F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-11 md:h-11 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }}
              aria-label="Next slide"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#0F0F0F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProfileCarousel;