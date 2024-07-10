import React from 'react';
import Loginform from './components/loginform';
import Priracy from './components/priracy';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar';
import "./components/App.css"

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/priracy" element={<Priracy />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/loginform" element={<Loginform/>}/>
          <Route path="/contact" element={<Contact />}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
