import React from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const hero = () => {
  return (
    <div className='w-[100%] md:w-[100%] mt-3 md:flex md:mt-6'>
       <div className='md:hidden'>
        <ul className='flex font-Poppins font-normal text-[5px] justify-center items-center gap-2 p-1 md:font-Poppins md:font-normal md:text-[16px] md:gap-2'>
            <li>Woman’s Fashion</li><IoIosArrowDown/>
            <li>Men’s Fashion</li><IoIosArrowDown/>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <hr className='mt-3'/>
        <Image src="/images/hero.png" alt='hero' width={320} height={500}></Image>
       </div>
       <div className='hidden md:flex md:w-[100%] md:h-[344px]'>
       <ul className='md:font-Poppins md:font-normal md:text-[16px] md:w-[217px] md:h-[344px] md:ml-20 space-y-4'>
            <li className='md:flex md:items-center md:gap-16'>Woman’s Fashion <IoIosArrowForward/></li>
            <li className='md:flex md:items-center md:gap-20'>Men’s Fashion <IoIosArrowForward/></li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby’s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
        </ul>
        <hr className="md:w-[2px] md:h-full md:bg-gray-300 md:border-none"/>
        <Image src="/images/hero.png" alt='hero' width={320} height={500} className='md:w-[892px] md-h[344px] md:ml-28'></Image>
       </div>
    </div>
  )
}

export default hero
