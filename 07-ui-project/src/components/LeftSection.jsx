import React from 'react'

const LeftSection = () => {
    return (
        <div className=' h-[88vh] w-1/4 flex flex-col place-content-between'>
           <div>
             <p className='m-7 mb-10 text-5xl font-bold leading-15'>
                Prospective <br />
                <span className='inline-block my-2 bg-gray-100 rounded-4xl px-2'>
                    customer
                </span> <br />
                segmentation
            </p>

            <p className='mx-7 my-0 text-2xl'>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
           </div>

            <i class="ri-arrow-right-up-line text-7xl "></i>
        </div>
    )
}

export default LeftSection