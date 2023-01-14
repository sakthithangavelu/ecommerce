import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {countCartItems} = props;
  return (
    <header className='row block center'>
        <div>
            <a href='#'>
                <h1>BrOwN WoOdS</h1>
            </a>    
        </div>
        <div>
           <Link to="/Cart">
                Cart{' '} 
                {countCartItems?(
                    <button className='badge'>{countCartItems}</button>
                ):('')
                }
            </Link>
         <Link to='/SignIn'>SignIn</Link>
        </div>
    </header>
  )
}

export default Header