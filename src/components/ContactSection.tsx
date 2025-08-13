
const NewsletterSection = () => {
  return (
    <section id="newsletter" className="w-full" style={{ backgroundColor: '#FCFCEE' }}>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4" style={{ color: '#00061A' }}>
              Get the latest news and updates
            </h2>
            <p className="text-sm" style={{ color: '#666666' }}>
              * indicates required
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              {/* Email Field */}
              <div className="text-left">
                <label 
                  htmlFor="newsletter-email" 
                  className="block text-sm font-medium mb-2" 
                  style={{ color: '#002649' }}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                  style={{ backgroundColor: '#FFFFFF' }}
                  placeholder="your.email@example.com"
                />
              </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-red-600 text-white font-medium rounded-lg px-8 py-3 transition-all duration-200 ease-out hover:bg-red-700 hover:shadow-lg focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base"
              >
                Subscribe
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;