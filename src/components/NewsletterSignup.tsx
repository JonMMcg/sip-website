import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "../hooks/use-toast";
import UpRightArrow from "./ui/up-right-arrow";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate newsletter signup (replace with actual Mailchimp integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-xl md:text-2xl font-medium mb-8 text-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
          Get latest news and updates
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="space-y-4">
            <div className="text-left">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                disabled={isLoading}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-auto text-white font-semibold px-8 py-3 transition-all duration-200 ease-out hover:shadow-lg focus:ring-2 focus:ring-offset-2"
              style={{ 
                backgroundColor: '#ED0942',
                borderRadius: '10px',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;