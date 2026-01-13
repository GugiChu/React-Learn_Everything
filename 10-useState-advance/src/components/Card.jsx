import React from 'react'


const Card = ({ addToCart }) => {
    return (
        <div className="card">
            <div className="btn" onClick={addToCart}>Add To Cart</div>
        </div>
    )
}

export default Card