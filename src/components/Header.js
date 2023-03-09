import React from 'react';
import Logo from "./icons_assets/logo.jpg";
import "./styles/style.css";

const Header = () => {
    return (
      <header>
        <img src = { Logo } alt = "Little Lemon logo" className="logo"/>
      </header>
    )
  }

  export default Header