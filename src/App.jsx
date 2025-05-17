import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import VisionMission from './components/sections/VisionMission';
import AboutUs from './components/sections/AboutUs';
import OurFocus from './components/sections/OurFocus';
import TeamStructure from './components/sections/TeamStructure';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <VisionMission />
        <AboutUs />
        <OurFocus />
        <Services />
        <TeamStructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;