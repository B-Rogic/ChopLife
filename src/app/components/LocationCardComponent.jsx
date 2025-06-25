import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const LocationCardComponent = ({src, locationName, bg, onclick}) => {
  return (
    <div onClick={onclick} className="flex justify-center group items-center cursor-pointer relative overflow-hidden rounded-2xl md:h-52 h-52">
        <p className="text-white text-2xl font-bold z-10">{locationName}</p>
        <button className="absolute bg-white md:group-hover:bottom-10 group-hover:bottom-10 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-[0.5s] -bottom-20 z-10 py-1 w-[80%] left-1/2 -translate-x-1/2 justify-center rounded-2xl flex gap-2 items-center">view map <FaArrowRight className='-rotate-45' /></button>
        <Image src={src} width={1000} height={1000} alt='port harcourt' className='absolute w-full h-full object-cover left-0 top-0 group-hover:scale-[1.1] transition-scale duration-200' />
        <div className={`absolute w-full h-full ${bg || 'bg-[#0a990081]'}`}></div>
    </div>
  )
}

export default LocationCardComponent
