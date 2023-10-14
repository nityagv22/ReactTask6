
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
     
      <Projects />
      <Resume/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
