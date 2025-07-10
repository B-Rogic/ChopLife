'use client'
import React, { useState, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const AccordionComponent = () => {
    const accordionRef = useRef(null)
    const accordionRef1 = useRef(null)
    const accordionRef2 = useRef(null)
    const [active, setActive] = useState('');
    const itemsId ={ 
        item1: 'first',
        item2: 'second',
        item3: 'third'
    }
    const handleClick = (clickedItem) => {
        setActive(prevItem => 
        prevItem === clickedItem ? null : clickedItem
        )
    }

    const handleResizeClick = (clickedItem) => {
        handleClick(clickedItem)
    }
  return (
    <>
        <div onClick={() => handleResizeClick(itemsId.item1)} className="flex flex-col">
            <div className={`flex justify-between items-center p-10 rounded-t-2xl bg-white ${active === itemsId.item1 ? 'rounded-b-none' : 'rounded-b-2xl transition-rounded duration-1000 delay-[.8s] ease-out'}`}>
                <div className="flex items-start gap-5">
                <p className="md:text-xl">1.</p>
                <p className="md:text-xl">Delivery Zones</p>
                </div>
                <FaChevronDown className={`${active === itemsId.item1 ? 'rotate-180' : ''} transition-rotate duration-1000 text-xl`} />
            </div>
            <div ref={accordionRef} className={`text-sm flex flex-col flex-grow gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item1 ? 'transition-padding duration-1000' : ' pt-0 pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item1 ? `${accordionRef.current?.scrollHeight}` : '0px',
            }}>
                <p className="font-bold">Obio Akpor Pickup Hub</p>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Location: <span className="font-light"> 46, Oroigwe Road, Obio Akpor, Rivers.</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Hours:<span className="font-light">10 AM - 12 AM, Mon-Sunday</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Note: <span className="font-light">Fast pickup for lunch and dinner specials</span></p>
                    </div>
                </div>
                <p>Contact for Details:</p>
                <p className="font-bold">08154610325</p>
            </div>
        </div>
        <div onClick={() => handleResizeClick(itemsId.item2)} className="flex flex-col">
            <div className={`flex justify-between items-center p-10 rounded-t-2xl bg-white ${active === itemsId.item2 ? 'rounded-b-none' : 'rounded-b-2xl transition-rounded duration-1000 delay-[.8s] ease-out'}`}>
                <div className="flex items-start gap-5">
                <p className="md:text-xl">2.</p>
                <p className="md:text-xl">Delivery Methods & Fees</p>
                </div>
                <FaChevronDown className={`${active === itemsId.item2 ? 'rotate-180' : ''} transition-rotate duration-1000 text-xl`} />
            </div>
            <div ref={accordionRef1} className={`text-sm flex flex-col flex-grow gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item2 ? 'transition-padding duration-1000' : 'pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item2 ? `${accordionRef.current?.scrollHeight}` : '0px',
            }}>
                <p className="font-bold">Obio Akpor Pickup Hub</p>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Location: <span className="font-light"> 46, Oroigwe Road, Obio Akpor, Rivers.</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Hours:<span className="font-light">10 AM - 12 AM, Mon-Sunday</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Note: <span className="font-light">Fast pickup for lunch and dinner specials</span></p>
                    </div>
                </div>
                <p>Contact for Details:</p>
                <p className="font-bold">08154610325</p>
            </div>
        </div>
        <div onClick={() => handleClick(itemsId.item3)} className="flex flex-col mb-10">
            <div className={`flex justify-between items-center p-10 rounded-t-2xl bg-white ${active === itemsId.item3 ? 'rounded-b-none' : 'rounded-b-2xl transition-rounded duration-1000 delay-[.8s] ease-out'}`}>
                <div className="flex items-start gap-5">
                <p className="md:text-xl">3.</p>
                <p className="md:text-xl">Pickup Info</p>
                </div>
                <FaChevronDown className={`${active === itemsId.item3 ? 'rotate-180' : ''} transition-rotate duration-1000 text-xl`} />
            </div>
            <div ref={accordionRef2} className={`text-sm flex flex-col gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item3 ? ' pt-5 pb-10 transition-padding duration-1000' : ' pt-0 pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item3 ? `${accordionRef.current?.scrollHeight}` : '0px',
            }}>
                <p className="font-bold">Obio Akpor Pickup Hub</p>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Location: <span className="font-light"> 46, Oroigwe Road, Obio Akpor, Rivers.</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Hours:<span className="font-light">10 AM - 12 AM, Mon-Sunday</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Note: <span className="font-light">Fast pickup for lunch and dinner specials</span></p>
                    </div>
                </div>
                <p>Contact for Details:</p>
                <p className="font-bold">08154610325</p>
            </div>
        </div>
    </>
  )
}

export default AccordionComponent
