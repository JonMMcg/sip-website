import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureTrioSection from './components/FeatureTrioSection';
import ProfileCarousel from './components/ProfileCarousel';
import SplitContentSection from './components/SplitContentSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureTrioSection />
      <ProfileCarousel />
      <SplitContentSection />
    </main>
  );
};

export default HomePage;