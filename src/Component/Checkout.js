import React, {useState} from 'react';
import "./Checkout.css";
import './Arolla';
import { FaUser, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCheckCircle } from "react-icons/bs"; 


function Checkout({Data, signin}) {
  
  const [check, setCheck] = useState({
    name:'',
    data:'',
    card:''
  })

  const checkHandler = (event) =>{
    setCheck({...check, [event.target.name]: event.target.value});
  }

  const [success, setSuccess] = useState(false);

      
  const handleonSubmit = (event) =>{
    event.preventDefault();
    setSuccess(true)
  }

  const isValid2 = Boolean(Data && check.name && check.data && check.card);


  return (
    
    <div id='Booking'>
    <div className='booking'>
    
      <div className='card-body'>

     
        <div className="book-head">
        <div className='book-text'>

        {
          Data.map((data)  => {
          return (
          <div className='text-head'>
          
            <h1>{data.title}</h1>
            <p> {data.tent}</p>
            <p> {data.guest} Guest</p>
            <p> {data.dateStart} - {data.dateEnd}</p>
            
          </div>
          )
          })
        }
        </div>
        </div>

          <div className='book-info'>
          <div className="info">
            <h2>Payment</h2>
  
          <div className='book-card'>
            <p className='text-price'>
              <div>Price</div>
              <div>{Data.reduce((sum, data) => (
                sum += data.guest * data.price), 0)} $
              </div>
            </p>
          <p className='text-price'><div>Tax</div><div>7 $</div></p>
          <p className='total-price'><div>Total</div>
          <div>{Data.reduce((sum2, data) => (
            sum2 += data.guest * data.price + 7 ), 0)} $
          </div></p>
          </div>

          <form onSubmit={handleonSubmit}>
              <ul className="form-list">

                <li className="form-list-row">
                {signin ? null :
                  <div className="user">
                    <label for="#">Name</label><br />
                    <CgProfile className="icon-form" />
                    <input type="text" name='name' value={check.name} onChange={checkHandler} required />
                  </div>}
                </li>

                <li className="form-list-row">
                {signin ? null :
                  <div className="data">
                    <label for="#">Email / Phone</label><br />
                    <FaUser className="icon-form" />
                    <input type='text' name='data' value={check.data} onChange={checkHandler} required />
                  </div>}
                </li>

                <li className="form-list-row">
                <p>Card Number</p>
                  <div className="number" onChange={checkHandler}>
                  <label>
                    <input type='radio' name='card' value='Visa' required/>
                      <FaCcVisa className='card-data' />
                  </label>
                  <label> 
                    <input type='radio' name='card' value='Master' />
                      <FaCcMastercard className='card-data' />
                  </label>
                  <label>  
                    <input type='radio' name='card' value='Paypal' />
                      <FaCcPaypal className='card-data' />
                  </label>
                  </div>
                </li>

                  <div className="checkbox">
                    <label for="checkbox">
                      <input id="checkbox" type="checkbox" required/>
                      <span>Remember My Information</span>
                    </label>
                  </div> 
                  
              </ul>
              <button 
              type="submit"
              disabled={!isValid2}
              title={
                isValid2 ? "submit" : "All fields must be filled out."} 
              className='pay-btn'
              >Pay Now</button>
            </form>

          </div>
        </div>


    </div>
  </div>
  
      {success && 
      <div className='success-message'>
      <div className='message-container'>
          <div className='message-text'>
          <BsCheckCircle className='msg-icon'/>
              <h1>Payment Successful!</h1>
              <button onClick={() => setSuccess(false)} className='btn-msg2'>Done</button>
            </div>
          </div>
      </div>}
</div>
  );
}

export default Checkout;