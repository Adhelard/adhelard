import React from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import Hero from '../components/Hero'; // Import Hero section
import AboutBrief from '../components/AboutBrief'; // Import About (Brief) section
import FeaturedProjects from '../components/FeaturedProjects'; // Import Featured Projects
import Skills from '../components/Skills'; // Import Skills section
import CTA from '../components/CTA'; // Import CTA section
import Footer from '../components/Footer'; // Import global Footer

const Home = () => {
  return (
    <div className="relative">
      {/* Global Navbar (appears on all pages) */}
      <Navbar />
      
      {/* Stacked sections for Home page */}
      <Hero />
      <AboutBrief />
      <FeaturedProjects />
      <Skills />
      <CTA />
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Home;