import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUpCircle } from "react-icons/fi";
import ScrollAnimation from 'react-animate-on-scroll'; 

function Lake({lake, onLake, showLakeDesc}) {

 
    return (
        <div id='lake'>
      
         {lake && <div className="lake">
                <button onClick={onLake} className='ex-btn'>
                    <FiArrowUpCircle className='back-icon'/>
                </button>

                <div className="Area"> 

                <ul className="cards">
                    
                <li>
                <ScrollAnimation animateIn='zoomIn' duration={1}>
                    <div className='card_'> 

                    <img src={require("./image/lugano.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">          
                        <div className="card__header-text">
                            <h3 className="card__title">Lugano</h3> 
                        </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="readmore">
                        <Link to="lugano" spy={true} smooth={true} hashSpy={true} onClick={showLakeDesc} className='btnmore'>Read More</Link>
                        </div>
                   
                    </div>
                    </div>  
                    </ScrollAnimation>    
                </li>

                <li>
                <ScrollAnimation animateIn='zoomIn' duration={1.5}>
                    <div className='card_'>
                    <img src={require("./image/lake1.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">          
                        <div className="card__header-text">
                            <h3 className="card__title">Lake</h3>    
                        </div>
                        </div>
                        <p className="card__description">Lorem ipsum dolor sit amet consectetur.</p>
                        <div className="readmore"><a href='' className="btnmore"> Read More</a></div>
                    </div>
                    </div>
                </ScrollAnimation>   
                </li>

                <li>
                <ScrollAnimation animateIn='zoomIn' duration={2}>
                    <div className="card_">
                    <img src={require("./image/lake2.jpg")} className="card__image" alt="" />
                    <div className="card__overlay">
                        <div className="card__header">            
                        <div className="card__header-text">
                            <h3 className="card__title">Lake</h3>   
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
            </div> }
        </div>
    );
}

export default Lake;