import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section2 = ({ dets }) => {
  return (
    <div className='flex pb-08'>
        <LeftSection />
        <RightSection dets={dets} />
    </div>
  )
}

export default Section2