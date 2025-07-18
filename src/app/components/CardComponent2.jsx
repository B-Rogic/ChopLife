'use client'
import React, {forwardRef} from 'react'
import Image from 'next/image'

const CardComponent2 = forwardRef(({black, handleClick, title = '', src, description = '', spices = '', amount = '', order = '', bg, lightAmount = '', bottom = '', animationClass, extraClass, imgClass, textClass}, ref,) => {
  return (
    <div className={`flex flex-col gap-5 md:p-10 p-5 md:h-[40rem] h-[30rem] relative overflow-hidden ${textClass || 'text-white'} rounded-3xl ${bg || 'bg-[#ff003c]'} ${extraClass}`}>
        <span className="md:text-3xl text-xl font-bold">{title}</span>
        <ul className='space-y-5 relative z-10'>
          <div className="flex gap-5 items-center">
              <div className={`w-2 h-2 flex-shrink-0 rounded-full ${black || 'bg-white'}`}></div>
              <li className='md:text-[23px] text-md gap-5'> {description}</li>
          </div>
          <div className="flex gap-5 items-center">
              <div className={`w-2 h-2 flex-shrink-0 rounded-full ${black || 'bg-white'}`}></div>
              <li className='md:text-[23px] text-md'> {spices}</li>
          </div>
        </ul>
        <div className="flex items-center gap-5 relative z-10">
            <button className="py-2 p px-8 bg-[#fff] text-[#1a1a1a] rounded-3xl relative">
              {order}
            </button>
            <p className="text-2xl font-semibold flex gap-2 items-center">{amount}<span className='font-normal text-sm md:text-md'>{lightAmount}</span></p>
        </div>
        <div className={`flex justify-center items-center flex-shrink-0 absolute left-0 w-full ${bottom || 'md:-bottom-[76%] -bottom-[40%]'}`}>
        <Image ref={ref} src={src} width={1000} height={1000} className={`w-full rounded-2xl flex-shrink-0 object-cover object-center ${imgClass}`} alt='src' style={{
          transform: `rotate(${animationClass}deg)` 
        }} />
        </div>
    </div>
  )
})

export default CardComponent2
