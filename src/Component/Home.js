import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';



function Home({signin}) {

  const [menu, setMenu] = useState(false);
  const showMenu = () => {
      setMenu(!menu);
  };
  const showLink = () => {
      setMenu(false)
  }

  return (
    
    <div>

      <Navbar showMenu={showMenu} signin={signin}/>
      <Sidebar  menu={menu} showMenu={showMenu} showLink={showLink} signin={signin}/>

    </div>
    );
}  


export default Home;