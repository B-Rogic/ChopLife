'use client'
import React, {forwardRef} from 'react'
import Image from 'next/image'

const CardComponent2 = forwardRef(({black = false, title = '', src, description = '', spices = '', amount = '', order = '', bg, lightAmount = '', bottom = '', animationClass, extraClass, imgClass}, ref,) => {
  return (
    <div className={`flex flex-col gap-5 md:p-10 p-5 md:h-[40rem] h-[30rem] relative overflow-hidden ${black ? 'text-black' : 'text-white'} rounded-3xl ${bg || 'bg-[#ff003c]'} ${extraClass}`}>
        <h3 className="md:text-3xl text-xl font-bold">{title}</h3>
        <ul className='space-y-5 relative z-10'>
          <div className="flex gap-5 items-center">
              <div className={`w-2 h-2 flex-shrink-0 rounded-full ${black ? 'bg-black' : 'bg-white'}`}></div>
              <li className='md:text-[23px] text-md gap-5'> {description}</li>
          </div>
          <div className="flex gap-5 items-center">
              <div className={`w-2 h-2 flex-shrink-0 rounded-full ${black ? 'bg-black' : 'bg-white'}`}></div>
              <li className='md:text-[23px] text-md'> {spices}</li>
          </div>
        </ul>
        <div className="flex items-center gap-5 relative z-10">
            <button className="py-2 md:px-8 px-3 flex-shrink-0 text-[#1a1a1a] bg-white hover:scale-[1.01] transition-all duration-200 rounded-3xl">{order}</button>
            <h1 className="text-2xl font-semibold flex gap-2 items-center">{amount}<span className='font-normal text-sm md:text-md'>{lightAmount}</span></h1>
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
