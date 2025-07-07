'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { BarLoader } from 'react-spinners'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useCart } from '../context/CartProvider'
import { productItems } from '../components/productItems'
import CardComponent from '../components/CardComponent'
import CardComponent2 from '../components/CardComponent2'
import AccordionComponent from '../components/AccordionComponent'
import fourthCardImage from '@/images/fourthCardImage.jpg'
import fifthCardImage from '@/images/fifthCardImage.jpg'
import sixthCardImage from '@/images/sixthCardImage.jpg'
import seventhCardImage from '@/images/seventhCardImage.jpg'
import eightCardImage from '@/images/eightCardImage.jpg'
import portHarcourt from '@/images/portHarcourt.jpg'
import Oyigbo from './../../images/Oyigbo.jpg'
import eleme from '@/images/eleme.jpeg'
import obioAkpor from '@/images/obioAkpor.jpeg'
import { FaChevronDown, FaTimes } from 'react-icons/fa'
import containerBackground from '@/images/backgroundImage.jpg'
import shawarma from '@/images/shawarma.png'
import pepper from '@/images/pepper.png'
import carrot from '@/images/carrot.png'
import leaf from '@/images/leaf.png'
import leaf2 from '@/images/leaf2.png'
import chicken from '@/images/chicken.png'
import onion from '@/images/onion.png'
import LocationCardComponent from '../components/LocationCardComponent'
import chopLifeLogo from '@/images/chopLifeLogo.png'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const page = () => {
  const [location, setLocation] = useState('')
  const rotationTriggerRef = useRef(null); 
  const rotationTriggerRef2 = useRef(null); 
  const rotationTriggerRef3 = useRef(null);
  const rotationCardRef = useRef(null);   
  const rotationCardRef2 = useRef(null);   
  const rotationCardRef3 = useRef(null);   
  const rotationCardRef4 = useRef(null);   
  const rotationCardRef5 =useRef(null); 
  const rotationCardRef7 =useRef(null); 
  const rotationCardRef8 =useRef(null); 
  const translateYRef = useRef(null);  
  const translateYRef1 = useRef(null);  
  const translateYRef2 = useRef(null);  
  const translateYRef3 = useRef(null);  
  const translateYRef4 = useRef(null);  
  const translateYRef5 = useRef(null);  
  const translateYRef6 = useRef(null);  
  const translateYRef7 = useRef(null);  
  const container = useRef(null);
  const { addItemToCart } = useCart();
  const [addToCart, setAddToCart] = useState(false);
  const progressBarRef = useRef(null)

  // Dot navigation logic: Map original data to actual indices in carouselSlide
  useEffect(() => {
    if(container.current) {
      const q = gsap.utils.selector(container.current)
      const items = q('.moveup')
      const items2 = q('.movedown');
      const reloadItems = q('.reloadmovedown');
      const reloadmovedownmobile1 = q('.reloadmovedownmobile1');
      const reloadmovedown1 = q('.reloadmovedown1');
      const reloadmovedown2 = q('.reloadmovedown2');
      const reloadmovedownmobile3 = q('.reloadmovedownmobile3');
      const reloadmovedown3 = q('.reloadmovedown3');
      const reloadmovedown4 = q('.reloadmovedown4');
      const reloadmovedownmobile = q('.reloadmovedownmobile');
      const reloadmovedown5 = q('.reloadmovedown5');
      const reloadmovedown6 = q('.reloadmovedown6');
      const reloadmovedown7 = q('.reloadmovedown7');
      const reloadmovedownmobile2 = q('.reloadmovedownmobile2');
      const reloadmovedown8 = q('.reloadmovedown8');
      const reloadmovedown9 = q('.reloadmovedown9');
      const reloadmovedownmobile4 = q('.reloadmovedownmobile4');
      const reloadItems2 = q('.reloadscale')
      const tl = gsap.timeline({defaults: {ease: 'power3.out'} })
      tl.to(reloadItems, {scale: 1, top: "20%", duration: 1}, "<0").to(reloadmovedownmobile1, {scale: 1, top: " 30%", duration: 1}, "<0").to(reloadmovedown1, {scale: 1, top: "20%", duration: 1}, "<0").to(reloadmovedown3, {scale: 1, right: "5%", duration: 1}, "<0").to(reloadmovedown4, {scale: 1, right: "-5%", duration: 1}, "<0").to(reloadmovedownmobile, {scale: 1, right: "-15%", duration: 1}, "<0").to(reloadmovedown5, {scale: 1, bottom: "-5%", duration: 1}, "<0").to(reloadmovedown2, {scale: 1, top: "10%", duration: 1}, "<0").to(reloadmovedownmobile3, {scale: 1, top: "15%", duration: 1}, "<0").to(reloadmovedown6, {scale: 1, bottom: "10%", duration: 1}, "<0").to(reloadmovedown7, {scale: 1, rotate: "140deg", left: 0, duration: 1}, "<0").to(reloadmovedownmobile2, {scale: 1, rotate: "140deg", left: 0, bottom: "-10%", duration: 1}, "<0").to(reloadmovedown8, {scale: 1, rotate: "60deg", top: "45%", duration: 1}, "<0").to(reloadmovedown9, {scale: 1, bottom: "-520px", duration: 1}, "<0").to(reloadmovedownmobile4, {scale: 1, bottom: "-530px", duration: 1}, "<0").to(reloadItems2, {scale: 1, duration: 1}, "<0")
      const animation = gsap.to(items, {
        y: -20, 
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
      const animation2 = gsap.to(items2, {
        y: -10, 
        duration: 5,
        repeat: -1,
        delay: 2,
        yoyo: true,
        ease: 'power1.inOut'
      })
      return () => {
        animation.kill()
        animation2.kill()
        tl.kill()
      }
    }
  }, [])

  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (rotationTriggerRef.current && rotationCardRef.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef.current, {
        rotation: 15, // Animate rotation from 0 to 360 degrees
        ease: "none", // Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: rotationTriggerRef.current, // This element will trigger the animation
          start: "top center", 
          end: "max",
          scrub: 3,
          invalidateOnRefresh: true, 
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === rotationTriggerRef.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (rotationTriggerRef.current && rotationCardRef2.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef2.current, {
        rotation: 15, // Animate rotation from 0 to 360 degrees
        ease: "none", // Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: rotationTriggerRef.current, // This element will trigger the animation
          start: "top center", 
          end: "max",
          scrub: 3,
          invalidateOnRefresh: true, 
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === rotationTriggerRef.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (rotationTriggerRef2.current && rotationCardRef3.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef3.current, {
        rotation: 15, // Animate rotation from 0 to 360 degrees
        ease: "none", // Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: rotationTriggerRef2.current, // This element will trigger the animation
          start: "top center", 
          end: "max",
          scrub: 3,
          invalidateOnRefresh: true, 
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === rotationTriggerRef.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (rotationTriggerRef3.current && rotationCardRef4.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef4.current, {
        rotation: 15, // Animate rotation from 0 to 360 degrees
        ease: "none", // Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: rotationTriggerRef3.current, // This element will trigger the animation
          start: "top center", 
          end: "max",
          scrub: 3,
          invalidateOnRefresh: true, 
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === rotationTriggerRef.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (rotationTriggerRef3.current && rotationCardRef5.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef5.current, {
        rotation: 15, // Animate rotation from 0 to 360 degrees
        ease: "none", // Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: rotationTriggerRef3.current, // This element will trigger the animation
          start: "top center", 
          end: "max",
          scrub: 3,
          invalidateOnRefresh: true, 
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === rotationTriggerRef.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    if (!translateYRef1.current) return;
    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    // Infinite up/down movement (sine wave for smoothness)
    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * 20; // 40px up/down
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    // Scroll-based Y movement
    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // up to 120px down
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef1.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    // Only run on mobile screens
    const isMobile = window.matchMedia('(min-width: 767px)').matches;
    if (!isMobile || !translateYRef.current) return;

    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * -20;
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // Inverted for mobile
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    // Only run on mobile screens
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile || !translateYRef4.current) return;

    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * -20;
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // Inverted for mobile
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef4.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    if (!translateYRef5.current) return;

    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * -20;
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // Inverted for mobile
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef5.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    if (!translateYRef7.current) return;
    let scrollY = { value: 0 };
    let rafId;

    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // Inverted for mobile
        setCombined();
      }
    });

    function setCombined() {
      gsap.set(translateYRef7.current, { y: scrollY.value });
    }

    return () => {
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    if (!translateYRef6.current) return;

    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * -20;
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // Inverted for mobile
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef6.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    if (!translateYRef3.current) return;
    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    // Infinite up/down movement (sine wave for smoothness)
    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * 20; // 40px up/down
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    // Scroll-based Y movement
    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // up to 120px down
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef3.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    if (!translateYRef2.current) return;
    let infiniteY = { value: 0 };
    let scrollY = { value: 0 };
    let rafId;

    // Infinite up/down movement (sine wave for smoothness)
    const updateInfinite = () => {
      infiniteY.value = Math.sin(Date.now() / 3000) * -10; // 40px up/down
      setCombined();
      rafId = requestAnimationFrame(updateInfinite);
    };

    // Scroll-based Y movement
    let st = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: self => {
        scrollY.value = self.progress * -120; // up to 120px down
        setCombined();
      }
    });

    function setCombined() {
      const total = infiniteY.value + scrollY.value;
      gsap.set(translateYRef2.current, { y: total });
    }

    rafId = requestAnimationFrame(updateInfinite);

    return () => {
      cancelAnimationFrame(rafId);
      st && st.kill();
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (container.current && rotationCardRef7.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef7.current, { // Animate rotation from 0 to 360 degrees
        ease: "none",
        rotation: 360,// Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: container.current,
          start: "top center", 
          end: "=+21000",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);
  useEffect(() => {
    // Ensure both refs are available before creating the ScrollTrigger
    if (container.current && rotationCardRef8.current) {
      // Create a ScrollTrigger that animates the rotation of rotationCardRef
      // when rotationTriggerRef scrolls into view.
      gsap.to(rotationCardRef8.current, { // Animate rotation from 0 to 360 degrees
        ease: "none",
        rotation: 360,// Linear animation tied directly to scroll
        scrollTrigger: {
          trigger: container.current,
          start: "top center", 
          end: "=+21000",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container.current || trigger.trigger === document.body) { 
          trigger.kill();
        }
      });
    };
  }, []);

  const handledCartClick = useCallback((items) => {
    addItemToCart(items);
    setAddToCart(true);
    const timeout = setTimeout(() => {
      setAddToCart(false);
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [addItemToCart])

  useEffect(() => {
    if(addToCart) {
      gsap.fromTo(progressBarRef.current, {
        width: '0%',
      }, {
        width: '100%',
        duration: 1,
        ease: 'power1.in'
      })
    }
  }, [addToCart])

  return (
    <>
      <div className={`fixed bottom-10 md:right-20 right-5 flex gap-3 z-40 bg-white md:w-[20%] p-3 rounded-t-xl items-center ${addToCart ? 'scale-x-100' : 'scale-x-0'} transition-all duration-500 ease-in-out`}>
        <Image src={chopLifeLogo} width={1000} height={1000} className='w-20' alt='chop life logo' />
        <p className="text-sm">Item Added Successfully</p>
        <div ref={progressBarRef} className={`absolute h-1 bg-[#ff003c] left-0 bottom-0`} ></div>
      </div>
      <div ref={container}  className="w-full md:h-screen h-[110vh] -z-1 relative overflow-hidden">
        <Image src={containerBackground} width={1000} height={1000} alt='container background' className='absolute top-0 left-0 w-full h-full' />
        <div className='backdrop-blur-lg flex items-center justify-center h-screen w-full md:p-10 p-5 relative'>
        <Image ref={translateYRef4} src={leaf} width={1000} height={1000} alt='leaf' className='absolute md:hidden block movedown reloadmovedownmobile1 top-[-20%] scale-50 left-[2%] w-[22%]' />
        <Image src={leaf} width={1000} height={1000} alt='leaf' className='absolute movedown md:block hidden reloadmovedown top-[-20%] scale-50 left-[2%] w-[12%]' />
        <Image src={pepper} width={1000} height={1000} alt='leaf' className='absolute md:block hidden scale-50 moveup reloadmovedown7 rotate-[0deg] top-[35%] left-[-20%] z-10 w-[25%]' />
        <Image src={pepper} ref={translateYRef5} width={1000} height={1000} alt='leaf' className='absolute scale-50 md:hidden block moveup rotate-[0deg] top-[68%] left-[-30%] reloadmovedownmobile2 z-10 w-[55%]' />
        <Image src={shawarma} ref={rotationCardRef8} width={1000} height={1000} alt='leaf' className='absolute bottom-[-1020px] left-1/2 -translate-x-1/2 min-w-[55rem] reloadmovedownmobile4' />
        <Image src={carrot} width={1000} height={1000} alt='leaf' className='absolute md:block hidden movedown reloadmovedown1 top-[-20%] scale-50 -rotate-[60deg] left-[20%] w-[3%]' />
        <Image ref={translateYRef2} src={chicken} width={1000} height={1000} alt='leaf' className='absolute md:block hidden reloadmovedown8 moveup top-[90%] rotate-[30deg] scale-50 left-32 w-[20%]' />
        <Image ref={translateYRef1} src={leaf2} width={1000} height={1000} alt='leaf' className='absolute md:block hidden moveup bottom-[-25%] reloadmovedown5 right-[2%] w-[12%]' />
        <Image src={pepper} width={1000} height={1000} alt='leaf' className='absolute movedown md:block hidden reloadmovedown2 top-[-10%] scale-50 right-[15%] z-10 w-[15%] h-40' />
        <Image src={pepper} width={1000} height={1000} alt='leaf' className='absolute md:hidden block movedown reloadmovedownmobile3 top-[-10%] scale-50 right-[15%] z-10 w-[15%]' />
        <Image ref={translateYRef3} src={carrot} width={1000} height={1000} alt='leaf' className='absolute md:block hidden reloadmovedown3 moveup top-[50%] right-[-10%] -rotate-[25deg] w-[6%]' />
        <Image src={chicken} width={1000} height={1000} alt='leaf' className='absolute movedown md:block hidden reloadmovedown4 md:top-[30%] top-[60%] right-[-45%] md:w-[20%] w-[40%]' />
        <Image ref={translateYRef6} src={chicken} width={1000} height={1000} alt='leaf' className='absolute movedown md:hidden block reloadmovedownmobile md:top-[30%] top-[65%] right-[-45%] md:w-[20%] w-[40%]' />
        <div className="flex justify-center flex-col md:gap-0 gap-3 items-center reloadscale scale-50">
          <h1 className='md:text-[5rem] text-[3rem] font-bold text-[#ff003c] md:leading-[4rem] leading-[2rem]'>Chop Life <span className='text-[#1a1a1a]'>O...</span></h1>
          <h1 className='md:text-[5rem] text-[2.5rem] font-bold text-[#1a1a1a]'>You Deserve it!</h1>
          <p className="md:text-lg mb-5 md:w-[60%] text-center text-[#6e6e6e]">Delicious meals made with love and spice - from spicy noodles to juicy shawarma and crispy yam chips. Order now, we deliver fast!</p>
          <Link href={`/home/menu`}>
            <button className='bg-[#ff003c] hover:scale-[1.05] transition-transform duration-200 ease-in-out rounded-3xl py-2 px-8 text-xl text-white'>View Our Menu</button>
          </Link>
        </div>
        </div>
      </div>
      <div className='bg-[#fff5f7] w-full md:p-20 py-5'>
        <div className="flex flex-col gap-10">
          <h1 className="md:text-5xl text-4xl font-bold md:pt-3 pt-10 text-center text-[#1a1a1a] mb-10">Your Favourites</h1>
          <div className="grid md:grid-cols-3 md:gap-5">
            {productItems.slice(0, 3).map((items) => (
              <CardComponent handleClick={() => handledCartClick(items)} key={items.id} src={items.image} title={items.name} description={items.description} order={`Order Now`} amount={items.amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })} />
            ))}
          </div>
        </div>
        <Link href={`/home/menu`}>
          <div className="flex justify-center w-full">
            <button className="bg-[#1a1a1a] hover:bg-[#ff003c] hover:scale-[1.01] transition-all duration-200 rounded-3xl mx-auto py-3 px-8 text-xl text-white font-semibold mb-20">View full menu</button>
          </div>
        </Link>
        <div className="flex flex-col gap-10">
          <h1 className="md:text-5xl text-3xl md:px-0 px-[60px] font-bold text-center">Hot Food, Hotter Deals</h1>
          <p className="text-xl font-light text-center">Our meals are made fresh daily with quality ingredients, generous portions, and unbeatble flavor.</p>
          <div className="grid md:grid-cols-2 gap-5" ref={rotationTriggerRef}>
            {productItems.slice(3, 5).map((item) => {
              return (
                <CardComponent2 
                  key={item.id}
                  ref={item.bgColor === '#ff003c' ? rotationCardRef : rotationCardRef2}
                  title={item.name}
                  bottom={item.bottom}
                  src={item.image}
                  description={item.description1}
                  spices={item.description2}
                  order='Order Now'
                  amount={`₦${item.amount.toLocaleString()}`}
                  lightAmount={`- Save ₦${item.save.toLocaleString()}`}
                  bg={`${item.bgColor === '#ff003c' ? 'bg-[#ff003c]' : 'bg-[#ffcc00]'}`}
                  textClass={`${item.bgColor === '#ff003c' ? 'text-white' : 'text-black'}`}
                  black={`${item.bgColor === '#ff003c' ? 'bg-white' : 'bg-black'}`}
                  handleClick={() => handledCartClick(item)}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-1" ref={rotationTriggerRef2}>
            {productItems.slice(5, 6).map((item) => (
              <CardComponent2
                key={item.id}
                ref={item.bgColor === '#1a1a1a' ? rotationCardRef3 : null}
                title={item.name}
                bottom={item.bottom}
                src={item.image}
                description={item.description1}
                spices={item.description2}
                order='Order Now'
                amount={`₦${item.amount.toLocaleString()}`}
                lightAmount={`- Save ₦${item.save.toLocaleString()}`}
                bg={`bg-[${item.bgColor}]`}
                textClass={`${item.bgColor === '#1a1a1a' ? 'text-white' : 'text-black'}`}
                black={`${item.bgColor === '#1a1a1a' ? 'bg-white' : 'bg-black'}`}
                handleClick={() => handledCartClick(item)}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 items-start" ref={rotationTriggerRef3}>
            {productItems.slice(6, 8).map((item) => (
              <CardComponent2
                key={item.id}
                ref={item.bgColor === '#0a9900' ? rotationCardRef4 : rotationCardRef5}
                title={item.name}
                bottom={item.bottom}
                src={item.image}
                description={item.description1}
                spices={item.description2}
                order='Order Now'
                amount={`₦${item.amount.toLocaleString()}`}
                lightAmount={`- Save ₦${item.save.toLocaleString()}`}
                bg={`${item.bgColor === '#0a9900' ? 'bg-[#0a9900]' : 'bg-[#ff9100]'}`}
                handleClick={() => handledCartClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={`bg-white fixed flex justify-center items-center w-full h-full z-40 top-0 left-0 ${location ? 'flex' : 'hidden'}`}> 
        <div onClick={() => setLocation('')} className="absolute cursor-pointer top-5 right-5 rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-md bg-white">
          <FaTimes className='text-2xl' />
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
      <div className='w-full relative h-full'> 
        <Image src={containerBackground} width={1000} height={1000} alt='container background' className='absolute top-0 left-0 w-full h-full' />
        <div className="flex flex-col gap-5 relative md:p-20 p-2 backdrop-blur-lg">
          <h1 className="md:text-5xl text-3xl font-bold text-center text-[#1a1a1a] mb-10">We'd Love to Hear From You!</h1>
          <p className="text-xl text-center">Locate our stores, check delivery zones, and pick the best option for you!</p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
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
