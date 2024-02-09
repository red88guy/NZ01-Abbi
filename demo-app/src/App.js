import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';

const App = () => {
    return (
      <div className = "App">
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
            {/* This code from the above will go back to the landing page if the wrong subaddress is typed in.. */}
          </Routes>
          <Footer />
        </Router>
      </div>

    );
};

export default App;