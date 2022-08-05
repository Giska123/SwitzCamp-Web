import React, { useState, useRef } from 'react';
import Banner from './Banner';
import Explore from './Explore';
import Mountain from './Mountain';
import Arolla from './Arolla';
import Lake from './Lake';
import Lugano from './Lugano';
  
function Main({inputField, inputPrice, inputsHandler, handleSubmit, success, setSuccess, isValid, btnRef}) {
     
//Ref
    const ExploreRef = useRef();

    function ExploreClick() {
        ExploreRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    

//mountain
    const [mountain, setMountain] = useState(false);

    const onMountain = () => {
        setMountain(ExploreRef.current.scrollIntoView({ behavior: 'smooth' }));

    }
    

//mountaindesc
    const [mountaindesc, setMountaindesc] = useState(false);
 
    const showMountainandDesc = () => {
        setMountain(!mountain);
        setMountaindesc(!mountaindesc);
      }
      
//lake
    const [lake, setLake] = useState(false);

    const onLake = () => {
        setLake(ExploreRef.current.scrollIntoView({ behavior: 'smooth' }));

    }

//lakedesc 
const [lakedesc, setLakedesc] = useState(false);
 
const showLakeDesc = () => {
    setLake(!lake);
    setLakedesc(!lakedesc);
  }



    return (
     <div>
       
      <Banner ExploreClick={ExploreClick} />

      <Explore ExploreRef={ExploreRef} setMountain={setMountain} setLake={setLake} />

      <Mountain  mountain={mountain} onMountain={onMountain} showMountainandDesc={showMountainandDesc} />

      <Arolla mountaindesc={mountaindesc} setMountaindesc={setMountaindesc}
      inputField={inputField} inputPrice={inputPrice} inputsHandler={inputsHandler} handleSubmit={handleSubmit} 
      success={success} setSuccess={setSuccess} isValid={isValid} btnRef={btnRef}/>

      <Lake lake={lake} onLake={onLake} showLakeDesc={showLakeDesc}/>

      <Lugano lakedesc={lakedesc} setLakedesc={setLakedesc}
      inputField={inputField} inputPrice={inputPrice} inputsHandler={inputsHandler} handleSubmit={handleSubmit} 
      success={success} setSuccess={setSuccess} isValid={isValid}/>

      </div>
   )
 }
 
 export default Main