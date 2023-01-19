import React from 'react'

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <div>
       <h3>{product.name}</h3>
      <img className='small' src={product.image} alt={product.name}></img>
      <div>Rs.{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Product