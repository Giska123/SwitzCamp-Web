import React from 'react';
import { Element } from 'react-scroll';
 import { Link } from 'react-router-dom';
import './CampArea.css'

function CampArea() {

  return (
    <Element name="campArea">

    <div className='camp'>

        <div className='areas-container'>
        
                <div className='areas-text'>
                    <h2>Camp Area</h2>
                    <p>Where would you like to go?</p>
                </div>

                <div className='areas-img'>
                        
                    <div className='areas areas-camp1'>
                        <Link to="/mountain"><span>mountain</span></Link>     
                    </div>

                    <div className='areas areas-camp2'>
                        <Link to="/mountain"><span>mountain</span></Link>
                    </div>

                </div>
        </div>
    
    </div>

    </Element>
  )
}

export default CampArea