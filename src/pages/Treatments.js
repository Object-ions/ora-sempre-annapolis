import { Link } from 'react-router-dom';
import microderm from '../assets/website-images/microderm.jpg';
import bluelight from '../assets/website-images/blue-light.jpg';
import redlight from '../assets/website-images/red-light.jpg';
import microneedle from '../assets/website-images/microneedle.jpg';

const Treatments = () => {
  const products = [
    {
      id: 1,
      link: '/collection/noni/Ra55FMxK5TK9v1Df9tRj',
      imageUrl: microderm,
      title: 'Deep Cleaning with Diamond Microdermabrasion',
      subtitle: 'EXFOLIATING AND CLARIFYING',
      description:
        'Our Diamond Microdermabrasion Facial is a gentle, non-invasive exfoliating treatment that encourages new cell growth and clears clogged pores. It helps reduce acne scars and balances skin tone. By stimulating collagen production, it enhances your complexion, leaving your skin brighter and more youthful.',
      price: '$159',
    },
    {
      id: 2,
      link: '/collection/noni/pu2U3aCanEZzaMcz8QpR',
      imageUrl: microneedle,
      title: 'Microneedling',
      subtitle: 'SKIN REJUVENATION',
      description:
        'Our Microneedling Rejuvenation Facial reduces the appearance of scars, including acne scars, and smooths fine lines and wrinkles. It addresses enlarged pores, evens skin tone, and tackles hyperpigmentation and dark spots. Enjoy improved skin elasticity and a smoother texture with this advanced treatment.',
      price: '$359',
    },
    {
      id: 3,
      link: '/collection/noni/CQxcXtGOaTKrWk3GIKBo',
      imageUrl: bluelight,
      title: 'Deep Cleaning with Blue Light Therapy',
      subtitle: 'SOOTHING AND PURIFYING',
      description:
        'Unwind with our Deep Cleansing Facial, which includes a calming massage and precise extractions. This all-inclusive treatment deeply purifies your skin, while our exclusive Zahav mask enhances your facial experience and delivers even better results.',
      price: '$259',
    },
    {
      id: 4,
      link: '/collection/noni/pu2U3aCanEZzaMcz8QpR',
      imageUrl: redlight,
      title: 'Anti-Aging with Red Light',
      subtitle: 'LIFTING AND FIRMING',
      description:
        'Our nonsurgical facelift is crafted to lift sagging skin and stimulate collagen production. This cutting-edge treatment reduces acne scars and improves blood circulation, giving your skin a healthier glow. Enjoy a youthful look without the recovery time of traditional surgery.',
      price: '$259',
    },
  ];

  return (
    <div className="collections">
      <h2>Our Facial Treatments</h2>
      <div className="collections-container">
        {products.map((product) => (
          <Link to={product.link} key={product.id}>
            <div
              className="collections-card"
              style={{ background: `url(${product.imageUrl}) no-repeat center/cover` }}
            >
              <div className="collections-text">
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
