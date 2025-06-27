'use client'
import React, {useState, useEffect, useRef} from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHeart } from 'react-icons/fa'
import SemiFooterComponent from '../components/SemiFooterComponent'
import chopLifeLogo from '@/images/chopLifeLogo.png'
import CarouselComponent from '../components/CarouselComponent'

const layout = ({children}) => {
  const lenisInstance = useRef(null); // Use useRef for the Lenis instance
  const rafId = useRef(null);
  const [navActive, setNavActive] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis
    const scroller = new Lenis({
      lerp: 0.1, // Adjust for desired smoothness
      duration: 1.2, // Adjust for desired speed
      smoothTouch: true,
      smoothWheel: true,
      // Add other options as needed
    });
    lenisInstance.current = scroller; // Store the instance in a ref

    // 2. Define the RAF loop
    const animate = (time) => {
      scroller.raf(time);
      rafId.current = requestAnimationFrame(animate); // Store the new RAF ID in the ref
    };

    // 3. Start the RAF loop
    rafId.current = requestAnimationFrame(animate); // Start the loop and store the first ID

    // 4. Cleanup function
    return () => {
      // Use the current values from the refs for cleanup
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (lenisInstance.current) {
        lenisInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
        <div className={`justify-between items-center w-full md:px-20 p-3 px-5 top-0 left-0 z-40 fixed bg-white text-[#1a1a1a] ${pathname === '/home/contact/portharcourt' ? 'hidden' : 'flex'}`}>
          <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='md:w-[10%] md:h-[10%] w-[30%] h-[30%] ' />
          <div ref={navRef} className={`flex items-center md:flex-row flex-col md:relative fixed md:top-0 left-0 top-[70px] gap-10 md:gap-20 w-full md:overflow-visible bg-white overflow-hidden transition-all delay-1000 duration-200 ease-in-out md:w-auto bg-red ${navActive ? 'h-full p-20' : 'h-0 p-0'}`} >
            <Link onClick={() => setNavActive(false)} href={`/home`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className='bg-white relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Home
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/menu`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className='bg-white relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Menu
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/gallery`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className='bg-white relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Gallery
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/contact`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className='bg-white relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Contact
              </div>
            </Link>
          </div>
          <div className="w-[35px] md:hidden block relative cursor-pointer h-5" onClick={() => setNavActive(!navActive)}>
            <div className={`absolute transition-transform duration-200 ease-in-out left-0 top-2 bg-[#1a1a1a] w-full h-[0.2px] ${navActive ? 'rotate-45 origin-center -translate-y-2' : ''}`}></div>
            <div className={`absolute transition-transform duration-200 ease-in-out left-0 top-0 bg-[#1a1a1a] w-full h-[0.2px] ${navActive ? '-rotate-45 origin-center' : ''}`}></div>
          </div>
        </div>
        {children}
        <CarouselComponent className={`${pathname === '/home/privacy-policy' || pathname === '/home/cookie-policy' || pathname === '/home/terms-conditions' || pathname === '/home/refunds-cancellation' ? 'hidden' : 'flex'}`} />
        <SemiFooterComponent className={`${pathname === '/home/privacy-policy' || pathname === '/home/cookie-policy' || pathname === '/home/terms-conditions' || pathname === '/home/refunds-cancellation' ? 'hidden' : 'flex'}`} />
        <div className={`flex flex-col gap-10 bg-[#ff003c]  md:p-20 p-5 ${pathname === '/home/contact/portharcourt' ? 'hidden' : 'flex'}`}>
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="flex flex-col gap-4 flex-shrink-0 md:col-span-2">
              <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='w-[25%] h-[25%]' />
              <p className="text-white text-sm">No. 46 Oroigwe Road, Obio Akpor, Rivers State.</p>
              <p className="text-white text-sm">info@chop-life.com</p>
              <div className="flex flex-col gap-1">
                <p className="text-white font-semibold leading-[12px]">Monday - Friday <span className='font-normal'>9 AM - 10 PM</span></p>
                <p className="text-white font-semibold leading-[12px]">Saturday <span className='font-normal'>10 AM - 11 PM</span></p>
                <p className="text-white font-semibold leading-[12px]">Sunday <span className='font-normal'>12 PM - 11 PM</span></p>
              </div>
            </div>
            <div className="flex flex-col md:gap-4 gap-3 flex-shrink-0 md:my-0 mt-10">
                <p className="text-white md:text-md text-sm md:mb-8 mb-3">MENU</p>
              <Link href={`/home`} className='text-md text-white font-semibold hover:underline'>Home</Link>
              <Link href={`/home/menu`} className='text-md text-white font-semibold hover:underline'>Our Menu</Link>
              <Link href={`/home/contact`} className='text-md text-white font-semibold hover:underline'>Contact Us</Link>
            </div>
            <div className="flex flex-col md:gap-4 gap-3 flex-shrink-0 md:my-0 mt-10">
                <p className="text-white md:text-md text-sm md:mb-8 mb-3">USEFUL</p>
              <Link href={`/home/privacy-policy`} className='text-md text-white font-semibold hover:underline'>Privacy Policy</Link>
              <Link href={`/home/cookie-policy`} className='text-md text-white font-semibold hover:underline'>Cookie Policy</Link>
              <Link href={`/home/terms-conditions`} className='text-md text-white font-semibold hover:underline'>Terms & Conditions</Link>
              <Link href={`/home/refunds-cancellation`} className='text-md text-white font-semibold hover:underline'>Refunds & Cancellation</Link>
            </div>
            <div className="flex flex-col md:gap-4 gap-3 flex-shrink-0 md:my-0 mt-10">
                <p className="text-white md:text-md text-sm md:mb-8 mb-3">SOCIAL</p>
              <Link href={`https://www.instagram.com/choplifeshawarma/`} className='text-md text-white font-semibold hover:underline'>Instagram</Link>
              <Link href={`https://web.facebook.com/profile.php?id=61561081104975&_rdc=1&_rdr#`} className='text-md text-white font-semibold hover:underline'>Facebook</Link>
            </div>
          </div>
          <p className="text-white text-md flex items-center gap-3">© 2025 Made by Vine Africa with <FaHeart className='text-white' /></p>
        </div>
    </>
  )
}

export default layout
