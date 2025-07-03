//import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <img src={"images/repair cover.png"} alt="Full width banner" className="w-full h-[613px] object-cover"/>
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;