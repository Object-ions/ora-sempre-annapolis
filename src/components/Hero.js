import { Link } from 'react-router-dom';
import heroVideo from '../assets/videos/hero_video.mov';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
