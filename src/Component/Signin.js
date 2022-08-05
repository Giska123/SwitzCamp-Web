import React, {useState, useRef} from 'react';
import './Signin.css';
import { BsCheckCircle } from "react-icons/bs"; 


function Signin({signin, setSignin}) {


const [slide, setSlide] = React.useState(false);

const slideUp = () => {
  setSlide(true)
}

const slideDown = () => {
  setSlide(false)
}

    const [login, setLogin] = useState([]);
    const [success, setSuccess] = useState(false);
    
  const [inputData, setInputData] = useState({
    username: '',
    phone: '',
    password: ''
  })

  const isDataValid = Boolean(inputData.username && inputData.phone && inputData.password); 
      
      let btnSub = useRef();

      const changeData= (event) =>{
        const target = event.target.value;
        const name = event.target.name;
          setInputData({...inputData, [name]: target});
      }

      
      const submitData = (event) =>{
        event.preventDefault();
        const newDatas = (data2)=>([...data2, inputData])
        setLogin(newDatas);
        if(btnSub.current){
          btnSub.current.setAttribute("disabled", "disabled");
        }
        setSuccess(true);
        setSignin(!signin);
        setInputData('');
        console.log('success')
      }



return (
  <div className='form-container'>

  <div className='sign'>
  {!signin ?

  <div className="form-sign">

    {slide ? 

    <div className="signup slide-down">
        <h2 className="form-title" id='signup' onClick={slideDown}><span>or</span> Sign up</h2>
    </div> :


    <div className="signup">
    <form onSubmit={submitData}>
      <h2 className="form-title" id='signup'>Sign up</h2>
      
      <div className="form-holder">
      
        <input type="text" className="input" placeholder="Name" 
        name="username" 
        onChange={changeData} 
        value={inputData.username} required/>

        <input type="number" className="input" placeholder="Phone Number" 
        name="phone" 
        onChange={changeData} 
        value={inputData.phone} required/>

        <input type="password" className="input" placeholder="Password" 
        name="password" 
        onChange={changeData} 
        value={inputData.password} required/>

      </div>

      <div className='submit-btn'>
        <button 
        type='submit'
        disabled={!isDataValid}
        ref={btnSub}>
        Sign up</button>
      </div>

    </form>
    </div> }

    {slide ?
    
    <div className='slide-up'>
    <div className="center">
    <h2 className="form-title" id='login'>Log in</h2>
        <div className="form-holder">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <div className="submit-btn">
        <button>Log in</button>
        </div>
    </div>
    </div> :
  
    <div className="signin">
      <div className="center">
        <h2 className="form-title" id='login' onClick={slideUp}><span>or</span> Log in</h2>
      </div>
    </div> }
  </div> :

    <div className='profile-page'>
    {
      login.map((data2)  => {
      return (
    <div className='profile'> 
      Hello <span>{data2.username}</span>
    </div>
    )
    })
    }
    </div>

  }

</div>


    {success && 
      login.map((data2)  => {
      return (
    <div className='message'>
    <div className='message-container'>
      <div className='message-text'>
      <BsCheckCircle className='msg-icon'/>
        <h1>Welcome {data2.username}!</h1>
        <p>explore many camps here</p>
        <button onClick={() => setSuccess(false) } className='btn-msg1'>Ok</button>
      </div>
    </div>
    </div>
    )
    })
    }


</div>
)
}

export default Signin