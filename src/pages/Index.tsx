import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeatureTrioSection from "../components/ui/FeatureTrioSection";
import ProfileCarousel from "../components/ProfileCarousel";
import SplitContentSection from "../components/SplitContentSection";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
      <HeroSection />
      <FeatureTrioSection />
        <ProfileCarousel />
        <SplitContentSection />
      </main>
      <NewsletterSignup />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;