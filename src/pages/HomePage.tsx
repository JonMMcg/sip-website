import React from 'react';

function HomePage() {
  return (
    <div className="sip-website">
      {/* Header/Navigation */}
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-brand">
            <img src="/logo.png" alt="Sip" className="nav-logo" />
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#team" className="nav-link">Team</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="download-btn">Download Sip</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Sip with Purpose
            </h1>
            <p className="hero-subtitle">
              Connect with nearby coffee shops and fellow coffee enthusiasts while making a positive impact on your community.
            </p>
            <div className="hero-buttons">
              <button className="primary-btn">Download Now</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-phone.png" alt="Sip App" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☕</div>
              <h3>Discover Local Coffee</h3>
              <p>Find the best coffee shops in your area with personalized recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Connect with Community</h3>
              <p>Meet fellow coffee lovers and build meaningful connections over your favorite brew.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Support Local Businesses</h3>
              <p>Help local coffee shops thrive while enjoying exclusive deals and rewards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/team-member-1.jpg" alt="Team Member" className="team-photo" />
              <h3>Jonathan McGuire</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/team-member-2.jpg" alt="Team Member" className="team-photo" />
              <h3>Sarah Johnson</h3>
              <p>Head of Design</p>
            </div>
            <div className="team-member">
              <img src="/team-member-3.jpg" alt="Team Member" className="team-photo" />
              <h3>Mike Chen</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              We believe that coffee is more than just a beverage—it's a catalyst for community building and social connection. 
              Our mission is to create meaningful relationships between coffee lovers while supporting local businesses that 
              make our communities vibrant and unique.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Get the latest news and updates about Sip</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/logo.png" alt="Sip" className="footer-logo" />
              <p>Connecting coffee lovers everywhere</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#download">Download</a>
                <a href="#support">Support</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#team">Team</a>
                <a href="#careers">Careers</a>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#twitter">Twitter</a>
                <a href="#instagram">Instagram</a>
                <a href="#facebook">Facebook</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Sip. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
