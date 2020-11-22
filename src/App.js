import React from 'react';
import './App.css';
import Work from './Work';
import Who from './Who';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <h1>Logo</h1>
      <ul>
        <li><a href="#work">WORK</a></li>
        <li><a href="#who">WHO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <a href="#work">Demo@logo.com</a>
    </div>
    <h1 className="mainText">GOOD LISTENERS</h1>

    <h1 className="secondText"> We create Digital Experience</h1>
    
    <div id="work">
    <Work />
    </div>
    <div id="who">
      <Who/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
   
    </div>
  );
}

export default App;
