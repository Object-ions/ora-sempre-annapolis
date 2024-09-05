import Hero from '../components/Hero';
import SecondInformative from '../components/SecondInformative';
import TechnologySection from '../components/TechnologySection';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <TechnologySection />
      <SecondInformative />
    </div>
  );
};

export default Home;
