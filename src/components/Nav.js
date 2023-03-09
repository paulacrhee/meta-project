import React from 'react';
import './styles/style.css';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
    return (
      <>
      <nav>
        <ul>
          <li className="horinav black"><Link to="/">Home </Link></li>
          <li className="horinav black"><Link to="/">About </Link></li>
          <li className="horinav black"><Link to="/">Menu </Link></li>
          <li className="horinav black"><Link to="/booking">Reservations </Link></li>
          <li className="horinav black"><Link to="/">Order Online </Link></li>
          <li className="horinav black"><Link to="/">Login </Link></li>
        </ul>
      </nav>

      <Outlet />
      </>
    )
  }

  export default Nav