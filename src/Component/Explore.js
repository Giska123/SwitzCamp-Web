 import React, { useEffect } from 'react';
 import { Link } from 'react-scroll';
 import './Explore.css';
 import { motion, useAnimation } from "framer-motion";
 import { useInView } from "react-intersection-observer";
 import ScrollAnimation from 'react-animate-on-scroll'; 
 
 function Explore({ExploreRef, setMountain, setLake}) {

    const animVariants = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 1.5 }  }
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
    <div 
    ref={ExploreRef} 
    id='explore'>

    <div className='explore'>
    
        <div className='area-container'>

            <div className='area'>

            <motion.div 
            ref={ref}
            initial="hidden"
            animate={control}
            variants={animVariants}>
                    <div className='area-text'>
                        <h2>Camp Area</h2>
                        <p>Where would you like to go?</p>
                    </div>
                </motion.div>
               
                <ScrollAnimation animateIn='fadeInRight' duration={1}>
                    <div className='area-camp'>
                        <div className='imgbtn ex-img-1'>
                        <Link to="lake" spy={true} smooth={true} hashSpy={true} onClick={() => setLake(true)}><span>Lake</span></Link></div>     
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='fadeInRight' duration={1.5}>
                    <div className='area-camp'>
                        <div className='imgbtn ex-img-2'>
                        <Link to="mountain" spy={true} smooth={true} hashSpy={true} onClick={() => setMountain(true)}><span>Mountain</span></Link>
                        </div>
                    </div>    
                </ScrollAnimation>
                

            </div>

        </div> 
    </div>

    </div>
   );
 }
 
 export default Explore;
