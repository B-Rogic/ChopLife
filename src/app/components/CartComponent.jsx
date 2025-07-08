import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { useCart } from '../context/CartProvider'
import Link from 'next/link'
import Image from 'next/image'
import shawarma from "@/images/shawarma.png"
import chopLifeLogo from '@/images/chopLifeLogo.png'
import chicken from '@/images/chicken.png'

const CartComponent = ({ active = false, handleActiveClick, handleCheckoutClick }) => {
  const cartContainerRef = useRef(null)
  const shawarmaRef = useRef(null)
  const {cartItems, removeItemFromCart, updateItemQuantity, getTotalPrice} = useCart()

  useEffect(() => {
    if(active) {
      gsap.fromTo(shawarmaRef.current, {
        x: '50%',
      }, {
        x: '0%',
        duration: 0.5,
      })
    } 
  }, [active])

  return (
    <>
      <div className={`fixed left-0 top-0 w-full h-screen z-[999] bg-[rgba(0,0,0,0.2)] backdrop-blur-sm ${active ? 'block' : 'hidden'}`}>
        <Image ref={shawarmaRef} src={shawarma} alt='shawarma' width={1000} height={1000} className='md:relative absolute md:-left-0 -left-1/2 md:translate-y-0 md:top-0 top-1/2 -translate-y-1/2' />
      </div>
      <div ref={cartContainerRef} className={`fixed bottom-0 bg-white overflow-y-auto transition-height duration-200 ease-in-out right-0 h-screen z-[9999] ${active ? 'md:w-[40vw] w-[90vw]' : 'w-0'}`} data-lenis-prevent>
        <div onClick={handleActiveClick} className="flex justify-center cursor-pointer absolute top-3 left-3 items-center rounded-full p-1 w-8 h-8 text-white bg-[#0000008f] backdrop-blur-md">
          <div className="w-[70%] rotate-45 h-[0.5px] bg-white absolute"></div>
          <div className="w-[70%] h-[0.5px] -rotate-45 bg-white absolute"></div>
        </div>
        <div className="flex justify-between items-center p-3">
          <h1 className="text-center font-bold text-xl mx-auto">YOUR CART</h1>
          <Image src={chopLifeLogo} alt='chop life logo' width={1000} height={1000} className='md:w-40 w-20' />
        </div>
        <div className="flex flex-col justify-between gap-5 p-2 h-full">
            {cartItems.length === 0 ? (
              <div className="flex justify-center items-center">
                  <p>Your cart is empty.</p>
              </div>
            ) : (  
              <div className="flex flex-col gap-3 overflow-auto h-[100%]" style={{
                touchAction: 'pan-y'
              }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center justify-between p-3 relative">
                    <Image alt='first card image' src={item.image} width={1000} height={1000} className='md:w-32 w-20 h-20 object-cover rounded-xl' />
                    <div className="flex flex-col justify-between h-full me-auto">
                      <div className="flex flex-col">
                        <p>{item.name}</p>
                        <p>
                          ₦{typeof item.amount === 'number' ?
                            item.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) :
                            'Invalid Price'}
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
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
                <h2 className="my-3 font-bold text-xl"><span className="font-lighter">Total:</span> ₦{getTotalPrice().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
              </div>
            )}
          <div className="flex gap-2 items-center flex-col justify-center h-full relative">
            <Image src={chicken} alt='chicken' width={1000} height={1000} className='w-1/2 absolute top-0 opacity-50' />
            <button onClick={handleCheckoutClick} className='bg-[#ff003c]  hover:bg-[#ffffff87] hover:border backdrop-blur-md hover:text-black transition-background duration-200 ease-in-out p-3 w-full text-white tracking-[5px] rounded-xl relative'>CHECKOUT</button>
            <Link onClick={handleActiveClick} href={`/home/cart`}  className='w-full'>
              <button className='bg-[#ffffff87] backdrop-blur-md p-3 w-full text-black hover:bg-[#ff003c] hover:text-white transition-background duration-200 ease-in-out tracking-[5px] rounded-xl relative border hover:border-none'>VIEW CART</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartComponent
