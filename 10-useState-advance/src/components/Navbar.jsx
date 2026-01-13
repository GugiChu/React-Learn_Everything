import React from 'react'

const Navbar = ({ cart }) => {
  return (
    <div className="navbar">
        <p className="name">Products Page</p>
        <div className="cart"><i className="ri-shopping-cart-2-fill"></i>    {cart}</div>
    </div>
  )
}

export default Navbar