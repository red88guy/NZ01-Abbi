import React from 'react'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";


const App = () => {
    return (
      <div className = "App">
        <Header/>
        <About />
        <Projects />
      </div>

    );
};

export default App;