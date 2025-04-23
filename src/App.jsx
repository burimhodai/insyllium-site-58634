import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const App = () => {
  const styles = {
    app: {
      fontFamily: 'sans-serif',
      lineHeight: 1.6,
      color: '#333',
    },
    header: {
      backgroundColor: '#fff',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#205781',
    },
    ctaButton: {
      backgroundColor: '#205781',
      color: '#fff',
      padding: '0.75rem 1.5rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    hero: {
      backgroundColor: '#F6F8D5',
      padding: '5rem 0',
      textAlign: 'center',
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px',
    },
    heroHeadline: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#205781',
    },
    heroSubheadline: {
      fontSize: '1.2rem',
      color: '#4F959D',
      marginBottom: '2rem',
    },
    features: {
      padding: '4rem 0',
      backgroundColor: '#fff',
    },
    featuresContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '0 20px',
    },
    featureItem: {
      textAlign: 'center',
      padding: '1.5rem',
      border: '1px solid #eee',
      borderRadius: '5px',
    },
    featureIcon: {
      fontSize: '2rem',
      color: '#4F959D',
      marginBottom: '1rem',
    },
    featureText: {
      fontSize: '1rem',
    },
    testimonials: {
      backgroundColor: '#F6F8D5',
      padding: '4rem 0',
      textAlign: 'center',
    },
    testimonialContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    testimonialLogos: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    testimonialLogo: {
      maxWidth: '150px',
      height: 'auto',
      opacity: 0.7,
    },
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '3rem 0',
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      gap: '1rem',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: {
      color: '#fff',
      fontSize: '1.5rem',
    },
    contactInfo: {
      textAlign: 'right',
    },
    '@media (max-width: 768px)': {
      heroHeadline: {
        fontSize: '2.5rem',
      },
      footerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
      contactInfo: {
        textAlign: 'center',
      },
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>Luxury Landing</div>
          <button style={styles.ctaButton}>Get Started</button>
        </nav>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroHeadline}>Experience the Ultimate Luxury</h1>
            <p style={styles.heroSubheadline}>
              Indulge in a world of unparalleled comfort and sophistication. Discover exclusive experiences tailored just for you.
            </p>
            <button style={styles.ctaButton}>Explore Now</button>
          </div>
        </section>

        <section style={styles.features}>
          <div style={styles.featuresContainer}>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>💎</div>
              <p style={styles.featureText}>Exclusive Access</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🌟</div>
              <p style={styles.featureText}>Unmatched Quality</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>✨</div>
              <p style={styles.featureText}>Personalized Service</p>
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureIcon}>🏆</div>
              <p style={styles.featureText}>Award-Winning</p>
            </div>
          </div>
        </section>

        <section style={styles.testimonials}>
          <div style={styles.testimonialContainer}>
            <h2>Trusted by Leading Brands</h2>
            <div style={styles.testimonialLogos}>
              <img src="https://via.placeholder.com/150" alt="Logo 1" style={styles.testimonialLogo} />
              <img src="https://via.placeholder.com/150" alt="Logo 2" style={styles.testimonialLogo} />
              <img src="https://via.placeholder.com/150" alt="Logo 3" style={styles.testimonialLogo} />
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <ul style={styles.footerLinks}>
              <li><a href="#" style={styles.footerLink}>About</a></li>
              <li><a href="#" style={styles.footerLink}>Services</a></li>
              <li><a href="#" style={styles.footerLink}>Contact</a></li>
            </ul>
          </div>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.socialIcon}><FaFacebook /></a>
            <a href="#" style={styles.socialIcon}><FaTwitter /></a>
            <a href="#" style={styles.socialIcon}><FaInstagram /></a>
          </div>
          <div style={styles.contactInfo}>
            <p>Email: info@luxurylanding.com</p>
            <p>Phone: +1 555-123-4567</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;