import { Link } from 'react-router-dom';
import heroImage from '../assets/website-images/hero.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-container">
        <div className="hero-text">
          <h2>Unveil Your Natural Glow with Superfood Skincare</h2>
          <p>
            We offer a harmonious blend of nature and innovation, featuring a
            luxurious range of skincare products infused with powerful
            superfoods. From nourishing cleansers and revitalizing eye care to
            advanced anti-aging devices, KAMEA is dedicated to enhancing your
            beauty and well-being. Experience the ultimate in skincare and let
            your radiance shine through with our holistic treatments.
          </p>
          <Link to="/treatments" className="btn">
            <span>Explore Treatments</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
