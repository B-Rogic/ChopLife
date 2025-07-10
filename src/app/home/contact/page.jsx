'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import { CircularProgress, Box } from '@mui/material'
import LocationCardComponent from '@/app/components/LocationCardComponent'
import AccordionComponent from '@/app/components/AccordionComponent'
import containerBackground from '@/images/backgroundImage.jpg'
import portHarcourt from '@/images/portHarcourt.jpg'
import Oyigbo from '@/images/Oyigbo.jpg'
import eleme from '@/images/eleme.jpeg'
import obioAkpor from '@/images/obioAkpor.jpeg'


const page = () => {
    const [location, setLocation] = useState('')
    const [value, setValue] = useState(0);
  return (
    <>  
        <div className={`bg-white fixed flex justify-center items-center w-full h-full z-40 top-0 left-0 ${location ? 'flex' : 'hidden'}`}> 
            <div onClick={() => setLocation('')} className="flex justify-center cursor-pointer absolute top-3 left-3 items-center rounded-full p-1 w-8 h-8 text-white bg-[#0000008f] backdrop-blur-md">
                <div className="w-[70%] rotate-45 h-[0.5px] bg-white absolute"></div>
                <div className="w-[70%] h-[0.5px] -rotate-45 bg-white absolute"></div>
            </div>
            {location === 'portharcourt' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15901.139161071089!2d6.908876!3d4.891911!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTMnMzAuOSJOIDbCsDU0JzMyLjAiRQ!5e0!3m2!1sen!2sus!4v1750776344687!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : location === 'oyigbo' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15901.252929871465!2d7.123382!3d4.887119!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTMnMTMuNiJOIDfCsDA3JzI0LjIiRQ!5e0!3m2!1sen!2sus!4v1750778715757!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : location === 'eleme' ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15903.299020113674!2d7.121701!3d4.800122!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDgnMDAuNCJOIDfCsDA3JzE4LjEiRQ!5e0!3m2!1sen!2sus!4v1750778813531!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
            ) : (
                <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15901.377397141632!2d7.046677!3d4.881871!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInNTQuNyJOIDfCsDAyJzQ4LjAiRQ!5e0!3m2!1sen!2sus!4v1750778891066!5m2!1sen!2sus" width="100%" height="60%" style={{border: '0'}} ></iframe>
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
                            <p className="font-bold md:text-lg text-sm">Obia Akpor:</p>
                            <p className="md:text-lg text-sm">46, Oroigwe Rd, Obio Akpor, Rivers <br /> 500102</p>
                            <p className="text-gray-400 font-semibold md:text-lg text-sm">info@chop-life.com</p>
                            <p className="text-gray-400 font-semibold md:text-lg text-sm">+234 815 4610 235</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-7">
                        <p className="text-2xl">Write Us a Message</p>
                        <form action="https://formsubmit.co/info@chop-life.com" className='flex flex-col items-start gap-7' method='POST'>
                            <label htmlFor="name" className='w-full'>
                                <input required className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="text" name="name" id="name" placeholder='Full Name' />
                            </label>
                            <div className="flex gap-5 items-center w-full">
                                <label htmlFor="email" className='w-full'>
                                    <input required className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="email" name="email" id="email" placeholder='youremail@email.com' />
                                </label>
                                <label htmlFor="tel" className='w-full'>
                                    <input required className='w-full py-3 px-5 rounded-3xl border-none outline-none' type="tel" name="tel" id="tel" placeholder='+234 000 0000 000' />
                                </label>
                            </div>
                            <label htmlFor="message" className='w-full'>
                                <textarea required rows={10} name="message" id="message" className='w-full p-4 border-none outline-none rounded-3xl bg-white' placeholder='Type your message' ></textarea>
                            </label>
                            <button className='py-3 px-10 text-white hover:shadow-lg bg-[#ff003c] rounded-3xl'>Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 items-start gap-3">
                    <LocationCardComponent onclick={() => setLocation('portharcourt')} src={portHarcourt} locationName={`Port Harcourt`} />
                    <LocationCardComponent onclick={() => setLocation('oyigbo')} bg={`bg-[#ff91008f]`} src={Oyigbo} locationName={`Oyigbo`} />
                    <LocationCardComponent onclick={() => setLocation('eleme')} src={eleme} locationName={`Eleme`} />
                    <LocationCardComponent onclick={() => setLocation('obioakpor')} bg={`bg-[#ff91008f]`} src={obioAkpor} locationName={`Obio Akpor`} />
                </div>
                <AccordionComponent />
            </div>
        </div>
    </>
  )
}

export default page
