'use client'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const AccordionComponent = () => {
    const [windowSize, setWindowSize] = useState(false)
    const [active, setActive] = useState();
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
        if(window.innerWidth <= 768) {
            setWindowSize(true)
        } else{
            setWindowSize(false)
        }
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
            <div className={`text-sm flex flex-col flex-grow gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item1 ? 'transition-padding duration-1000' : ' pt-0 pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item1 ? (windowSize ? `1100px` : '800px') : '0px',
            }}>
                <p className="font-bold">Eleme</p>
                <p>From Akpajo to Ogale and environs, we deliver to homes offices and events in Eleme.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">45-60 minutes</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦800 - ₦2,000 (Depending on distance)</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Note: <span className="font-light">Bulk and corporate orders available with advance notice.</span></p>
                </div>
                </div>
                <p className="font-bold">Oyigbo</p>
                <p>Serving the heart of Oyigbo and neighboring communities like Afam and Komkom.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">1 - 1.5 hours</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦1,000 - ₦1,200</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Note: <span className="font-light">Best for group or family-size orders due to distance</span></p>
                </div>
                </div>
                <p className="font-bold">Okrika</p>
                <p>Island vibes? We've got you! We deliver to key sports across Okrika including Ogoloma and ATC axis.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">1 - 1.5 hours</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦1,000 - ₦1,500</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Note: <span className="font-light">Weather and marine traffic may slightly affect timing.</span></p>
                </div>
                </div>
                <p className="font-bold">Obio Akpor</p>
                <p>One of our busiest zones! We cover areas like Rumuokoro, Rukpokwu, Rumuodara, and Eliozu.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light"> 30 - 45 minutes</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦500 - ₦800</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Note: <span className="font-light">Fast delivery guaranteed. Chasless payment available on arrival.</span></p>
                </div>
                </div>
                <p className="font-bold">Port Harcourt</p>
                <p>From Old GRA to D-Line, Stadium Road to Diobu - our drivers know the city inside-out.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">30-45 minutes</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦500 - ₦800</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Note: <span className="font-light">Free delivery promos available on selected days!</span></p>
                </div>
                </div>
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
            <div className={`text-sm flex flex-col flex-grow gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item2 ? 'transition-padding duration-1000' : 'pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item2 ? (windowSize ? `1120px` : '800px') : '0px',
            }}>
                <p className="font-bold flex gap-3"><span>1.</span> Standard Local Delivery</p>
                <p className="font-bold">How it works</p>
                <p>we deliver your order directly to your doorstep within our local delivery zone (up to 10km radius).</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">30-60 minutes</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Fee:<span className="font-light">₦500 - ₦1,000 (Depending on your location)</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Payment<span className="font-light">Pay online or  o delivery (cash/transfer)</span></p>
                </div>
                <div className="flex gap-3">
                    <span>2.</span>
                    <p className="font-bold">Express Deliver (Fast Track)</p>
                </div>
                <p className="font-bold">How it works:</p>
                <p>In a rush? We'll prioritize your order and get it to you ASAP - prefer for lunchtime cravings or tight schedules.</p>
                </div>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Deliver Time: <span className="font-light">20 - 30 miutes</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Fee:<span className="font-light">₦1,500 flat</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Availability:<span className="font-light">Limited to locations within 5km</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Pre-payment required for express orders</p>
                </div>
                </div>
                <div className="flex gap-3">
                <span>3.</span>
                <p className="font-bold">Group/Office Delivery</p>
                </div>
                <p className="font-bold">How it works:</p>
                <p>Order for your team or family and enjoy bulk delivery discounts.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Minimum Order: <span className="font-light">₦8,000</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Delivery Fee:<span className="font-light">FREE within 7km</span></p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Pre-order required (at least 1 hour ahead)</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="italic">Ideal for offices, team lunches, or group hangouts</p>
                </div>
                </div>
                <div className="flex gap-3">
                <span>4.</span>
                <p className="font-bold">Scheduled / Event Delivery</p>
                </div>
                <p className="font-bold">How it works:</p>
                <p>Planning ahead? You can schedule delivery for a later time - perfect for birthdays, brunches, or meetings.</p>
                <div className="flex flex-col gap-2 ">
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Book at least 4 hours ahead</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Flexible delivery window</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="font-bold">Fee: Based on size, distance & time - from ₦1,000 upward</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className={`w-1 h-1 rounded-full bg-black`}></div>
                    <p className="italic">Ideal for offices, team lunches, or group hangouts</p>
                </div>
                </div>
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
            <div className={`text-sm flex flex-col gap-3 px-10 rounded-b-2xl bg-white overflow-hidden ${active === itemsId.item3 ? ' pt-5 pb-10 transition-padding duration-1000' : ' pt-0 pb-0 transition-padding duration-1000'}`} style={{
                height: active === itemsId.item3 ? `200px` : '0px',
            }}>
                <p className="font-bold">Obio Akpor Pickup Hub</p>
                <p>From Akpajo to Ogale and environs, we deliver to homes offices and events in Eleme.</p>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Location: <span className="font-light"> 46, Oroigwe Road, Obio Akpor, Rivers.</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Hours:<span className="font-light">10 AM - 8 PM, Mon-Sunday</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <p className="font-bold">Note: <span className="font-light">Fast pickup for lunch and dinner specials</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccordionComponent
