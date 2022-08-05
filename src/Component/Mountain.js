import React from 'react';
import "./Mountain.css";
import { Link } from 'react-scroll';
import { FiArrowUpCircle } from "react-icons/fi";
import ScrollAnimation from 'react-animate-on-scroll'; 


function Mountain({onMountain, mountain, showMountainandDesc}) {

    return (
        <div id='mountain'>
        
        {mountain && <div className='mountain'>
            
        <button onClick={onMountain} className='ex-btn'>
        <FiArrowUpCircle className='back-icon'/>
        </button>
            <div className="Area"> 

                <ul className="cards">
                    
                <li>
                <ScrollAnimation animateIn='zoomIn' duration={0.9}>
                    <div className='card_'> 

                    <img src={require("./image/arolla1.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">          
                        <div className="card__header-text">
                            <h3 className="card__title">Arolla</h3> 
                        </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="readmore">
                        <Link to='arolla' spy={true} smooth={true} duration={500}  hashSpy={true} onClick={showMountainandDesc} className='btnmore'>Read More</Link>
                        </div>
                   
                    </div>
                    </div>  
                    </ScrollAnimation>    
                </li>

                <li>
                <ScrollAnimation animateIn='zoomIn' duration={1.5}>
                    <div className='card_'>
                    <img src={require("./image/mountain1.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">          
                        <div className="card__header-text">
                            <h3 className="card__title">Mountain</h3>    
                        </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="readmore"><a href='' className='btnmore' > Read More</a></div>
                    </div>
                    </div>   
                </ScrollAnimation>   
                </li>

                <li>
                <ScrollAnimation animateIn='zoomIn' duration={2}>
                    <div className="card_">
                    <img src={require("./image/mountain2.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">            
                        <div className="card__header-text">
                            <h3 className="card__title">Mountain</h3>   
                        </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="readmore"><a href='' className="btnmore"> Read More</a></div>
                    </div>
                    </div>
                </ScrollAnimation>
                </li> 

                </ul>
                </div>
            </div>}
        </div> 
    );
}

export default Mountain;
