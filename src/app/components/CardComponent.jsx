import React from 'react'
import Image from 'next/image'

const CardComponent = ({src, title = '', description = '', order = '', amount = '', handleClick, regular}) => {
  return (
    <div className="bg-white rounded-3xl p-3 flex flex-col h-[80%]">
        <Image src={src} width={1000} height={1000} alt='first card image' className='w-full rounded-2xl translate-y-[-50px] h-[60%] object-cover flex-grow-0' />
        <div className="flex flex-col gap-4 md:px-5">
          <p className="text-3xl font-bold text-[#1a1a1a]">{title}</p>
          <p className="text-sm font-light text-[#1a1a1a]">{description}</p>
          <div className="flex items-center justify-between">
              <button onClick={handleClick} className="py-2 px-8 bg-[#ff003c] text-white rounded-3xl relative">
                {order}
              </button>
              <div className="text-2xl font-semibold relative text-[#1a1a1a] flex flex-col"> <p className='flex items-center gap-2'><span className='text-sm'>from</span> {amount}</p> <br /> <span className='text-sm absolute bottom-0'>{regular}</span></div>
          </div>
        </div>
    </div>
  )
}

export default CardComponent
