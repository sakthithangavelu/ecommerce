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
            Your Orders : 
        {
            myCart.map(item=>
            <div>
                <img src={item.image}/>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.email}</p>
            </div>
            )
        }
           <Footer/>
        </div>
    )




}
export default ViewOrders