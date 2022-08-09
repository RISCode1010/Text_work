// import photo from './p2.png';
import "./p1.css";
import "./about.css";
import "./contact.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import React from "react";
// import { Switch ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Content /> */}
        
          <Routes>
            <Route path="/*" element={<Content />} />
            <Route path="about/*" element={<About />} />
            <Route path="Contact/*" element={<Contact />} />
          </Routes> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
