'use client'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import Lenis from 'lenis'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHeart, FaWhatsapp } from 'react-icons/fa'
import { ShoppingCartIcon } from '@phosphor-icons/react'
import { useCart } from '../context/CartProvider'
import SemiFooterComponent from '../components/SemiFooterComponent'
import chopLifeLogo from '@/images/chopLifeLogo.png'
import CarouselComponent from '../components/CarouselComponent'
import CartComponent from '../components/CartComponent'
import Head from 'next/head'
import Script from 'next/script'

const layout = ({children}) => {
  const lenisInstance = useRef(null); // Use useRef for the Lenis instance
  const rafId = useRef(null);
  const [navActive, setNavActive] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const { cartItems, removeAllCartItem, getTotalPrice } = useCart();
  const [checkoutActive, setCheckoutActive] = useState(false);
  const checkoutRef = useRef(null);
  const closeRef = useRef(null);

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

  const generateWhatsAppMessage = useCallback(() => {
      if (cartItems.length === 0) {
        return "Hello Chop Life, I'd like to place an order, but my cart is empty!";
      }
  
      let message = "Hello Chop Life, I'd like to place an order:\n\n"; // Use \n for new lines
      cartItems.forEach((item, index) => {
        const itemName = item.name || 'Unknown Item';
        const itemQuantity = item.quantity || 0;
        message += `${index + 1}. ${itemName} (x${itemQuantity})\n`;
      });
  
      const totalPrice = getTotalPrice();
      // Use * for bold in WhatsApp, and ₦ for Naira symbol
      message += `\n*Total Price:* ₦${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      message += `\n\nPlease confirm my order. Thank you!`;
  
      // IMPORTANT: encodeURIComponent is crucial for the wa.me link
      return encodeURIComponent(message);
  }, [cartItems, getTotalPrice]);

  const handlePlaceOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`whatsapp://send?phone=2348154610235&text=${message}`, '_blank', 'noopener noreferrer');
    removeAllCartItem();
    setCheckoutActive(false);
  }

  return (
    <>
    <Head>
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TDTB2Y3HC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1TDTB2Y3HC');
          `}
        </Script>
    </Head>
        <div className={`justify-between items-center gap-5 w-full md:px-20 p-3 px-5 top-0 left-0 z-40 fixed bg-[rgba(255,255,255,0.3)] backdrop-blur-md text-[#1a1a1a] ${pathname === '/home/contact/portharcourt' ? 'hidden' : 'flex'}`}>
          <Link href={`/home`} className='flex-shrink-0 md:w-[10%] md:h-[10%] w-[30%] h-[30%] '>
            <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='w-full' />
          </Link>
          <div ref={navRef} className={`flex md:me-auto items-center md:flex-row flex-col md:relative fixed md:top-0 left-0 top-[70px] gap-10 md:gap-20 w-full md:overflow-visible bg-white z-52 overflow-hidden transition-all duration-200 ease-in-out md:w-auto bg-red ${navActive ? 'h-[100vh] p-20' : 'h-0 p-0'}`} >
            <Link onClick={() => setNavActive(false)} href={`/home`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c]"></div>
              <div className='relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Home
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/menu`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className='relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Menu
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/gallery`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className='relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Gallery
              </div>
            </Link>
            <Link onClick={() => setNavActive(false)} href={`/home/contact`} className='text-md md:p-0  text-gray-700 font-semibold group transition-all duration-1000 ease-in-out relative'>
              <div className="w-3 left-1/2 -translate-x-1/2 group-hover:translate-y-4 group-hover:translate-x-10 transition-transform duration-300 ease-in-out h-3  absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 -translate-x-1/2 group-hover:-translate-y-4 group-hover:translate-x-5 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className="w-2 h-2 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:-translate-x-10 transition-transform duration-300 ease-in-out absolute rounded-full bg-[#ff003c] scale-0 group-hover:scale-100"></div>
              <div className='relative z-5 md:p-0 p-1 group-hover:text-[#ff003c]'>
                Contact
              </div>
            </Link>
          </div>
          <div onClick={() => setActive(!active)} className={`flex justify-center cursor-pointer items-center rounded-md w-10 h-10 relative md:me-0 me-auto`}>
            <p className="absolute -top-3 right-0 text-[#ff003c] rounded-full z-10 w-7 h-7 flex justify-center items-center bg-[#ebedeb]">{cartItems.length > 0 ? cartItems.length : 0}</p>
            <ShoppingCartIcon size={28} className='relative' />
          </div>
          <div className="w-[35px] md:hidden block relative cursor-pointer h-5" onClick={() => setNavActive(!navActive)}>
            <div className={`absolute transition-transform duration-200 ease-in-out left-0 top-2 bg-[#1a1a1a] w-full h-[1px] ${navActive ? 'rotate-45 origin-center -translate-y-2' : ''}`}></div>
            <div className={`absolute transition-transform duration-200 ease-in-out left-0 top-0 bg-[#1a1a1a] w-full h-[1px] ${navActive ? '-rotate-45 origin-center' : ''}`}></div>
          </div>
        </div>
        <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] backdrop-blur-md z-[99999] ${checkoutActive ? 'block' : 'hidden'}`}></div>
        <div ref={checkoutRef} className={`md:w-[40rem] md:h-[30rem] w-full shadow-xl left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[999999] rounded-3xl fixed bg-[#ff003c] p-5 ${checkoutActive ? 'block' : 'hidden'}`}>
          <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='md:w-52 w-32 absolute md:top-32 top-40 md:right-20 right-10 md:block hidden' />
          <div ref={closeRef} onClick={() => setCheckoutActive(false)} className="absolute -bottom-[50] left-1/2 -translate-x-1/2 flex justify-center items-center bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full cursor-pointer">
            <div className="w-[70%] rotate-45 h-[0.5px] bg-white absolute"></div>
            <div className="w-[70%] h-[0.5px] -rotate-45 bg-white absolute"></div>
          </div>
          <p className="text-white text-3xl text-center my-3">List of Orders</p>
          <div className="grid md:grid-cols-2 h-[100%]">
              {cartItems.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p className='text-white'>There are no orders yet!</p>
                  </div>
              ) : (
                <div className='flex flex-col gap-3 px-5'>
                  <ol className="flex flex-col gap-3 list-decimal h-[10rem] overflow-auto" data-lenis-prevent>
                    {cartItems.map((item) => (
                      <li key={item.id} className="text-white relative flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                        {item.name}
                        <div className="absolute top-0 right-0 rounded-full w-7 h-7 bg-white text-[#ff003c] flex justify-center items-center text-[10px]">{item.quantity}</div>
                      </li>
                    ))}
                  </ol>
                  <p className="font-bold border py-3 px-5 shadow-[inset_0_2px_2px_rgba(0,0,0,0.3)] text-[#ff003c] bg-white relative rounded-xl">
                    <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='w-32 absolute -top-7 right-2 md:hidden block' />
                    ₦{getTotalPrice().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              )}
              <div className="flex flex-col justify-center items-center bg-red-5 md:my-0 my-5">
                <p className="text-white text-center">You don't want to turn back now! <br /> Just click the button and get your order delivered to you ASAP</p>
                <button onClick={handlePlaceOrder} className="justify-center w-full flex gap-3 items-center my-3 py-2 rounded-xl bg-[#fff] tracking-[3px] hover:scale-x-[1.1] transition-transform duration-200 ease-in-out text-black">
                  Place Your Order <FaWhatsapp className='text-[#006838]' />
                </button>
              </div>
          </div>
        </div>
        <CartComponent active={active} handleActiveClick={() => setActive(false)} handleCheckoutClick={() => setCheckoutActive(true)} />
        {children}
        <CarouselComponent className={`${pathname === '/home/privacy-policy' || pathname === '/home/cookie-policy' || pathname === '/home/terms-conditions' || pathname === '/home/refunds-cancellation' ? 'hidden' : 'flex'}`} />
        <SemiFooterComponent className={`${pathname === '/home/privacy-policy' || pathname === '/home/cookie-policy' || pathname === '/home/terms-conditions' || pathname === '/home/refunds-cancellation' ? 'hidden' : 'flex'}`} />
        <div className={`flex flex-col gap-10 bg-[#ff003c]  md:p-20 p-5 ${pathname === '/home/contact/portharcourt' ? 'hidden' : 'flex'}`}>
          <div className="grid md:grid-cols-5 grid-cols-1">
            <div className="flex flex-col gap-4 flex-shrink-0 md:col-span-2">
              <Link href={`/home`}>
                <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='w-[25%] ' />
              </Link>
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
