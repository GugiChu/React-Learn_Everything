import React from 'react'


const Card2 = ({ addToCart }) => {
    return (
        <div className="card2">
            <div className="btn" onClick={addToCart}>Add To Cart</div>
        </div>
    )
}

export default Card2