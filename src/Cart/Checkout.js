import React from 'react';
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom';
// import './checkout.css'
const Checkout = () => {
  const navigate = useNavigate();
  
  const PlaceOrder = () =>
  {
    alert("Order sucessfully placed")
    navigate("/ViewOrders")
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="checkoutform">
        <div className="cflex">
          <form onSubmit={PlaceOrder}>
          <h2>Address to deliver</h2>
            <label>Name :<br/> 
              <input type="text" name="fname" required />
            </label>
            <label>Address 1 :
              <input type="text" name="houseadd" placeholder="House number and street name" required />
            </label>
            <label>Address 2 :
              <input type="text" name="apartment" placeholder="City, State, Country" required />
            </label>
            <label>Postcode :
              <input type="number" name="city" required />
            </label>
            <label> Phone :<br/>
              <input type="tel" name="city" required />
            </label>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout