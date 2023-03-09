import React from 'react';
import "./styles/style.css";
import Profile1 from "./icons_assets/profile1.jpg";
import Profile2 from "./icons_assets/profile2.jpg";
import Profile3 from "./icons_assets/profile3.jpg";

const Testimonial = () => {
    return (
        <>
        <div className="testimonialheader">
            <div className="leftbox white"><h1>Testimonials</h1></div>
            <div className="rightbox"></div>
        </div>
        <div className="testimonials">
            <div className="box1">
                <div className="testprofile">
                    <div className="profileimg"><img src = { Profile1 } alt = "Profile" className="profileimg"/></div>
                    <div className="profiledesc">
                        <h2>Chloe M.</h2>
                        <p>Rating: 5/5 Stars</p>
                    </div>
                </div>
                <div className="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
            <div className="box2">
                <div className="testprofile">
                    <div className="profileimg"><img src = { Profile2 } alt = "Profile" className="profileimg"/></div>
                    <div className="profiledesc">
                        <h2>Kernan F.</h2>
                        <p>Rating: 4.5/5 Stars</p>
                    </div>
                </div>
                <div className="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
            <div className="box3">
                <div className="testprofile">
                    <div className="profileimg"><img src = { Profile3 } alt = "Profile" className="profileimg"/></div>
                    <div className="profiledesc">
                        <h2>Bella K.</h2>
                        <p>Rating: 5/5 Stars</p>
                    </div>
                </div>
                <div className="testquote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</div>
            </div>
        </div>
        </>
    )
  }

  export default Testimonial