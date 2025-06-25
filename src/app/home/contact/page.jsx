'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import LocationCardComponent from '@/app/components/LocationCardComponent'
import AccordionComponent from '@/app/components/AccordionComponent'
import containerBackground from '@/images/backgroundImage.jpg'
import newYork from '@/images/newYork.png'
import london from '@/images/london.png'
import berlin from '@/images/berlin.png'
import amsterdam from '@/images/amsterdam.png'
import bacharest from '@/images/bacharest.png'


const page = () => {
    const [location, setLocation] = useState('')
  return (
    <>  
        <div className={`bg-white fixed flex justify-center items-center w-full h-full z-40 top-0 left-0 ${location ? 'flex' : 'hidden'}`}> 
            <div onClick={() => setLocation('')} className="absolute cursor-pointer top-5 right-5 rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md bg-white">
                <FaTimes className='text-2xl' />
            </div> 
            {location === 'newyork' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12091.094218320683!2d-73.981905!3d40.745008!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ0JzQyLjAiTiA3M8KwNTgnNTQuOSJX!5e0!3m2!1sen!2sus!4v1750781447491!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : location === 'london' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9931.883789116158!2d-0.134998!3d51.513749!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDMwJzQ5LjUiTiAwwrAwOCcwNi4wIlc!5e0!3m2!1sen!2sus!4v1750781501812!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : location === 'amsterdam' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9744.239568782807!2d4.884962!3d52.36933400000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDIyJzA5LjYiTiA0wrA1MycwNS45IkU!5e0!3m2!1sen!2sus!4v1750781544150!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : location === 'berlin' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9705.473774009051!2d13.357892!3d52.54486!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDMyJzQxLjUiTiAxM8KwMjEnMjguNCJF!5e0!3m2!1sen!2sus!4v1750781633150!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}}></iframe>
            ) : (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11393.858531027621!2d26.094302!3d44.444143!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDI2JzM4LjkiTiAyNsKwMDUnMzkuNSJF!5e0!3m2!1sen!2sus!4v1750781671775!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}}></iframe>
            )}
        </div>
        <div className='w-full relative'>
            <Image src={containerBackground} alt='container background' width={1000} height={1000} className='w-full h-full absolute top-0 left-0' />
            <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
                <div className="md:w-[80%] mb-5">
                    <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Contact Us</h1>
                    <p className="md:text-xl text-sm">Whether you have a questio, feedback, or just want to say hi, we're always here for you.</p>
                    <p className='md:text-xl text-sm'>Reach out and let us know how we can make your experience even better</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div>
                        <p className="text-xl font-semibold mb-5">Addresses</p>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold text-sm">Obia Akpor:</p>
                            <p className="text-sm">46, Oroigwe Rd, Obio Akpor, Rivers <br /> 500102</p>
                            <p className="text-gray-400 font-semibold text-sm">info@chop-life.com</p>
                            <p className="text-gray-400 font-semibold text-sm">+234 815 4610 235</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-7">
                        <p className="text-2xl">Write Us a Message</p>
                        <label htmlFor="name" className='w-full'>
                            <input className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="text" name="name" id="name" placeholder='Full Name' />
                        </label>
                        <div className="flex gap-5 items-center w-full">
                            <label htmlFor="name" className='w-full'>
                                <input className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="text" name="name" id="name" placeholder='youremail@email.com' />
                            </label>
                            <label htmlFor="name" className='w-full'>
                                <input className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="text" name="name" id="name" placeholder='+01 000 999 555' />
                            </label>
                        </div>
                        <label htmlFor="message" className='w-full'>
                            <textarea rows={10} name="message" id="message" className='w-full p-4 border-none outline-none rounded-3xl bg-white' placeholder='Type your message' ></textarea>
                        </label>
                        <button className='py-3 px-10 text-white hover:shadow-lg bg-[#ff003c] rounded-3xl'>Send Message</button>
                    </div>
                </div>
                <div className="grid md:grid-cols-5 grid-cols-2 items-start gap-3">
                    <LocationCardComponent onclick={() => setLocation('newyork')} bg={`bg-[#ff003b80]`} src={newYork} locationName={`New York`} />
                    <LocationCardComponent onclick={() => setLocation('london')} bg={`bg-[#ffcc0080]`} src={london} locationName={`London`} />
                    <LocationCardComponent onclick={() => setLocation('berlin')} bg={`bg-[#0a990080]`} src={berlin} locationName={`Berlin`} />
                    <LocationCardComponent onclick={() => setLocation('amsterdam')} bg={`bg-[#33333380]`} src={amsterdam} locationName={`Amsterdam`} />
                    <LocationCardComponent onclick={() => setLocation('bacharest')} bg={`bg-[#ff910080]`} src={bacharest} locationName={`Bacharest`} />
                </div>
                <AccordionComponent />
            </div>
        </div>
    </>
  )
}

export default page
