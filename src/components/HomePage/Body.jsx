import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import CallToAction from './CallToAction';
import PropertyHighlights from './PropertyHighlights';
import SearchSection from './SearchSection';
import Footer from './Footer';
import images from '../assets/images';
import useHome from './useHome';

const Body = () => {
  const { searchProperties } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <AboutUs />
      <PropertyHighlights />
      <SearchSection onSearch={searchProperties} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;