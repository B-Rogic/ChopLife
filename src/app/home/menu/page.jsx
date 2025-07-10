'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { productItems } from '@/app/components/productItems'
import { useCart } from '@/app/context/CartProvider'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import containerBackground from '@/images/backgroundImage.jpg'
import pizza from '@/images/pizza.png'
import sides from '@/images/sides.png'
import drinks from '@/images/drinks.png'
import tomato from '@/images/tomato.png'
import leaf from '@/images/leaf.png'
import chopLifeLogo from '@/images/chopLifeLogo.png'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const page = () => {
    const [activeFilter, setActiveFilter] = useState('fullmenu');
    const containerRef = useRef(null);
    const child1Ref = useRef(null);
    const child2Ref = useRef(null);
    const { addItemToCart } = useCart();
    const [addToCart, setAddToCart] = useState(false);
    const progressBarRef = useRef(null)
    const inputRef = useRef(null);
    const [filteredData, setFilteredData] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (containerRef.current) {
            const wrapper = gsap.utils.selector(containerRef.current);
            const reloadAnimation = wrapper('.reloadAnimation');
            const reloadAnimation1 = wrapper('.reloadAnimation1');
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            if (window.innerWidth <= 568) {
                tl.to(reloadAnimation, { right: '20%', opacity: 1, scale: 1, duration: 1 }, "<0").to(reloadAnimation1, { top: '0%', opacity: 1, scale: 1, duration: 1 }, "<0");
            }
            tl.to(reloadAnimation, { right: '20%', opacity: 1, scale: 1, duration: 1 }, "<0").to(reloadAnimation1, { top: '0.1%', opacity: 1, scale: 1, duration: 1 }, "<0");
            return () => tl.kill()
        }
    }, [])

    const scrollToTop = (e) => {
        if(activeFilter) {
            if(window.scrollY > 0) {
                window.scrollTo({top: 0, behavior: 'smooth'})
                console.log('working')
            }
        }
    }

    useEffect(() => {
        if (!child1Ref.current) return;

        let infiniteY = { value: 0 };
        let scrollY = { value: 0 };
        let rafId;

        const updateInfinite = () => {
            infiniteY.value = Math.sin(Date.now() / 3000) * -20;
            setCombined();
            rafId = requestAnimationFrame(updateInfinite);
        };

        let st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onUpdate: self => {
                if (window.innerWidth <= 768) {
                    scrollY.value = self.progress * 520; // Inverted for mobile
                }
                scrollY.value = self.progress * 2020; // Inverted for mobile
                setCombined();
            }
        });

        function setCombined() {
            const total = infiniteY.value + scrollY.value;
            gsap.set(child1Ref.current, { y: total });
        }

        rafId = requestAnimationFrame(updateInfinite);

        return () => {
            cancelAnimationFrame(rafId);
            st && st.kill();
        };
    }, []);
    useEffect(() => {
        if (!child2Ref.current) return;

        let infiniteY = { value: 0 };
        let scrollY = { value: 0 };
        let rafId;

        const updateInfinite = () => {
            infiniteY.value = Math.sin(Date.now() / 3000) * -20;
            setCombined();
            rafId = requestAnimationFrame(updateInfinite);
        };

        let st = ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onUpdate: self => {
                if (window.innerWidth <= 768) {
                    scrollY.value = self.progress * 3020; // Inverted for mobile
                }
                scrollY.value = self.progress * 5020; // Inverted for mobile
                setCombined();
            }
        });

        function setCombined() {
            const total = infiniteY.value + scrollY.value;
            gsap.set(child2Ref.current, { y: total });
        }

        rafId = requestAnimationFrame(updateInfinite);

        return () => {
            cancelAnimationFrame(rafId);
            st && st.kill();
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

    const handleInput = () => {
        const searchValue = inputRef.current.value.toLowerCase();

        if(searchValue === '') {
            setFilteredData([]);
            setIsSearching(false);
        } else{
            const filtered = productItems.filter(item => item.name.toLowerCase().includes(searchValue));
            setFilteredData(filtered);
            setIsSearching(true);
        }
    }

    const handleBack = () => {
        setFilteredData([]);
        setIsSearching(false);
        scrollToTop()
        if(inputRef.current) {
            inputRef.current.value = '';
        }
    }

    return (
        <div className='w-full relative'>
            <div className={`fixed bottom-10 md:right-20 right-5 flex gap-3 z-40 bg-white md:w-[20%] p-3 rounded-t-xl items-center ${addToCart ? 'scale-x-100' : 'scale-x-0'} transition-all duration-500 ease-in-out`}>
                <Image src={chopLifeLogo} width={1000} height={1000} className='w-20' alt='chop life logo' />
                <p className="text-sm">Item Added Successfully</p>
                <div ref={progressBarRef} className={`absolute h-1 bg-[#ff003c] left-0 bottom-0`} ></div>
            </div>
            <Image src={containerBackground} alt='container background' width={1000} height={1000} className='w-full h-full absolute top-0 left-0' />
            <div className="grid fixed left-1/2 -translate-x-1/2 top-[110px] z-20 md:w-[90%] w-full md:grid-cols-4 grid-cols-2 gap-3 items-center md:my-0 my-10 md:p-0 p-2">
                <div onClick={() => {setActiveFilter('fullmenu'); scrollToTop()}} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'fullmenu' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                    <p className='mx-auto'>Full Menu</p>
                    <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'fullmenu' ? 'block' : 'hidden'}`}></div>
                </div>
                <div onClick={() => {setActiveFilter('pizza'); scrollToTop()}} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'pizza' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                    <Image src={pizza} alt='pizza' width={100} height={100} className='w-7 h-7' />
                    <p className='mx-auto'>Pizza</p>
                    <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'pizza' ? 'block' : 'hidden'}`}></div>
                </div>
                <div onClick={() => {setActiveFilter('sides'); scrollToTop()}} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'sides' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                    <Image src={sides} alt='pizza' width={100} height={100} className='w-7 h-7' />
                    <p className='mx-auto'>Sides</p>
                    <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'sides' ? 'block' : 'hidden'}`}></div>
                </div>
                <div onClick={() => {setActiveFilter('drinks'); scrollToTop()}} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'drinks' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                    <Image src={drinks} alt='pizza' width={100} height={100} className='w-7 h-7' />
                    <p className='mx-auto'>Drinks</p>
                    <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'drinks' ? 'block' : 'hidden'}`}></div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 w-full md:w-[90%] left-1/2 -translate-x-1/2 fixed md:top-[180px] top-[100px] z-40 items-end md:p-0 p-2">
                <label className='w-full flex items-center gap-2'>
                    <input ref={inputRef} onInput={handleInput} type="text" placeholder="Search..." className="border p-2 rounded-xl bg-white w-full border-none outline-none" />
                </label>
            </div>
            <div ref={containerRef} className="md:p-20 p-5 md:py-32 md:pt-32 pt-72 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
                <Image ref={child2Ref} src={leaf} width={1000} height={1000} alt='leaf' className='md:w-[10%] w-[20%] reloadAnimation1 md:right-[50%] right-[50%] top-[2%] opacity-0 scale-50 absolute' />
                <Image ref={child1Ref} src={tomato} width={1000} height={1000} alt='leaf' className='md:w-[10%] w-[20%] reloadAnimation right-[5%] md:top-[0.6%] top-[0.2%] opacity-0 scale-50 absolute' />
                <div className="md:w-[80%] mb-5">
                    <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Our Menu</h1>
                    <p className="md:text-xl text-sm">From savory pizzas to refreshing drinks, we take pride in serving dishes that are made with care. Every meal is thoughtfully prepared to give you a culinary experience worth remembering.</p>
                </div>
                {isSearching && filteredData.length === 0 ? (
                    <p>No Item Found</p>
                ) : isSearching  && filteredData.length > 0 ? (
                    <>
                        <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                            {filteredData.map((item) => (
                                <div key={item.id} className={`md:p-5 bg-white w-full rounded-2xl relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    <div className="flex gap-8 flex-col md:items-start items-center w-full">
                                        <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                            <Image src={item.image} alt='pepperoni pizza' width={1000} height={1000} className='w-full h-full object-cover' />
                                        </div>
                                        <div className="flex w-full flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                            <p className="text-3xl font-bold">{item.name}</p>
                                            <div className="flex justify-between">
                                                <p className="text-sm font-light">Ingredients</p>
                                                <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-sm font-light">Nutritional Info:</p>
                                                <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                    {(item.nutritionInfo || []).map((info, index) => (
                                                        <div key={index} className="flex gap-5 items-center">
                                                            <div className="w-1 h-1 rounded-full bg-black"></div>
                                                            <p className="text-[12px]">{info}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-sm font-light">Alergens:</p>
                                                <div className="flex flex-col gap-2 w-[60%]">
                                                    <p className='text-[12px]'>{item.alergies}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <button onClick={() => {item.comingSoon ? null : handledCartClick(item); handleBack()}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                    minimumFractionDigits: 2, 
                                                    maximumFractionDigits: 2
                                                })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                            </div>
                                            <div className="flex flex-col gap-2 items-end">
                                                {(item.categories || []).map((category, index) => (
                                                    <p key={index} className="text-[12px] font-light">{category}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        {activeFilter === 'fullmenu' ? (
                            <>
                                <h1 className="text-2xl md:text-5xl font-bold">Pizza</h1>
                                <p className="md:text-xl text-sm">Our pizza menu serves up the perfect blend of cheesy, saucy, and crusty goodness! Choose from classics like Margherita or go bold with Naija inspired flavors like Chicken Suya and Beef Deluxe. Each pizza is handcrafted using fresh dough, premium cheese, and toppings that balance spice and savor in every bite. Whether you're hosting friends, craving a late-night slice, or planning a cozy solo feast, our pizzas are hot, hearty, and unforgettable. Want a full meal? Pair with garlic bread and soda for the ultimate pizza night. Pickup or deliver - your perfect slice is always within reach!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(8, 12).map((item) => (
                                        <div key={item.id} className={`md:p-5 bg-white w-full rounded-2xl relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center w-full">
                                                <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='pepperoni pizza' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex w-full flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h1 className="text-2xl md:text-5xl font-bold">Pasta</h1>
                                <p className="md:text-xl text-sm">Our pasta dishes are more than just comfort food - they're a journey of flavor! From spicy Jollof Pasta and creamy Chicken Alfredo to Seafood Delight and Veggie Penne, each plate is a delicious blend of premium sauces, protein-packed toppings, and perfectly cooked pasta. Whether you're craving bold peppery heat or a smooth, rich, and creamy bite, our pasta bowls hit the spot. Customize with add-ons like grilled chicken or pawns, and pair with a chilled drink for the full experience. Perfect for lunch, dinner, or anytime you want to chop life in style!</p>
                                <div className="grid md:grid-cols-2 md:gap-3 gap-8 md:p-5 p-2">
                                    {productItems.slice(12, 13).map((item) => (
                                        <div key={item.id} className={`md:p-5 p-2 rounded-2xl bg-white w-full relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            <div className="flex gap-8 md:items-start items-center flex-col">
                                                <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='pasta' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5 w-full">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h1 className="text-2xl md:text-5xl font-bold">Sides</h1>
                                <p className="md:text-xl text-sm">No meal is complete without the perfect side! Our side menu offers crispy, golden yam chips, soft boli, spicy pepper chicken, juicy barbecue fish, and irresistible small chops - the ultimate companions to any main dish. Whether you're snacking or sharing, our sides are made fresh and seasoned to perfection, turning even a simple meal into something memorable. Add a portion of pepper beef, fried plantain, or crispy wings to your order and elevate your plate. Ideal for parties, picnics, or just treating yourself. Small bites, big flaor - that's how we do sides!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(13, 32).map((item) => (
                                        <div key={item.id} className={`md:p-5 p-2 rounded-2xl bg-white w-full relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center">
                                                <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5 w-full">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h1 className="text-2xl md:text-5xl font-bold">Drinks</h1>
                                <p className="md:text-xl text-sm">Quench your thirst with our range of perfectly chilled drinks! Whether you're pairing your meal with a classic soda, creamy yoghurt, fruity smoothies, or one of our signature cocktails, we've got something refreshing for every vibe. Each sip is designed to complement the rich flavors of your meal - from spicy shawarma to hearty rice dishes. Hosting a gathering? Our drink options are the perfect finishing touch. Light, fizzy, sweet, or smooth, every bottle or glass is served cold and satisfying. Stay hydrated, stay refreshed - one tasty sip at a time!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(32, -1).map((item) => (
                                        <div key={item.id} className={`md:p-5 p-2 bg-white w-full rounded-2xl relative ${item.comingSoon ? 'opacity-50 pointer-events-none' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center">
                                                <div className="md:w-[100%] w-[105%] rounded-2xl overflow-hidden md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5 w-full">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : activeFilter === 'pizza' ? (
                            <>
                                <h1 className="text-2xl md:text-5xl font-bold">Pizza</h1>
                                <p className="md:text-xl text-sm">Our pizza menu serves up the perfect blend of cheesy, saucy, and crusty goodness! Choose from classics like Margherita or go bold with Naija inspired flavors like Chicken Suya and Beef Deluxe. Each pizza is handcrafted using fresh dough, premium cheese, and toppings that balance spice and savor in every bite. Whether you're hosting friends, craving a late-night slice, or planning a cozy solo feast, our pizzas are hot, hearty, and unforgettable. Want a full meal? Pair with garlic bread and soda for the ultimate pizza night. Pickup or deliver - your perfect slice is always within reach!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(8, 12).map((item) => (
                                        <div key={item.id} className={`md:p-5 bg-white w-full rounded-2xl relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center w-full">
                                                <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='pepperoni pizza' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex w-full flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : activeFilter === 'sides' ? (
                            <>
                                <h1 className="text-2xl md:text-5xl font-bold">Sides</h1>
                                <p className="md:text-xl text-sm">No meal is complete without the perfect side! Our side menu offers crispy, golden yam chips, soft boli, spicy pepper chicken, juicy barbecue fish, and irresistible small chops - the ultimate companions to any main dish. Whether you're snacking or sharing, our sides are made fresh and seasoned to perfection, turning even a simple meal into something memorable. Add a portion of pepper beef, fried plantain, or crispy wings to your order and elevate your plate. Ideal for parties, picnics, or just treating yourself. Small bites, big flaor - that's how we do sides!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(13, 32).map((item) => (
                                        <div key={item.id} className={`md:p-5 p-2 rounded-2xl bg-white w-full relative ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center">
                                                <div className="md:w-[100%] w-[105%] md:h-[30rem] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5 w-full">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : activeFilter === 'drinks' && (
                            <>
                                <h1 className="text-2xl md:text-5xl font-bold">Drinks</h1>
                                <p className="md:text-xl text-sm">Quench your thirst with our range of perfectly chilled drinks! Whether you're pairing your meal with a classic soda, creamy yoghurt, fruity smoothies, or one of our signature cocktails, we've got something refreshing for every vibe. Each sip is designed to complement the rich flavors of your meal - from spicy shawarma to hearty rice dishes. Hosting a gathering? Our drink options are the perfect finishing touch. Light, fizzy, sweet, or smooth, every bottle or glass is served cold and satisfying. Stay hydrated, stay refreshed - one tasty sip at a time!</p>
                                <div className="grid md:grid-cols-2 md:p-5 p-2 md:gap-3 gap-8">
                                    {productItems.slice(32, -1).map((item) => (
                                        <div key={item.id} className={`md:p-5 p-2 bg-white w-full rounded-2xl relative ${item.comingSoon ? 'opacity-50 pointer-events-none' : ''}`}>
                                            <div className="flex gap-8 flex-col md:items-start items-center">
                                                <div className="md:w-[100%] w-[105%] rounded-2xl overflow-hidden md:translate-y-0 translate-y-[-2%]">
                                                    <Image src={item.image} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                                </div>
                                                <div className="flex flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5 w-full">
                                                    <p className="text-3xl font-bold">{item.name}</p>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Ingredients</p>
                                                        <p className="text-[12px] font-light w-[60%]">{item.ingredients}</p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-light">Nutritional Info:</p>
                                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                                            {(item.nutritionInfo || []).map((info, index) => (
                                                                <div key={index} className="flex gap-5 items-center">
                                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                                    <p className="text-[12px]">{info}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <p className="text-sm font-light">Alergens:</p>
                                                        <div className="flex flex-col gap-2 w-[60%]">
                                                            <p className='text-[12px]'>{item.alergies}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <button onClick={() => {item.comingSoon ? null : handledCartClick(item)}} className={`py-2 flex-shrink-0 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl ${item.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}>{item.comingSoon ? 'Coming Soon' : 'Add To Cart'}</button>
                                                        <h3 className="font-semibold text-3xl">₦{item.amount.toLocaleString(undefined, {
                                                            minimumFractionDigits: 2, 
                                                            maximumFractionDigits: 2
                                                        })} <span className="text text-gray-300 text-sm">{item.chicken}</span></h3>
                                                    </div>
                                                    <div className="flex flex-col gap-2 items-end">
                                                        {(item.categories || []).map((category, index) => (
                                                            <p key={index} className="text-[12px] font-light">{category}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default page
