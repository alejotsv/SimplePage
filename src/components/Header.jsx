import React from 'react';
import logo from '../assets/react.png';

const Header = () => {
  return(
    <header className="header-container">
    <div className="header-div-container">
      <img className="img-logo" src={logo} alt="react logo" />
      <h2 className="header-title">ReactFacts</h2>
    </div>
    <h2 className="header-right">React course - Project 1</h2>
  </header>
  )
}

export default Header;