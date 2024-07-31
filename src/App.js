import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import SignUp from './pages/SignUp';



const App = () => {
  return (
    <Router>
      
        <Header/>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
         
         
         
        </Routes>
        <Footer />
        </Router>
      
    
  );
};

export default App;
