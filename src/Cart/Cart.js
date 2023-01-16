import React from 'react'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const shippingPrice = itemsPrice > 4999 ? 0 : 300;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className='block col-1'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className='add'>
                            +
                        </button>
                        <button onClick={() => onRemove(item)} className='remove'>
                            -
                        </button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} * Rs.{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Items Price -</div>
                        <div className='col-1 text-right'>Rs.{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price -</div>
                        <div className='col-1 text-right'>Rs.{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price -</div>
                        <div className='col-1 text-right'>Rs.{shippingPrice.toFixed(2)}</div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'><strong>Total Price:</strong></div>
                        <div className='col-1 text-right'>Rs.{totalPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <div className='row'>
                        <Link to='/SignIn'><button>CHECKOUT</button></Link>
                    </div>
                </>

            )}

        </aside>
    )
}

export default Cart