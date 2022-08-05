import React, {useState, useRef} from 'react';
import Home from './Home';
import Booking from './Checkout';
import Main from './Main';
import Contact from './Contact';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './Signin';

function MainHome() {
  
    // const ref = React.useRef(null);

    const [Data, setData] = useState([])

    const [inputField , setInputField] = useState({
        title: '',
        tent: '',
        guest: '',
        dateStart: '',
        dateEnd: '',
        price: ''
      })

      const isValid = Boolean(inputField.title && inputField.tent && inputField.guest && inputField.dateStart && inputField.dateEnd && inputField.price);
      const [success, setSuccess] = useState(false);
      
      let btnRef = useRef();

      const inputsHandler = (event) =>{
        const target = event.target.value;
        const name = event.target.name;
            setInputField({...inputField, [name]: target});
      }

      
      const handleSubmit = (event) =>{
        event.preventDefault();
        const newData = (data)=>([...data, inputField])
        setData(newData);
        setSuccess(true);
        if(btnRef.current){
          btnRef.current.setAttribute("disabled", "disabled");
        }
        setInputField('');
      }

    
      const [signin, setSignin] = useState(false);



  return (
    <Router>
    
      <Home signin={signin}/>

      <Switch>
          <Route exact path="/">
            <Main inputField={inputField} inputsHandler={inputsHandler} handleSubmit={handleSubmit} success={success} setSuccess={setSuccess} isValid={isValid} btnRef={btnRef}/>
          </Route>
          <Route path="/booking"><Booking Data={Data} signin={signin}/></Route>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/signin"><Signin signin={signin} setSignin={setSignin}/></Route>
      </Switch>
      
    </Router>
  )
}

export default MainHome