import treatmentsImage from '../assets/website-images/skincare-routine.png';
const Treatments = () => {
  return (
    <div className="treatments-page">
      <div className="treatments-container">
        <div
          className="treatments-image"
          style={{ background: `url(${treatmentsImage})` }}
        ></div>
      </div>

      <div className="treatments-text">
        <h2>Treat Yourself!</h2>
        <p>
          At KAMEA, we are pleased to offer an exclusive complimentary
          consultation and demonstration for clients who indulge in purchases
          exceeding $500. This personalized session allows clients to experience
          our non-surgical facelift, a bespoke blend of masks, serums, and
          creams meticulously crafted to address individual skin concerns such
          as redness, wrinkles, dullness, dryness, and more.
        </p>
        <p>
          Utilizing cutting-edge, dermatologist-recommended, and FDA-cleared
          medical devices, we provide advanced treatments designed to lift,
          tighten, and firm the skin. Our approach encompasses three key
          pathways: protecting the skin, moisturizing and preventing damage, and
          actively repairing and rejuvenating.
        </p>

        <p>
          We invite our esteemed clients to discover a tailored skincare regimen
          and innovative technological treatments perfectly suited to their
          unique needs, ensuring radiant, youthful, and revitalized skin.
        </p>
        <h4 style={{ textAlign: 'center' }}>
          {' '}
          Schedule your appointment today!
        </h4>
      </div>
    </div>
  );
};

export default Treatments;
