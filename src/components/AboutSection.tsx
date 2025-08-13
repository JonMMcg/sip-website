const AboutSection = () => {
    const statements = [
      "Real Questions. Real Answers.",
      "Always On. Always Here.",
      "Tell Your Story."
    ];
  
    return (
      <section id="about" className="py-20 px-6 bg-accent-warm">
        <div className="container mx-auto text-center space-y-12">
          {statements.map((statement, index) => (
            <div key={index} className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground leading-tight">
                {statement}
              </h2>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AboutSection;