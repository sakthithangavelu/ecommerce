import React, { useState, useEffect } from 'react';
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ecommerceUrl from '../Axios/AxiosURL';

const ViewOrders = (product) => {

    const [cartItems, setCartItems] = useState([]);
    const [userAddress, setUserAddress] = useState([]);

    const email = sessionStorage.getItem("email");
    useEffect(() => {
        ecommerceUrl.get("CartItems", { ...product, email }).then((res) => {
            ecommerceUrl.get("UserAddress").then((res) => {
                setUserAddress(res.data);
            
              })
            setCartItems(res.data)
        })
    },[]);

    const myCart=cartItems.filter(item=>{if(item.email===email) return item})
    const myAddress=userAddress.filter(address=>{if(address.email===email) return address})
    return(
        <div>
            <Announcement/>
            <Navbar/>
            <div className='viewform'>
           
        {
             
            myCart.map(item=>
            <div className='cflex'>
               
                <img src={item.image} className='small'/>
                <div >
                <p>User Id :{item.email}</p>
                <p>Product Price : Rs.{item.price}/-</p>
                <p>Product name : {item.name}</p>
                {(myAddress.map(address=>
                <div>
                <p>Address : {address.address1}{address.address2}</p>
                <p>Postcode : {address.postcode}</p>
                <p>Contact : {address.phone}</p>
                </div>
                ))}
                </div>
               </div>
            )
}
        </div>
           <Footer/>
        </div>
    )
}
export default ViewOrders