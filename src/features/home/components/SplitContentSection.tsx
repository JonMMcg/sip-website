const SplitContentSection = () => {
    return (
      <section className="w-full bg-secondary-yellow py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-tight text-primary-blue">
                Knowing Is the First Step to Achieving.
              </h2>
            </div>
            <div className="flex flex-col justify-start flex-shrink-0">
              <p className="text-base leading-relaxed text-primary-blue m-0 p-0 text-left">
                Our mission is to give everyone access to directly engage with others through the Ask Me Anything (AMA) format. By breaking down barriers between experiences, we empower individuals everywhere to turn curiosity into opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SplitContentSection;