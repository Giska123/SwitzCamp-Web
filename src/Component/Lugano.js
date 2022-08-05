import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './Arolla.css';
import { Link } from 'react-scroll';
import { FaStar, FaCar, FaCaravan } from 'react-icons/fa';
import { HiWifi} from "react-icons/hi";
import { GiBarracksTent, GiWoodCabin } from 'react-icons/gi';
import { MdLocalLaundryService} from "react-icons/md";
import { AiFillShop} from "react-icons/ai";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill, BsCheck2, BsCheckCircle} from "react-icons/bs"; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Lugano({lakedesc, setLakedesc, inputField, inputsHandler, handleSubmit, success, setSuccess, isValid, btnRef}) {

  const [isActive, setActive] = useState(false);

  const next = () => {
    setActive(!isActive);
  };

  const animSlide = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 }  }
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
        }
      }, [control, inView]);


  return (
      <div id='lugano'>
  
      {lakedesc && <div className='MountainDesc'>
          <div className='MountainDesc-container'>
          
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={control}
            variants={animSlide}>
            <div className='MountainDesc-card'>
  
              <div className='MountainDesc-header'>
           
                <Carousel showStatus={false} showThumbs={false} swipeable={true} autoPlay={true} infiniteLoop={true}>
                  <img src={require("./image/lugano.jpg")} className='DescImg' alt=''/>
                  <img src={require("./image/lugano1.jpg")} className='DescImg' alt=''/>
                </Carousel>
       
               </div>
              
            <form onSubmit={handleSubmit}>
  
              <div className='MountainDesc-body'>
  
                <div className='Desc-title'>
                  <h2>Lugano Camp</h2>
                  <p>Lugano - Via alla Foce 14, 6933 Muzzano, Switzerland</p>
                </div>
  
                <div className='Desc-star'>
                  <h5>5.0</h5>
                    <div className='star'>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                      <span><FaStar /></span>
                    </div>
                </div>
  
                <div className='Desc-facility'>
                  <p>Facilities</p>
                    <div className='icon-facility'>
                      <div className='facility-1'><HiWifi /><span>Wifi</span></div>
                      <div className='facility-2'><FaCar /><span>Parking</span></div>
                      <div className='facility-3'><MdLocalLaundryService /><span>laundry</span></div>
                      <div className='facility-4'><AiFillShop /><span>Market</span></div>
                    </div>
                </div>

                <p className='desc-p'>What would you pick for rent?</p>
                  
                  <div className='Desc-card'>

                  
                    <div className='Desc-page1' style={{ display: (isActive ? 'none' : 'block') }}>
                    <div className='Desc-tent'>
                        <div className='tent-text' onChange={inputsHandler}>

                          <div className='icon-tent'>
                              <input type='radio' name='tent' value='Tent' id='tent' required/>                                                         
                              <label for='tent' className='tent-label'><GiBarracksTent className='tent_' /> Tent </label>
                              
                              <div className='price'>
                              <p> <BsCheck2 /> suitable for 2 person<br />
                              <BsCheck2 /> shared bathroom</p>
                                <input type='radio' name='price' value='98' id='price' required />
                                <label for='price'>choose this one</label>
                              
                              </div>
                          </div>

                          <div className='icon-tent'>
                                <input type='radio' name='tent' value='Caravan'/>
                                <label className='tent-label'><FaCaravan className='tent_' /> Caravan</label>

                              <div className='price'>
                              <p> <BsCheck2 /> suitable for 3 person<br />
                              <BsCheck2 /> shared bathroom<br/>
                              <BsCheck2 /> include 1 bed, BBQ facilities</p>
                                <input type='radio' name='price' value='160'/>
                                <label>choose this one</label>
                              </div>
                          </div>

                          <div className='icon-tent'>
                                <input type='radio' name='tent' value='Bungalow'/>
                                <label className='tent-label'><GiWoodCabin className='tent_'/> Bungalow</label>

                                <div className='price'>
                                <p> <BsCheck2 /> suitable for 4-6 person<br />
                                <BsCheck2 /> private bathroom<br/>
                                <BsCheck2 /> include 2 double bed, BBQ facilities</p> 
                                  <input type='radio' name='price' value='215'/>
                                  <label>choose this one</label>
                              </div>
                          </div>

                        </div>
                    </div>

                    <div className='Desc-next'>
                    <a onClick={next}><BsFillArrowRightSquareFill className='next-btn'/></a>
                    </div>

                    </div>

                
                 
                  <div className='Desc-page2' style={{ display: (isActive ? 'block' : 'none') }}>
                    <div className='Desc-guest'>
                    <p>Guest</p>
                        <input type="number" 
                        className="form__input" 
                        name="guest" 
                        onChange={inputsHandler} 
                        value={inputField.guest} 
                        placeholder="How many guest?" 
                        required />
                    </div>

                    <div className='Desc-date'>
                      <p>Date</p>
                      <div
                        className='datepick' 
                        onChange={inputsHandler} 
                        required>

                        <div className='dt-1'>
                        <span>Start date</span>
                          <input type="date" name="dateStart" placeholder="Start Date"  
                          value={inputField.dateStart} className='dates'></input>
                        </div>

                        <div className='dt-2'>
                        <span>End date</span>
                          <input type="date" name="dateEnd" placeholder="End Date" 
                          value={inputField.dateEnd} className='dates'></input>
                        </div>
                      </div>
                  
                    </div>

                    <div className='checkEnd'>
                    <label>
                    <input
                      type='checkbox'
                      name='title'
                      id='title' 
                      value='Lugano Camp'
                      onChange={inputsHandler}
                      required
                    /> 
                    i'm sure 
                    </label>
                    </div>

                    <div className='Desc-btn'>
                      <button 
                      ref={btnRef}
                      type="submit"
                      disabled={!isValid}
                      title={
                        isValid ? "submit" : "All fields must be filled out."}> 
                      Book Now
                      </button>
                    </div>

                    
                    <div className='Desc-back'>
                      <a onClick={next}><BsFillArrowLeftSquareFill className='next-btn'/></a>
                    </div>

                    </div>
    

                  
                  </div>
    
                  </div>
                </form>
    
                <div className='back-btn'>
                  <Link to='explore' spy={true} smooth={true} hashSpy={true} onClick={() => setLakedesc(false)} className='back-btn-icon'>back</Link> 
                </div>
              
              </div>
              </motion.div>

            </div>
        </div> }

      
  
      </div>
    )
  }

export default Lugano