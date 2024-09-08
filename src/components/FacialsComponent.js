import { Link } from 'react-router-dom';
import microderm from '../assets/website-images/microderm.jpg';
import bluelight from '../assets/website-images/blue-light.jpg';
import redlight from '../assets/website-images/red-light.jpg';
import microneedle from '../assets/website-images/microneedle.jpg';

import './FacialsComponent.scss';

const FacialsComponent = () => {

  const products = [
    {
      id: 1,
      link: '/collection/noni/Ra55FMxK5TK9v1Df9tRj',
      imageUrl:
        microderm,
      title: 'Deep Cleaning with Diamond Microdermabrasion',
      description: 'Our Diamond Microdermabrasion Facial is a gentle, non-invasive exfoliating treatment that encourages new cell growth and clears clogged pores. It helps reduce acne scars and balances skin tone. By stimulating collagen production, it enhances your complexion, leaving your skin brighter and more youthful.',
      price: '$159',
    },
    {
      id: 2,
      link: '/collection/noni/pu2U3aCanEZzaMcz8QpR',
      imageUrl:
        microneedle,
      title: 'Microneedling',
      description: 'Our Microneedling Rejuvenation Facial reduces the appearance of scars, including acne scars, and smooths fine lines and wrinkles. It addresses enlarged pores, evens skin tone, and tackles hyperpigmentation and dark spots. Enjoy improved skin elasticity and a smoother texture with this advanced treatment, delivering a youthful and refreshed look.',
      price: '$359',
    },
    {
      id: 3,
      link: '/collection/noni/CQxcXtGOaTKrWk3GIKBo',
      imageUrl:
        bluelight,
      title: 'Deep Cleaning with Blue Light Therapy',
      description:
        'Unwind with our Deep Cleansing Facial, which includes a calming massage and precise extractions. This all-inclusive treatment deeply purifies your skin, while our exclusive Zahav mask enhances your facial experience and delivers even better results.',
      price: '$259',
    },
    {
      id: 4,
      link: '/collection/noni/pu2U3aCanEZzaMcz8QpR',
      imageUrl:
        redlight,
      title: 'Anti-Aging with Red Light',
      description: 'Our nonsurgical facelift is crafted to lift sagging skin and stimulate collagen production. This cutting-edge treatment reduces acne scars and improves blood circulation, giving your skin a healthier glow. You\'\ll enjoy a noticeably more youthful look without the recovery time of traditional surgery. Ideal for skin rejuvenation, this facelift offers a lasting, visible transformation.',
      price: '$259',
    },
  ];

  return (
    <div className="best-facials">
    <h2>Our Facials</h2>
    <div className="best-facials-container">
      {products.map((product, index) => {
        return (
          <Link to={product.link} key={product.id}>
            <div className="best-facials-card">
              <div className="image-wrapper">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <hr />
              <p>{product.description}</p>
             
            </div>
          </Link>
        );
      })}
      <Link to="/collections" className="btn">
        Book Your Facial
      </Link>
    </div>
  </div>
  );
};

export default FacialsComponent;
