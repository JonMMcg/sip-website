import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../../components/ui/carousel";

const profiles = [
  {
    id: 1,
    name: "Yi Yang",
    role: "Founder, Economist",
    bio: "Experienced economist turned founder, building Sip.",
    image: "https://framerusercontent.com/images/nX9BBWSro8KpbxveiKWTKcVU.png"
  },
  {
    id: 2,
    name: "Jonathan McGrath",
    role: "Technical Cofounder",
    bio: "Ex‑Navy Submariner turned CTO",
    image: "https://framerusercontent.com/images/2QQXStPVeOsGqjkLyYaL8qqoPeE.jpeg"
  },
  {
    id: 3,
    name: "Chufeng Huang",
    role: "iOS Developer",
    bio: "Master's in Computer Science",
    image: "https://framerusercontent.com/images/aojq1TG3t4Kjc1X59W6piV0M5Q.jpg"
  },
  {
    id: 4,
    name: "Harshini Kandagaddala",
    role: "Product Designer",
    bio: "Master's in User Experience",
    image: "https://framerusercontent.com/images/QAoHvEGnCnFMt0JbOzR7Um2tPg.jpg"
  },
  {
    id: 5,
    name: "Danning Huang",
    role: "Management Consultant",
    bio: "Strategy and Entrepreneurship",
    image: "https://framerusercontent.com/images/qGQ8f9lhvJY8WYD0XnwTxYwJeb8.jpg"
  },
  {
    id: 6,
    name: "Lewis Zhang",
    role: "Investment Banker",
    bio: "Columbia MBA",
    image: "https://framerusercontent.com/images/KaIywEGinq7kEXZ979t7cywDhY.jpg"
  },
  {
    id: 7,
    name: "Jing Wang",
    role: "Alibaba Partnership Manager",
    bio: "Global partnership and business development expert",
    image: "https://framerusercontent.com/images/RjyMcjxyTqcUPEliqltWS8VE4bo.jpg"
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
    <section className="pt-12 pb-20 bg-primary-white w-full">
      <div className="mx-auto px-6">
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-black">
            Discover & Ask <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-secondary-gray">People with Unique Backgrounds</span>
          </h2>
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
                  <div className="bg-primary-white rounded-xl transition-all duration-200 hover:scale-[1.03] cursor-pointer h-full p-6 shadow-soft hover:shadow-medium">
                     <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 mb-4 w-full">
                        <img
                          src={profile.image}
                          alt={`${profile.name} profile`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                     </div>
                    <div className="w-full text-left leading-tight">
                      <h3 className="font-medium text-lg mb-1 text-primary-blue">{profile.name}</h3>
                      <p className="font-normal text-base mb-1 text-primary-blue">{profile.role}</p>
                      <p className="font-normal text-base text-primary-gray">{profile.bio}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-11 md:h-11 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-primary-white/50 hover:bg-primary-white/70 backdrop-blur-sm shadow-soft"
              aria-label="Previous slide"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-primary-black"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-11 md:h-11 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 bg-primary-white/50 hover:bg-primary-white/70 backdrop-blur-sm shadow-soft"
              aria-label="Next slide"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-primary-black"
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