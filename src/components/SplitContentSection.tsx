const SplitContentSection = () => {
    return (
      <section className="w-full" style={{ backgroundColor: '#FFFBF0', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-xl lg:text-2xl font-medium leading-tight" style={{ color: '#002649', fontFamily: 'Lato, sans-serif' }}>
                Knowing Is the First Step to Achieving.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }}>
              <p className="text-base leading-relaxed" style={{ 
                color: '#002649', 
                fontFamily: 'Lato, sans-serif',
                textAlign: 'left',
                margin: 0,
                padding: 0
              }}>
                Our mission is to give everyone access to directly engage with others through the Ask Me Anything (AMA) format. By breaking down barriers between experiences, we empower individuals everywhere to turn curiosity into opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SplitContentSection;