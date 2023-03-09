import React from 'react';
import "./styles/style.css";
import Heroimg from "./icons_assets/restaurantchefB.jpg";
import { Outlet, Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
        <div className="hero">
            <div className="leftbox">
                <div className="titlecard yellow">
                  <h1>Little Lemon</h1>
                </div>
                <div className="herodesc white">
                    <p>Chicago</p>
                    <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern twist.</p>
                    <button class="btnyellow black"><Link to="/booking">Reserve a Table</Link></button>
                </div>
            </div>
            <div className="rightbox">
                <img src = { Heroimg } alt = "Hero" className="heroimg"/>
            </div>
        </div>

        <Outlet />
        </>
    )
  }

  export default Hero