import React from 'react'

const Card = ({ item }) => {
    if (!item) return null
    return (
        <div
          className='h-[95%] w-1/3 m-4 bg-cover bg-center rounded-4xl flex flex-col place-content-between'
          style={{ backgroundImage: `url(${item.img})` }}
        >
            <div className='bg-white w-10 m-10 p-2 rounded-4xl text-center'>{item.num}</div>
            <div className=' text-white'>
                <p className='mx-10 mb-15 text-2xl leading-8'>{item.para}</p>
                <div className='flex place-content-between m-7'>
                    <div className='p-3 rounded-3xl w-35 text-center' style={{ backgroundColor: item.color , color: item.text}}>{item.button}</div>
                    <div className='bg-blue-500 p-2 rounded-4xl w-15 text-center'><i className="ri-arrow-right-line text-[20px]"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Card