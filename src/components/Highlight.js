import React from 'react';
import "./styles/style.css";
import Special1 from "./icons_assets/bruchetta.svg";
import Special2 from "./icons_assets/greeksalad.jpg";
import Special3 from "./icons_assets/lemondessert.jpg";
import { Outlet, Link } from 'react-router-dom';

const Highlight = () => {
    return (
        <>
        <div className="highheader black">
            <div className="leftbox"><h1>Highlights</h1></div>
            <div className="rightbox textright"><button class="btnorder gray"><Link to="/booking">Order Online</Link></button></div>
        </div>
        <div className="highlight">
        <div className="box1">
          <img src = { Special1 } alt = "Specials" className="special1"/>
          <div className="highlighttitle-container">
            <div className="dishtitle strong">Dish Name</div>
            <div className="dishprice">$10.99</div>
          </div>
          <div className="dishdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        </div>
        <div className="box2">
          <img src = { Special2 } alt = "Specials" className="special2"/>
          <div className="highlighttitle-container">
            <div className="dishtitle strong">Dish Name</div>
            <div className="dishprice">$10.99</div>
          </div>
          <div className="dishdesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        </div>
        <div className="box3">
          <img src = { Special3 } alt = "Specials" className="special3"/>
          <div className="highlighttitle-container">
          <div className="dishtitle strong">Dish Name</div>
          <div className="dishprice">$10.99</div>
          </div>
          <div className="dishdesc">Lorem ipsum dolord sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        </div>
      </div>
      </>
    )
  }

  export default Highlight