'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { FaTimes, FaWhatsapp } from 'react-icons/fa'
import { useCart } from '@/app/context/CartProvider'
import { gsap } from 'gsap'
import Link from 'next/link'
import ReactWhatsapp from 'react-whatsapp'
import chicken from '@/images/chicken.png'
import chopLifeLogo from '@/images/chopLifeLogo.png'

const page = () => {
  const { cartItems, removeItemFromCart, removeAllCartItem, updateItemQuantity, getTotalPrice } = useCart();
  const [checkoutActive, setCheckoutActive] = useState(false);
  const checkoutRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if(checkoutActive) {
      gsap.from(checkoutRef.current, {
        y: '-30%',
        duration: 0.2,
        ease: 'power2.inOut'
      });
      gsap.from(closeRef.current, {
        y: '-10%',
        duration: 0.5,
        ease: "power4.inOut"
      })
    } 
  }, [checkoutActive])

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

  return (
    <div className='my-32 relative'>
      <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] backdrop-blur-md z-[99] ${checkoutActive ? 'block' : 'hidden'}`}></div>
      <div ref={checkoutRef} className={`md:w-[40rem] md:h-[30rem] w-full shadow-xl left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-[999] rounded-3xl fixed bg-[#ff003c] p-5 ${checkoutActive ? 'block' : 'hidden'}`}>
        <Image src={chopLifeLogo} width={1000} height={1000} alt='chop life logo' className='md:w-52 w-32 absolute md:top-32 top-40 md:right-20 right-10 md:block hidden' />
        <div ref={closeRef} onClick={() => setCheckoutActive(false)} className="absolute -bottom-[50] left-1/2 -translate-x-1/2 flex justify-center items-center bg-[rgba(0,0,0,0.5)] w-10 h-10 rounded-full cursor-pointer">
          <div className="w-[70%] rotate-45 h-[0.5px] bg-white absolute"></div>
          <div className="w-[70%] h-[0.5px] -rotate-45 bg-white absolute"></div>
        </div>
        <h1 className="text-white text-3xl text-center my-3">List of Orders</h1>
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
              <a onClick={() => {setCheckoutActive(false), removeAllCartItem(cartItems.map(item => item.id))}}
                href={`whatsapp://send?phone=2348154610235&text=${generateWhatsAppMessage()}`}
                className='w-full'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className="justify-center w-full flex gap-3 items-center my-3 py-2 rounded-xl bg-[#fff] tracking-[3px] hover:scale-x-[1.1] transition-transform duration-200 ease-in-out text-black">
                  Place Your Order <FaWhatsapp className='text-[#006838]' />
                </button>
              </a>
            </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 p-5 h-full items-center">
          {cartItems.length === 0 ? (
            <div className="flex justify-center items-center">
                <p>Your cart is empty.</p>
            </div>
          ) : (  
            <div className="flex flex-col gap-3" style={{
              touchAction: 'pan-y'
            }}>
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-center justify-between p-3 relative">
                  <Image alt='first card image' src={item.image} width={1000} height={1000} className='md:w-32 w-20 h-20 object-cover rounded-xl' />
                  <div className="flex flex-col justify-between h-full flex-grow">
                    <div className="flex flex-col">
                      <p>{item.name}</p>
                      <p>
                        ₦{typeof item.amount === 'number' ?
                          item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) :
                          'Invalid Price'}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center\">
                      <p onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='cursor-pointer'>—</p>
                      <p className='border rounded-md px-3 py-1'>{item.quantity}</p>
                      <p onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className={`text-lg cursor-pointer`}>+</p>
                    </div>
                  </div>
                  <div onClick={() => removeItemFromCart(item.id)} className="flex justify-center relative cursor-pointer items-center rounded-full p-1 w-8 h-8 text-white bg-[#0000008f] backdrop-blur-md">
                    <div className="w-[70%] rotate-45 h-[0.5px] bg-white absolute"></div>
                    <div className="w-[70%] h-[0.5px] -rotate-45 bg-white absolute"></div>
                  </div>
                </div>
              ))}
              <p className="my-3 font-bold text-xl"><span className="font-lighter">Total:</span> ₦{getTotalPrice().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          )}
        <div className="flex gap-2 items-center flex-col justify-center relative">
          <Image src={chicken} alt='chicken' width={1000} height={1000} className='w-1/2 absolute top-0 opacity-50' />
          <button onClick={() => setCheckoutActive(!checkoutActive)} className='bg-[#ff003c]  hover:bg-[#ffffff87] hover:border backdrop-blur-md hover:text-black transition-background duration-200 ease-in-out p-3 w-full text-white tracking-[5px] rounded-xl relative'>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default page
