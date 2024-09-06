import { Link } from 'react-router-dom';
import heroImage from '../assets/website-images/hero.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-container">
        <div className="hero-text">
          <h2>Rejuvenate Your Skin with Timeless Beauty</h2>
          <p>
          Experience the power of advanced anti-aging facials and superfood-infused skincare. At Ora Sempre, we help you rediscover youthful radiance and confidence with personalized treatments designed to nourish and renew.
          </p>
          <Link to="/treatments" className="btn">
            <span>Book Your Facial</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
