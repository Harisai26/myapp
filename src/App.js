import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// The App component acts as the main container for our website.
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;