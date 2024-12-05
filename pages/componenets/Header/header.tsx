import React from 'react'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import {FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Image from 'next/image';


const header = () => {
  return (
    <div className='w-full'>
        <div className='flex bg-[#000000] w-[100%] h-[32px] items-center justify-center gap-5 md:flex md:w-[100%] md:h-[48px] md:justify-center md:items-center'>
           <div className='flex gap-1 md:bg-[#000000] md:w-[100%] md:h-[48px] md:justify-center md:items-center md:flex'>
           <p className='text-[#FAFAFA] font-Poppins font-normal text-[6px] md:text-[20px] md:font-Poppins'>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!</p>
           <Link href="shop" className='font-Poppins font-semibold text-[6px] text-[#FAFAFA] underline md:font-Poppins md:font-semibold md:text-[20px] '>ShopNow</Link>
           </div>
           <div className='flex items-center justify-center'>
           <h1 className='text-[#FAFAFA] font-Poppins font-normal text-[6px] md:font-Poppins md:font-normal md:text-[20px] md:text-[#FAFAFA]'>English</h1>
           <IoIosArrowDown className='text-[#FAFAFA] text-[8px] md:text-[#FAFAFA] md:text-[20px]'/>
           </div>
         </div>
         <div className='w-[100%] h-[46px] flex justify-center items-center md:w-[100%] md:h-[48px] md:flex md:gap-10 md:justify-center md:items-center md:mt-7'>
            <div className='flex justify-center items-center gap-32'>
            <h1 className='font-Inter font-bold text-[20px] md:font-Inter md:font-bold md:text-[24px]'>Exclusive</h1>
            <FaBars className="text-[#000000] md:hidden"/>
            </div>
            <div className='md:w-[367px] md:h-[24px] md:gap-48 hidden md:flex md:ml-44'>
                <ul className='md:font-Poppins md:font-normal md:text-[16px] md:flex md:gap-12'>
                    <li className='underline'>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className='hidden md:w-[347px] md:h-[38px] md:gap-24 md:justify-center md:items-center md:flex'>
                <p className='md:bg-[#F5F5F5] md:w-[243px] md:h-[38px] md:rounded md:flex md:justify-center md:items-center md:font-normal md:font-Poppins md:text-[12px] md:text-gray-400 md:gap-10'>What are you looking for?
                <FaMagnifyingGlass className='md:text-[#000000] md:text-[16px]'/>
                </p>
            </div>
            <div className='md:flex md:justify-center md:items-center md:gap-4 hidden'>
                <Image src='/images/wishlist.png' alt='wishlist' width={20} height={17.83}></Image>
                <Image src='/images/carticon.png' alt='cart' width={20} height={17.83}></Image>
            </div>
         </div>
         <hr className='md:mt-3'/>
    </div>
  )
}

export default header