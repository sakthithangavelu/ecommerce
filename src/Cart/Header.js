import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <header className='row block center'>
      <div>
        <h1>BrOwN WoOdS</h1>
      </div>
      <div>
        <Link to='/'><button>Home</button></Link>
        <button> Cart{' '}
          {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ) : ('')
          }</button>
      </div>
    </header>
  )
}

export default Header