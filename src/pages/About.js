import aboutImage from '../assets/website-images/about.jpg';
const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-title">
          <h2>At KAMEA, we believe in the power of NATURAL beauty</h2>
          <p>
            KAMEA in Santa Fe offers premium, non-surgical, non-invasive,
            anti-aging solutions with superfoods and NASA-developed red and
            infrared light therapy.
          </p>
        </div>
        <div
          className="about-image"
          style={{ background: `url(${aboutImage})` }}
        ></div>
      </div>

      <div className="about-text">
        <h2>Radiant, Youthful Skin.</h2>
        <p>
          At KAMEA, located in the heart of Santa Fe, we believe in the
          transformative power of nature. Our skincare products are meticulously
          crafted using potent superfoods known for their rejuvenating
          properties.
        </p>
        <p>
          Whether you are seeking to cleanse, exfoliate, or deeply nourish your
          skin, our range of products, including cleansers, eye care,
          exfoliants, masks, moisturizers, serums, and advanced anti-aging
          devices, cater to all your skincare needs. Our holistic approach
          blends the best of nature and science, ensuring that each treatment
          not only enhances your natural beauty but also promotes overall
          well-being.
        </p>

        <p>
          Our signature non-surgical face lift and neck lift treatments utilize
          NASA-developed red and infrared light therapy, proven to be highly
          effective for skin rejuvenation, lifting, and firming. Experience
          noticeable results soon after treatment. For every purchase of $600,
          we offer a free consultation to personalize your skincare journey.
          Embrace a healthier, more youthful glow with KAMEA's expertly
          formulated products and treatments.
        </p>
        <h4 style={{ textAlign: 'center' }}>
          {' '}
          Schedule your appointment today!
        </h4>
      </div>
    </div>
  );
};

export default About;
