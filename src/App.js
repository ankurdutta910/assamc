import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  

} from "react-router-dom";

function App() {
  return (
    <>

  

  <Router >   
  <Navbar/>
    <Routes>
          <Route path="/assame/"  element={<Body/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="*"  element={<Error/>} />
            
       
      
    </Routes> 
    <Footer/>
  </Router>



    </>
  );
}

export default App;
