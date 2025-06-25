'use client'
import React from 'react'
import Image from 'next/image'
import containerBackground from '@/images/backgroundImage.jpg'
import galleryFirstImage from '@/images/galleryFirstImage.jpg'
import gallerySecondImage from '@/images/gallerySecondImage.jpg'
import galleryThirdImage from '@/images/galleryThirdImage.jpg'
import galleryFourthImage from '@/images/galleryFourthImage.jpg'
import galleryFifthImage from '@/images/galleryFifthImage.jpg'
import gallerySixthImage from '@/images/gallerySixthImage.jpg'
import gallerySeventhImage from '@/images/gallerySeventhImage.jpg'
import galleryEightImage from '@/images/galleryEightImage.jpg'
import galleryNinthImage from '@/images/galleryNinthImage.jpg'
import galleryTenthImage from '@/images/galleryTenthImage.jpg'
import galleryEleventhImage from '@/images/galleryEleventhImage.jpg'
import galleryTwelveImage from '@/images/galleryTwelveImage.jpg'

const page = () => {
  return (
    <div className='w-full relative'>
      <Image src={containerBackground} alt='container background' width={1000} height={1000} className='w-full h-full absolute top-0 left-0' />
      <div className="md:p-40 pt-32 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
        <div className="md:w-[80%] md:px-10 px-5">
            <h1 className="text-xl md:text-5xl md:font-bold font-semibold leading-normal md:leading-snug">We show case the delicious dishes, vibrant flavors, and cozy vibes that make every visitor order from us unforgettable - every photo tells a story of taste, passion, and good times.</h1>
        </div>
        <div className="bg-white w-full md:p-10 p-5 flex flex-wrap gap-5 justify-between">
            <Image src={galleryFirstImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={gallerySecondImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[25rem] md:h-[20rem] object-cover' />
            <Image src={galleryThirdImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={galleryFourthImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[25rem] md:h-[20rem] object-cover' />
            <Image src={galleryFifthImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={gallerySixthImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={gallerySeventhImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={galleryEightImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={galleryNinthImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[25rem] md:h-[20rem] object-cover' />
            <Image src={galleryTenthImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[25rem] md:h-[20rem] object-cover' />
            <Image src={galleryEleventhImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
            <Image src={galleryTwelveImage} alt='gallery first image' width={1000} height={1000} className='rounded-2xl flex-shrink-0 md:w-[16rem] md:h-[20rem] object-cover' />
        </div>
        <div className="w-full h-[15rem] mb-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15901.532604245309!2d7.041878!3d4.875319!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNTInMzEuMiJOIDfCsDAyJzMwLjgiRQ!5e0!3m2!1sen!2sus!4v1750749122419!5m2!1sen!2sus" width="100%" height="100%" style={{border: 0}} ></iframe>
        </div>
      </div>
    </div>
  )
}

export default page
