import { Button } from "@/components/ui/button";
import UpRightArrow from "@/components/ui/up-right-arrow";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 px-6 bg-accent-warm">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-8">
          Download
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get the Sip app and start connecting with experts, asking questions, and sharing your knowledge today.
        </p>
        <div className="flex justify-center">
          <Button variant="cta" className="h-auto">
            Get Started
            <UpRightArrow />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          Coming soon to App Store and Google Play
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;