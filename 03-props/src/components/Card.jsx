import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card">
        <img src={props.pfp} alt="" />
        <div className="data">
            <p className='name'>{props.name}</p>
        <p className='profession'>{props.prof}</p>
        </div>
    </div>
    </>
  )
}

export default Card