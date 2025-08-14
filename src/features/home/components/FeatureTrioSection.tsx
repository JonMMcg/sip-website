const FeatureTrioSection = () => {
    const features = [
      {
        title: "Real Questions. Real Answers.",
        description: "Ask and get authentic answers from people with diverse stories and experiences."
      },
      {
        title: "Always On. Always Here.",
        description: "Engage with AMAs through text on your time — no missing out."
      },
      {
        title: "Tell Your Story.",
        description: "Host your AMA - You could change how someone sees the world."
      }
    ];
  
    return (
      <section className="w-full" style={{ backgroundColor: '#FFFBF0', paddingTop: '104px', paddingBottom: '104px' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <h3 className="text-lg md:text-xl font-medium leading-tight" style={{ color: '#0F0F0F' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#4B5563' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureTrioSection;