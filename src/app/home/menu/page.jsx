'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import containerBackground from '@/images/backgroundImage.jpg'
import pizza from '@/images/pizza.png'
import sides from '@/images/sides.png'
import drinks from '@/images/drinks.png'
import tomato from '@/images/tomato.png'
import leaf from '@/images/leaf.png'
import pepperoniPizza from '@/images/pepperoniPizza.jpg'
import firecracker from '@/images/firecracker.png'
import garlicSupreme from '@/images/garlicSupreme.png'
import pasta from '@/images/pasta.jpg'
import noodles from '@/images/noodles.jpg'
import beefSharwama from '@/images/beefSharwama.jpg'
import rice from '@/images/rice.jpg'
import pepperedChicken from '@/images/pepperedChicken.jpg'
import jollofRice from '@/images/jollofRice.jpg'
import pepperedBeef from '@/images/pepperedBeef.jpg'
import barbecue from '@/images/barbecue.jpg'
import boli from '@/images/boli.jpg'
import friedRice from '@/images/friedRice.jpg'
import yamEgg from '@/images/yamEgg.jpg'
import buffaloWings from '@/images/buffaloWings.png'
import caesarSalad from '@/images/caesarSalad.png'
import loadedPotato from '@/images/loadedPotato.png'
import chickenChips from '@/images/chickenChips.png'
import bbqBlaze from '@/images/bbqBlaze.jpg'
import yamEggSauce from '@/images/yamEggSauce.jpg'
import chickenSharwama from '@/images/chickenSharwama.png'
import sparklingWater from '@/images/sparklingWater.png'
import classicCola from '@/images/classicCola.png'
import lemonIce from '@/images/lemonIce.png'
import coconutWater from '@/images/coconutWater.png'
import orangeJuice from '@/images/orangeJuice.png'
import strawberySmoothie from '@/images/strawberrySmoothie.png'
import brewCoffee from '@/images/brewCoffee.png'
import chocolate from '@/images/chocolate.png'
import beerFloat from '@/images/beerFloat.png'
import soda from '@/images/soda.png'
import zoboMojitos from '@/images/zoboMojitos.jpg'
import naijaSunrise from '@/images/naijaSunrise.jpg'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const page = () => {
    const [activeFilter, setActiveFilter] = useState('fullmenu');
    const containerRef = useRef(null);
    const child1Ref = useRef(null);
    const child2Ref = useRef(null);
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
    return (
        <div className='w-full relative'>
            <Image src={containerBackground} alt='container background' width={1000} height={1000} className='w-full h-full absolute top-0 left-0' />
            <div ref={containerRef} className="md:p-20 p-5 md:py-32 pt-32 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
                <Image ref={child2Ref} src={leaf} width={1000} height={1000} alt='leaf' className='md:w-[10%] w-[20%] reloadAnimation1 md:right-[50%] right-[50%] top-[2%] opacity-0 scale-50 absolute' />
                <Image ref={child1Ref} src={tomato} width={1000} height={1000} alt='leaf' className='md:w-[10%] w-[20%] reloadAnimation right-[5%] md:top-[0.6%] top-[0.2%] opacity-0 scale-50 absolute' />
                <div className="md:w-[80%] mb-5">
                    <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Our Menu</h1>
                    <p className="md:text-xl text-sm">From savory pizzas to refreshing drinks, we take pride in serving dishes that are made with care. Every meal is thoughtfully prepared to give you a culinary experience worth remembering.</p>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3 items-center md:my-0 my-10">
                    <div onClick={() => setActiveFilter('fullmenu')} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'fullmenu' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                        <p className='mx-auto'>Full Menu</p>
                        <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'fullmenu' ? 'block' : 'hidden'}`}></div>
                    </div>
                    <div onClick={() => setActiveFilter('pizza')} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'pizza' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                        <Image src={pizza} alt='pizza' width={100} height={100} className='w-7 h-7' />
                        <p className='mx-auto'>Pizza</p>
                        <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'pizza' ? 'block' : 'hidden'}`}></div>
                    </div>
                    <div onClick={() => setActiveFilter('sides')} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'sides' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                        <Image src={sides} alt='pizza' width={100} height={100} className='w-7 h-7' />
                        <p className='mx-auto'>Sides</p>
                        <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'sides' ? 'block' : 'hidden'}`}></div>
                    </div>
                    <div onClick={() => setActiveFilter('drinks')} className={`flex justify-between px-3 cursor-pointer relative items-center ${activeFilter === 'drinks' ? 'bg-[#fafafa]' : 'bg-white'} rounded-3xl py-2`}>
                        <Image src={drinks} alt='pizza' width={100} height={100} className='w-7 h-7' />
                        <p className='mx-auto'>Drinks</p>
                        <div className={`w-[6px] h-[6px] rounded-full absolute right-3 bg-[#ff003c] ${activeFilter === 'drinks' ? 'block' : 'hidden'}`}></div>
                    </div>
                </div>
                {activeFilter === 'fullmenu' ? (
                    <>
                        <h1 className="text-2xl md:text-5xl font-bold">Pizza</h1>
                        <p className="md:text-xl text-sm">Our pizza menu serves up the perfect blend of cheesy, saucy, and crusty goodness! Choose from classics like Margherita or go bold with Naija inspired flavors like Chicken Suya and Beef Deluxe. Each pizza is handcrafted using fresh dough, premium cheese, and toppings that balance spice and savor in every bite. Whether you're hosting friends, craving a late-night slice, or planning a cozy solo feast, our pizzas are hot, hearty, and unforgettable. Want a full meal? Pair with garlic bread and soda for the ultimate pizza night. Pickup or deliver - your perfect slice is always within reach!</p>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperoniPizza} alt='pepperoni pizza' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Pepperoni Pizza</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Soft crust pizza loaded with cheese, pepperoni, chicken, or veggies.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~280 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 32g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 14g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten, Diary, May contain soy</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦3,500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={garlicSupreme} alt='garlic supreme' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Garlic Supreme</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Roasted garlic cloves, caramelized onions, mozzarella, parmesan, Alfredo sauce, fresh parsley</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~270</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 13g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 27g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 11g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl flex-shrink-0">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦25,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={firecracker} alt='fire cracker' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Firecracker Inferno</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Spicy pepperoni, jalapenos, crushed red pepper, mozzarella, marinara sauce, sriracha drizzle</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~280</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 14g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦15,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-5xl font-bold">Pasta</h1>
                        <p className="md:text-xl text-sm">Our pasta dishes are more than just comfort food - they're a journey of flavor! From spicy Jollof Pasta and creamy Chicken Alfredo to Seafood Delight and Veggie Penne, each plate is a delicious blend of premium sauces, protein-packed toppings, and perfectly cooked pasta. Whether you're craving bold peppery heat or a smooth, rich, and creamy bite, our pasta bowls hit the spot. Customize with add-ons like grilled chicken or pawns, and pair with a chilled drink for the full experience. Perfect for lunch, dinner, or anytime you want to chop life in style!</p>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pasta} alt='pasta' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Naija Jollof Pasta</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Our twist on the classic Jollof - al dente pasta simmered in smoky tomato-pepper sauce, with sauteed onions, belle peppers, and spiced beef or chicken.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-sm font-bold">Calories: ~280</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Peppered Beef or</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Chicken</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,000</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-5xl font-bold">Sides</h1>
                        <p className="md:text-xl text-sm">No meal is complete without the perfect side! Our side menu offers crispy, golden yam chips, soft boli, spicy pepper chicken, juicy barbecue fish, and irresistible small chops - the ultimate companions to any main dish. Whether you're snacking or sharing, our sides are made fresh and seasoned to perfection, turning even a simple meal into something memorable. Add a portion of pepper beef, fried plantain, or crispy wings to your order and elevate your plate. Ideal for parties, picnics, or just treating yourself. Small bites, big flaor - that's how we do sides!</p>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={noodles} alt='fire cracker' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Spicy Noodles</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Hot, steamy noodles tossed in a flavorful pepper blend.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~480</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 22g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 62g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 7g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦1,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={beefSharwama} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Beef Shawarma</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Packed with juicy fillings, sauces, and grilled perfection.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~430</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 18g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 64g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 5g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦4,000</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={rice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">White Rice and Stew</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Fluffy long-grain white rice served with rich tomato stew made from fresh peppers, onions, and spices.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~380 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 70g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 9g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>May contain traces of peanuts if cooked with groundnut oil.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦6,500 <span className="text text-gray-300 text-sm">/ 1 Chicken</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperedChicken} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Peppered Chicken</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Juicy grilled or fried chicken tossed in a hot pepper sauce. Choose wings, drumsticks, or grilled thighs.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~220 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 18g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 15g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for pepper sensitivity)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,200 <span className="text text-gray-300 text-sm">/ 1 Drumsticks</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={jollofRice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Jollof Rice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Smoky party-style jollof rice cooked in rich tomato sauce, served hot with veggies or optional proteins.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~420 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 75g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for sensitivity to tomatoes or pepper)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperedBeef} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Peppered Beef</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Tender beef chunks simmered and stir-fried in spicy pepper sauce. Perfect side for rice or as a standalone delight.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~300 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 25g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 18g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={barbecue} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Barbecue Fish</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Grilled whole tilapia or croaker, seasoned and basted in spicy marinade. Served with sides like Boli or salad.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~600</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 22g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 80g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 16g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten, Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,000 <span className="text text-gray-300 text-sm"> / ft</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={boli} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Boli (Grilled Plantain)</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Ripe plantain grilled to perfection, served with groundnut sauce or pepper mix.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~230 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 50g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fiber: 4g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>May contain groundnut (optional sauce)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,000 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={friedRice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Fried Rice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Savory stir-fried rice with veggies, sweet corn, green peas, and optional protein.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~400 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 65g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein : 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat : 11g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for vegetable allergies)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,300 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={yamEgg} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Boiled Yam & Egg Sauce</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Soft boiled yam slices served with spicy egg and tomato sauce. A classic and hearty dish.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~350 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 60g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein : 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat : 10g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={buffaloWings} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Buffalo Wings</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Chicken wings, buffalo sauce, celery sticks, blue cheese dip</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~430 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 31g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 6g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 31g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy (blue cheese dip)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">/ 2</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={caesarSalad} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Classic Caesar Salad</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Romaine lettuce, Parmesan cheese, Croutons, Caesar dressing (anchovies, eggs, Parmesan)</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~310</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 24g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 17g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten, Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦12,500 <span className="text text-gray-300 text-sm">6</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={loadedPotato} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Loaded Potato Wedges</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Crispy potato wedges, cheddar cheese, bacon bits, sour cream, chives</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~520</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 52g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦16,500 <span className="text text-gray-300 text-sm">6</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chickenSharwama} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Chicken Shawarma</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Packed with juicy fillings, sauces, and grilled perfection.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~320</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 17g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 29g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 14g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chickenChips} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Chicken Chips</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Choice of wings or drumsticks with crispy yam chips.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~300</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 15g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={bbqBlaze} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">BBQ Blaze</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Grilled chicken, red onions, smoky BBQ sauce</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~290</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 29g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 15g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦8,800 <span className="text text-gray-300 text-sm">2</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={yamEggSauce} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Yam & Egg Sauce</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Golden yam slices served with our rich, peppered egg sauce</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~220</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 26g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 9g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-5xl font-bold">Drinks</h1>
                        <p className="md:text-xl text-sm">Quench your thirst with our range of perfectly chilled drinks! Whether you're pairing your meal with a classic soda, creamy yoghurt, fruity smoothies, or one of our signature cocktails, we've got something refreshing for every vibe. Each sip is designed to complement the rich flavors of your meal - from spicy shawarma to hearty rice dishes. Hosting a gathering? Our drink options are the perfect finishing touch. Light, fizzy, sweet, or smooth, every bottle or glass is served cold and satisfying. Stay hydrated, stay refreshed - one tasty sip at a time!</p>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={sparklingWater} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Sparkling Water</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 0</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,800 <span className="text text-gray-300 text-sm">/1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={classicCola} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Classic Colar</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, caffeine, natural flavor</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 140</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 39g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={lemonIce} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Lemon Ice Tea</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Brewed black tea, lemon juice, sugar, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 120</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 30g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={coconutWater} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Coconut Water Cooler</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Fresh coconut water, lime juice, mint leaves, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 60</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 15g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={orangeJuice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Orange Juice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Freshly squeezed oranges</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 160</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 38g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 2g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,000 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={strawberySmoothie} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Strawberry Banana Smoothie</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Strawberries, bananas, yoghurt, honey, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 210</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 2.5g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 44g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 5g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦6,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={brewCoffee} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Cold Brew Coffee</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Cold-brewed coffee, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 5</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 1g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>none</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chocolate} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Hot Chocolate</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Milk, cocoa powder, sugar, whipped cream</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 250</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 11g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 32g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={beerFloat} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Beer Float</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">beer, vanilla ice cream</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 280</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 48g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 4g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={soda} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Other Soda</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water, selected flavor, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 220</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 34g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 2g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={zoboMojitos} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Zobo Mojitos</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">A refreshing fusion of zobo, minth leaves, lime juice, white rum, and a hint of honey</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">High in antioxidants (from zobo)</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Low alcohol content</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Vitamin C Boost from lime</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Alcohol</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={naijaSunrise} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Naija Sunrise</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Breeded mozzarella cheese sticks, marinara sauce for dipping</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 450</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 25g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 39g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 18g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten, Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : activeFilter === 'pizza' ? (
                    <>
                        <h1 className="text-2xl md:text-5xl font-bold">Pizza</h1>
                        <p className="md:text-xl text-sm">Our pizza menu serves up the perfect blend of cheesy, saucy, and crusty goodness! Choose from classics like Margherita or go bold with Naija inspired flavors like Chicken Suya and Beef Deluxe. Each pizza is handcrafted using fresh dough, premium cheese, and toppings that balance spice and savor in every bite. Whether you're hosting friends, craving a late-night slice, or planning a cozy solo feast, our pizzas are hot, hearty, and unforgettable. Want a full meal? Pair with garlic bread and soda for the ultimate pizza night. Pickup or deliver - your perfect slice is always within reach!</p>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperoniPizza} alt='pepperoni pizza' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Pepperoni Pizza</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Soft crust pizza loaded with cheese, pepperoni, chicken, or veggies.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~280 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 32g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 14g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten, Diary, May contain soy</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦3,500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={garlicSupreme} alt='garlic supreme' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Garlic Supreme</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Roasted garlic cloves, caramelized onions, mozzarella, parmesan, Alfredo sauce, fresh parsley</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~270</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 13g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 27g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 11g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl flex-shrink-0">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦25,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[25%] w-[105%] rounded-2xl overflow-hidden h-[35%] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={firecracker} alt='fire cracker' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[35%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Firecracker Inferno</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Spicy pepperoni, jalapenos, crushed red pepper, mozzarella, marinara sauce, sriracha drizzle</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~280</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 14g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦15,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : activeFilter === 'sides' ? (
                    <>
                        <h1 className="text-2xl md:text-5xl font-bold">Sides</h1>
                        <p className="md:text-xl text-sm">No meal is complete without the perfect side! Our side menu offers crispy, golden yam chips, soft boli, spicy pepper chicken, juicy barbecue fish, and irresistible small chops - the ultimate companions to any main dish. Whether you're snacking or sharing, our sides are made fresh and seasoned to perfection, turning even a simple meal into something memorable. Add a portion of pepper beef, fried plantain, or crispy wings to your order and elevate your plate. Ideal for parties, picnics, or just treating yourself. Small bites, big flaor - that's how we do sides!</p>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={noodles} alt='fire cracker' width={1000} height={1000} className='w-full h-full' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Spicy Noodles</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Hot, steamy noodles tossed in a flavorful pepper blend.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~480</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 22g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 62g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 7g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦1,800</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={beefSharwama} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Beef Shawarma</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Packed with juicy fillings, sauces, and grilled perfection.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~430</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 18g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 64g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 5g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl"><span className="text-sm text-gray-400 font-extralight">from</span> ₦4,000</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={rice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">White Rice and Stew</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Fluffy long-grain white rice served with rich tomato stew made from fresh peppers, onions, and spices.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~380 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 70g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 9g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>May contain traces of peanuts if cooked with groundnut oil.</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦6,500 <span className="text text-gray-300 text-sm">/ 1 Chicken</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperedChicken} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Peppered Chicken</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Juicy grilled or fried chicken tossed in a hot pepper sauce. Choose wings, drumsticks, or grilled thighs.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~220 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 18g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 15g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for pepper sensitivity)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,200 <span className="text text-gray-300 text-sm">/ 1 Drumsticks</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={jollofRice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Jollof Rice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Smoky party-style jollof rice cooked in rich tomato sauce, served hot with veggies or optional proteins.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~420 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 75g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for sensitivity to tomatoes or pepper)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={pepperedBeef} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Peppered Beef</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Tender beef chunks simmered and stir-fried in spicy pepper sauce. Perfect side for rice or as a standalone delight.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~300 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 25g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 18g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={barbecue} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Barbecue Fish</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Grilled whole tilapia or croaker, seasoned and basted in spicy marinade. Served with sides like Boli or salad.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~600</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 22g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 80g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 16g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten, Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,000 <span className="text text-gray-300 text-sm"> / ft</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={boli} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Boli (Grilled Plantain)</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Ripe plantain grilled to perfection, served with groundnut sauce or pepper mix.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~230 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 50g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fiber: 4g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>May contain groundnut (optional sauce)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,000 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={friedRice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Fried Rice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Savory stir-fried rice with veggies, sweet corn, green peas, and optional protein.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~400 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 65g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein : 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat : 11g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None (Check for vegetable allergies)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,300 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={yamEgg} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Boiled Yam & Egg Sauce</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Soft boiled yam slices served with spicy egg and tomato sauce. A classic and hearty dish.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~350 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbs: 60g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein : 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat : 10g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm"> 1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={buffaloWings} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Buffalo Wings</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Chicken wings, buffalo sauce, celery sticks, blue cheese dip</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~430 kcal</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 31g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 6g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 31g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy (blue cheese dip)</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">/ 2</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={caesarSalad} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Classic Caesar Salad</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Romaine lettuce, Parmesan cheese, Croutons, Caesar dressing (anchovies, eggs, Parmesan)</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~310</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 24g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 17g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten, Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦12,500 <span className="text text-gray-300 text-sm">6</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={loadedPotato} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Loaded Potato Wedges</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Crispy potato wedges, cheddar cheese, bacon bits, sour cream, chives</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~520</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 52g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦16,500 <span className="text text-gray-300 text-sm">6</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chickenSharwama} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[30%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Chicken Shawarma</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Packed with juicy fillings, sauces, and grilled perfection.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~320</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 17g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 29g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 14g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chickenChips} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Chicken Chips</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Choice of wings or drumsticks with crispy yam chips.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~300</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 15g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 28g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 12g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={bbqBlaze} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">BBQ Blaze</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Grilled chicken, red onions, smoky BBQ sauce</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~290</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 12g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 29g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 15g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦8,800 <span className="text text-gray-300 text-sm">2</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={yamEggSauce} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Yam & Egg Sauce</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Golden yam slices served with our rich, peppered egg sauce</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: ~220</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 10g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 26g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 9g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary, Gluten</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦3,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : activeFilter === 'drinks' && (
                    <>
                        <h1 className="text-2xl md:text-5xl font-bold">Drinks</h1>
                        <p className="md:text-xl text-sm">Quench your thirst with our range of perfectly chilled drinks! Whether you're pairing your meal with a classic soda, creamy yoghurt, fruity smoothies, or one of our signature cocktails, we've got something refreshing for every vibe. Each sip is designed to complement the rich flavors of your meal - from spicy shawarma to hearty rice dishes. Hosting a gathering? Our drink options are the perfect finishing touch. Light, fizzy, sweet, or smooth, every bottle or glass is served cold and satisfying. Stay hydrated, stay refreshed - one tasty sip at a time!</p>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={sparklingWater} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Sparkling Water</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 0</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,800 <span className="text text-gray-300 text-sm">/1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={classicCola} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Classic Colar</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water, high fructose corn syrup, caramel color, phosphoric acid, caffeine, natural flavor</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 140</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 39g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={lemonIce} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Lemon Ice Tea</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Brewed black tea, lemon juice, sugar, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 120</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 30g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={coconutWater} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Coconut Water Cooler</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Fresh coconut water, lime juice, mint leaves, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 60</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 15g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={orangeJuice} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Orange Juice</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Freshly squeezed oranges</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 160</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 38g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 2g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,000 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={strawberySmoothie} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Strawberry Banana Smoothie</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Strawberries, bananas, yoghurt, honey, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 210</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 2.5g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 44g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 5g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦6,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={brewCoffee} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Cold Brew Coffee</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Cold-brewed coffee, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 5</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 0g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 1g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 0g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>none</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={chocolate} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Hot Chocolate</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Milk, cocoa powder, sugar, whipped cream</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 250</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 11g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 32g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 8g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={beerFloat} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Beer Float</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">beer, vanilla ice cream</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 280</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 48g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 4g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Diary</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={soda} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Other Soda</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Carbonated water, selected flavor, ice</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 220</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 8g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 34g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 2g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>None</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦1,500 <span className="text text-gray-300 text-sm">1L</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={zoboMojitos} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Zobo Mojitos</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">A refreshing fusion of zobo, minth leaves, lime juice, white rum, and a hint of honey</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">High in antioxidants (from zobo)</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Low alcohol content</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Vitamin C Boost from lime</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Alcohol</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,500 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:p-5 md:px-32 bg-white w-full relative">
                            <div className="flex gap-8 flex-col md:items-start items-center md:flex-row">
                                <div className="md:w-[35%] w-[105%] rounded-2xl overflow-hidden h-[22rem] md:translate-y-0 translate-y-[-2%]">
                                    <Image src={naijaSunrise} alt='fire cracker' width={1000} height={1000} className='w-full h-full object-cover' />
                                </div>
                                <div className="flex md:w-[40%] flex-col gap-5 md:pb-0 pb-5 md:px-0 px-5">
                                    <p className="text-3xl font-bold">Naija Sunrise</p>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Ingredients</p>
                                        <p className="text-[12px] font-light w-[60%]">Breeded mozzarella cheese sticks, marinara sauce for dipping</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-light">Nutritional Info:</p>
                                        <div className="flex flex-col gap-1 w-[60%] ms-auto">
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Calories: 450</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Fat: 25g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Carbohydrates: 39g</p>
                                            </div>
                                            <div className="flex gap-5 items-center">
                                                <div className="w-1 h-1 rounded-full bg-black"></div>
                                                <p className="text-[12px]">Protein: 18g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm font-light">Alergens:</p>
                                        <div className="flex flex-col gap-2 w-[60%]">
                                            <p className='text-[12px]'>Dairy, Gluten, Eggs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button className="py-2 px-8 bg-[#ff003c] hover:scale-105 transition-transform duration-200 ease-in-out text-white rounded-3xl">Order Now</button>
                                        <h3 className="font-semibold text-3xl">₦2,800 <span className="text text-gray-300 text-sm">1</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default page
