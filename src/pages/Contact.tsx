import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        variant="download" 
        logoSrc="https://firebasestorage.googleapis.com/v0/b/sip-usa-1727017189711.firebasestorage.app/o/email_assets%2FSip%20Logo.png?alt=media&token=7d529b14-c958-471e-84dc-6636f5e4769a"
      />
      
      <main className="pt-20">
        <section className="w-full bg-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#002649', fontFamily: 'Lato, sans-serif' }}>
                  Use the form below to send us your comments. We read all feedback carefully, and we will strive to respond within 48 hours. If you provide your email address, you agree that we may contact you to better understand the comments you submitted.
                </p>
              </div>

              {/* Contact Form */}
              <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium mb-2" 
                      style={{ color: '#002649', fontFamily: 'Lato, sans-serif' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2" 
                      style={{ color: '#002649', fontFamily: 'Lato, sans-serif' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Feedback and Questions Field */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2" 
                      style={{ color: '#002649', fontFamily: 'Lato, sans-serif' }}
                    >
                      Feedback and Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base resize-vertical"
                      style={{ backgroundColor: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-auto text-white font-semibold px-10 py-3 transition-all duration-200 ease-out hover:shadow-lg focus:ring-2 focus:ring-offset-2 text-base mx-auto block"
                      style={{ 
                        backgroundColor: '#ED0942',
                        borderRadius: '10px',
                        fontFamily: 'Lato, sans-serif'
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;