import React from 'react'

const Card = (prop) => {
  return (
    <div className="card">

      <div className="blur-layer"></div>

      <div className="content">
        <p className="name">{prop.name} <img className="verify" src="/src/assets/verify.png" alt="" /></p>
        <p className="desc">{prop.desc}</p>

        <div className="sec-3">
          <p className="follower">
            <i className="ri-user-line"></i> {prop.follower}
          </p>
          <p className="likes">
            <i className="ri-heart-line"></i> {prop.likes}
          </p>
          <div className="button">Follow +</div>
        </div>
      </div>

    </div>
  )
}

export default Card
