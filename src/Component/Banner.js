import React from 'react';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import './Banner.css';

function Banner({ExploreClick}) {

  return (
    <div id='banner' >

        <div className='banner-content'>
        <div className='banner-container'>

            <div className='banner-text'>
              
                <ScrollAnimation animateIn='fadeInLeft' duration={1} >
                  <h2>Wonderful Nature</h2>

                  <p>
                  Discover The Best Camps
                  On Switerland</p> 

                <Link to='explore' spy={true} smooth={true} duration={500}  hashSpy={true} className='btn'>
                  Explore
                </Link>
                </ScrollAnimation>

            </div>
        </div>
        </div>
    
        <div className='banner-bg'></div>

    </div>
  );
}

export default Banner;


