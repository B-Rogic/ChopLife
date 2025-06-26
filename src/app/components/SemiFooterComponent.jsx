'use client'
import React, {useRef, useEffect, forwardRef} from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import messageBackground from '@/images/messageBackground.jpg'
import containerBackground from '@/images/backgroundImage.jpg'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const SemiFooterComponent = ({className}) => {
  const rotationTriggerRef4 = useRef(null) 
  const rotationCardRef6 = useRef(null);
  useEffect(() => {
      if (!rotationCardRef6.current) return;
      let infiniteRotation = { value: 0 };
      let scrollRotation = { value: 0 };
      let rafId;
  
      // Infinite rotation via requestAnimationFrame
      const updateInfinite = () => {
        infiniteRotation.value += 0.05; // speed (deg per frame)
        setCombined();
        rafId = requestAnimationFrame(updateInfinite);
      };
  
      // Scroll-based rotation via ScrollTrigger
      let st = ScrollTrigger.create({
        trigger: rotationTriggerRef4.current,
        start: 'top center',
        end: 'max',
        scrub: 3,
        onUpdate: self => {
          scrollRotation.value = self.progress * 30; // up to 30deg extra
          setCombined();
        }
      });
  
      function setCombined() {
        const total = infiniteRotation.value + scrollRotation.value;
        gsap.set(rotationCardRef6.current, { rotate: total });
      }
  
      rafId = requestAnimationFrame(updateInfinite);
  
      return () => {
        cancelAnimationFrame(rafId);
        st && st.kill();
      };
    }, []);

  return (
    <div ref={rotationTriggerRef4} className={`relative ${className}`}>
        <Image src={containerBackground} width={1000} height={1000} alt='message background' className='w-full h-full absolute top-0 left-0 ' />
        <div className="grid md:grid-cols-2 backdrop-blur-lg w-full md:p-20 p-5">
            <div className="w-[90%] h-full overflow-hidden">
            <Image 
              ref={rotationCardRef6}
              src={messageBackground} 
              width={1000} 
              height={1000} 
              alt='message relative z-20 background' 
              className='w-full object-cover md:block hidden h-full rotateAnimation' 
            />
            </div>
            <div className="flex flex-col md:gap-10 gap-4 md:my-0 my-5">
            <h1 className='md:text-6xl text-3xl md:mt-0 mt-10 font-bold'>Delicious Deals, <br /> Just for You</h1>
            <p className="text-xl">Sign up for our newsletter and receive exclusive offers on new menus</p>
            <label htmlFor="email">
                <input className='w-full rounded-3xl bg-white p-3 px-10' type="email" name="email" id="email" placeholder='youremail@email.com' />
            </label>
            <button className='bg-[#ff003c] p-3 w-full text-white text-xl rounded-3xl'>Submit</button>
            </div>
            <div className="w-[90%] h-full overflow-hidden rounded-xl">
            <Image src={messageBackground} width={1000} height={1000} alt='message relative background' className='w-full object-cover md:hidden block h-full' />
            </div>
        </div>
    </div>
  );
};

export default SemiFooterComponent;