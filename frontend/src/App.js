import React, { useEffect } from 'react';
import './App.css';
import { portfolioData } from './mock';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-slate-900">
      <Header personalInfo={portfolioData.personalInfo} />
      <Hero personalInfo={portfolioData.personalInfo} />
      <About about={portfolioData.about} />
      <Experience experience={portfolioData.experience} />
      <TechStack technologies={portfolioData.technologies} />
      <Projects projects={portfolioData.projects} />
      <Contact personalInfo={portfolioData.personalInfo} />
      <Footer personalInfo={portfolioData.personalInfo} />
      <Toaster />
    </div>
  );
}

export default App;