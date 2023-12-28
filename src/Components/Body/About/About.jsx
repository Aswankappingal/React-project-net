import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div>
      <section className="about-us">
        <div className="about">
          <div className="text">
            <h2>About Us</h2>
            <h5>Back-end Developer & <span>Designer</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
            <div className="data">
              <a href="#" className="hire">More Info</a>
            </div>
          </div>
        </div>
      </section>


  <div className="third-main-background">
      <div className="full-data-king">
        <div className="row">
          <div className="col-lg-0">
           
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 data-king">
            <h4>Want to contact us?</h4>
            <p>Connect with our friendly community on About-Us, a chat and networking platform or <a href="">send us an email.</a></p>
            <div className="button-only">
              <button id="button-sec">Show More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="king-down-para">
        <p>If you want to give back to our community, you can do so by contributing to our open source projects, or by supporting us financially.</p>
        <button id="button-id-only">Contribute</button>
        <button id="button-id-only">Dontate</button>
      </div>
  </div>
      
    </div>
  )
}

export default About
