const SplitContentSection = () => {
    return (
      <section className="w-full" style={{ backgroundColor: '#FFF6D8', paddingTop: '152px', paddingBottom: '152px' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                Knowing Is the First Step to Achieving.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to give everyone access to directly engage with others through the Ask Me Anything (AMA) format. By breaking down barriers between experiences, we empower individuals everywhere to turn curiosity into opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SplitContentSection;