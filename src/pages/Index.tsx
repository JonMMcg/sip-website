import Navigation from "../components/Navigation";
import HomePage from "../features/home/homePage";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HomePage />
      <NewsletterSignup />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;