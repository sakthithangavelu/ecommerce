import React, { useState, useEffect } from 'react';
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ecommerceUrl from '../Axios/AxiosURL';

const ViewOrders = (product) => {

    const [cartItems, setCartItems] = useState([]);
    const email = sessionStorage.getItem("email");
    useEffect(() => {
        ecommerceUrl.get("CartItems", { ...product, email }).then((res) => {
            setCartItems(res.data)
        })
    },[]);

    const myCart=cartItems.filter(item=>{if(item.email===email) return item})
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <div className='viewform'>
           
        {
             
            myCart.map(item=>
            <div className='cflex'>
               
                <img src={item.image} className='small'/>
                <p>userid :{item.email}</p>
                <p>Product Price : Rs.{item.price}/-</p>
                <p>Product name: {item.name}</p>
               </div>
         
            )
        }
        </div>
           <Footer/>
        </div>
    )




}
export default ViewOrders