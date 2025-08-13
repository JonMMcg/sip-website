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
        <section className="w-full" style={{ backgroundColor: '#FCFCEE' }}>
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6" style={{ color: '#00061A' }}>
                  Contact Us
                </h1>
                <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#002649' }}>
                  Have questions, feedback, or want to get in touch? We'd love to hear from you.
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
                      style={{ color: '#002649' }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                      style={{ backgroundColor: '#FFFFFF' }}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium mb-2" 
                      style={{ color: '#002649' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base"
                      style={{ backgroundColor: '#FFFFFF' }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Feedback and Questions Field */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium mb-2" 
                      style={{ color: '#002649' }}
                    >
                      Feedback and Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base resize-vertical"
                      style={{ backgroundColor: '#FFFFFF' }}
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-medium rounded-lg px-6 py-3 transition-all duration-200 ease-out hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-base"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-16 text-center">
                <div className="max-w-xl mx-auto space-y-4">
                  <h3 className="text-xl font-medium" style={{ color: '#00061A' }}>
                    Other Ways to Reach Us
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#002649' }}>
                    You can also find us on social media or reach out through our community channels.
                  </p>
                  <div className="flex justify-center space-x-6 pt-4">
                    <a
                      href="https://www.instagram.com/sipthatpipinghottea/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/sip-inc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/sip_scribe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      X (Twitter)
                    </a>
                  </div>
                </div>
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