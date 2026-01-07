import React from 'react'
import Card from './Card'

const RightSection = ({ dets }) => {
  return (
    <div className=' h-[88vh] w-3/4 flex'>
        {dets?.map((item, idx) => (
          <Card key={idx} item={item} />
        ))}
    </div>
  )
}

export default RightSection