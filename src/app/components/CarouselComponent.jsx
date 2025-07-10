'use client'
import React, {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import carouselImage1 from '@/images/carouselImage1.jpg'
import carouselImage2 from '@/images/carouselImage2.jpg'
import carouselImage3 from '@/images/carouselImage3.jpg'
import carouselImage4 from '@/images/carouselImage4.jpg'
import carouselImage5 from '@/images/carouselImage5.jpg'
import carouselImage6 from '@/images/carouselImage6.jpg'
import carouselImage7 from '@/images/carouselImage7.jpg'
import carouselImage8 from '@/images/carouselImage8.jpg'
import carouselImage9 from '@/images/carouselImage9.jpg'
import carouselImage0 from '@/images/carouselImage0.jpg'
import prevButton from '@/images/prevButton.svg'
import nextButton from '@/images/nextButton.svg'

const CarouselComponent = ({ className }) => {
    const carouselTrackRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselData = [
    {
      id: 1,
      background: carouselImage1,
      name: 'Tina Olayinka',
      description: "Their shawarma is easily one of the best in Port Harcourt! I've tried shawarma from different place but this one hits differently - juicy, spicy, and always freshly made. Plus, their deliver is super fast 10/10 experience every time",
      location: 'GRA, PH'
    },
    {
      id: 2,
      background: carouselImage3,
      name: 'Emeka Joram',
      description: "I don't play with their white rice and stew + pepper chicken. That combo is comfort good Gold. always hits the spot, and i love that i can just swing by the Obio Akpor pickup without stress.",
      location: 'Rumuodara, Obio Akpor'
    },
    {
      id: 3,
      background: carouselImage4,
      name: "Jawa'a Christian",
      description: "I was looing for something light and refreshing and ended up getting hooked. Banana Oat Boost + grilled boli? Genius combo. Testes homemade and healthy.",
      location: 'Okrika'
    },
    {
      id: 4,
      background: carouselImage5,
      name: "Chika Innocent",
      description: "Best food service in town, hands down. From the spicy noodles to the fired rice and shawarma, i haven't had one bad experience. they're consistent, affordable, and the food always looks and tastes amazing.",
      location: 'Port Harcourt'
    },
    {
      id: 5,
      background: carouselImage6,
      name: "Mimi Anderson",
      description: "Their cocktail special? A whole vibe! I tried the Zobo Mojito with the small chops box, and i was blown away. The mix was just right, and the peppered gizzard? Chefs kiss! Perfect for chill evenings.",
      location: 'Oyigbo'
    },
    {
      id: 6,
      background: carouselImage2,
      name: "Cynthia Madueke",
      description: "The Jollof and pepper beef combo? Instant addiction! I ordered the Spicy Feast Combo and couldn't believe the flavor. Everything was on point - from the packaging to the taste. Highly recommend!",
      location: 'Aleto, Eleme'
    }
  ]

  const carouselSlides = [
    carouselData[carouselData.length - 1],
    ...carouselData,
    carouselData[0]
  ] 
  // 1. Add this useEffect after your other effects:
  const totalOriginalSlides = carouselData.length;
  const TRANSITION_DURATION = 0.7; // Matches GSAP duration

  // This useEffect handles the automatic sliding and the seamless jump logic
  useEffect(() => {
    let autoSlideTimeout;
    let jumpTimeout;
    if (!carouselTrackRef.current) return;

    const firstItem = carouselTrackRef.current.children[0];
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth;
    // Ensure this matches your Tailwind 'gap-5' which is 20px
    const gapWidth = 20; 
    const itemAndGapWidth = itemWidth + gapWidth;

    let targetX = -currentSlide * itemAndGapWidth;

    gsap.to(carouselTrackRef.current, {
      x: targetX,
      duration: TRANSITION_DURATION,
      ease: "power2.out",
      onComplete: () => {
        // If we are on the fake first slide (clone of last), jump to real last
        if (currentSlide === 0) {
          gsap.set(carouselTrackRef.current, { x: -(totalOriginalSlides * itemAndGapWidth) });
          setCurrentSlide(totalOriginalSlides);
        } 
        // If we are on the fake last slide (clone of first), jump to real first
        else if (currentSlide === totalOriginalSlides + 1) {
          gsap.set(carouselTrackRef.current, { x: -itemAndGapWidth });
          setCurrentSlide(1);
        }
      }
    }); // Animate when currentSlide changes

    // Set up auto-slide, but clear it if currentSlide is 0 or totalOriginalSlides + 1
    // to prevent immediate re-triggering during the jump.
    

    return () => {
      clearTimeout(autoSlideTimeout);
      clearTimeout(jumpTimeout); // Clear any pending jump timeouts
    };
  }, [currentSlide, totalOriginalSlides]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };
  return (
    <div className={`bg-[#1a1a1a] w-full flex flex-col relative z-10 overflow-hidden md:py-10 p-2 ${className}`}>
        <div className="flex gap-5 md:absolute relative md:left-0 md:top-0 w-full h-full z-20">
            <div className="flex justify-start md:w-[47%] w-full md:p-20 md:pb-0 pb-5" style={{
            backgroundImage: 'linear-gradient(to right, #1a1a1acb 60%, transparent)'
            }}>
                <div className="flex flex-col justify-center md:items-start items-center gap-5">
                <div className="flex gap-2">
                    ⭐⭐⭐⭐⭐
                </div>
                <h5 className="md:text-6xl text-3xl font-extrabold text-white md:text-start text-center">Our Customers Don't Play</h5>
                <p className="text-white md:text-xl md:text-start text-center">Some testimonials that reflect the kind of customer experience we offer - from flavor to service and delivery</p>
                </div>
            </div>
            <div className="flex justify-between md:relative absolute md:bottom-0 -bottom-80 items-center md:w-[47%] w-full px-5">
            <div onClick={goToPrevSlide} className="w-12 h-12 rounded-full bg-[#1a1a1a57] flex justify-center items-center cursor-pointer">
                <Image width={100} height={100} alt='next button' src={prevButton} className='w-10 h-10' />
            </div>
            <div onClick={goToNextSlide} className="w-12 h-12 rounded-full bg-[#1a1a1a57] flex justify-center items-center cursor-pointer">
                <Image width={100} height={100} alt='next button' src={nextButton} className='w-10 h-10' />
            </div>
            </div>
        </div>
        <div className="flex justify-center">
            <div ref={carouselTrackRef} className="w-full relative carousel-mask flex gap-5">
            {carouselSlides.map((carousel, index) => (
                <div key={index} className='flex-shrink-0 flex flex-col justify-between relative p-5 w-full md:w-[47%] text-white h-[550px] rounded-2xl' style={{
                backgroundImage: `url(${carousel.background.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                }}>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default CarouselComponent
