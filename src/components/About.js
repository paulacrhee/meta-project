import React from 'react';
import "./styles/style.css";
import Picunder from "./icons_assets/aboutunder.jpg";
import Picover from "./icons_assets/aboutover.jpg";

const About = () => {
    return (
      <>
        <div className="about">
        <div className="leftbox paddingtop">
                <div className="titlecard black">
                  <h1>Little Lemon</h1>
                </div>
                <div className="herodesc black">
                    <p>Chicago</p>
                    <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern twist.</p>
                </div>
            </div>
            <div className="rightbox">
                <div className="images-container">
                    <div className="aboutimg">
                        <img src = { Picunder } alt = "About" className="aboutimg aboutbg"/>
                    </div>
                    <div className="aboutimg">
                        <img src = { Picover } alt = "About" className="aboutimg"/>
                    </div>
                </div>
                
            </div>
        </div>
      </>
    )
  }

  export default About