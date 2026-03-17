import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import About from './About';
import Home from './Home'; // This will work now that the file exists!
import './App.css';
import Contact from './Contact'; 
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element ={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;