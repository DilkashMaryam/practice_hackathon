import React from 'react'
import { IoArrowBackCircle, IoArrowForwardCircle, IoCameraOutline, IoGameControllerOutline, IoHeadsetOutline, IoLaptop, IoLaptopOutline, IoPhonePortraitOutline, IoWatchOutline } from 'react-icons/io5';

const page = () => {
  return (
    <div className='w-[100%] h-auto md:w-[100%] md:h-[493px] mt-10 md:mt-80 md:ml-16'>
      <hr />
      <div className='flex items-center ml-2 md:flex md:items-center md:ml-2 mt-6'>
        <div className='w-[10px] h-[20px] rounded-sm bg-[#DB4444] md:w-[20px] md:h-[40px] md:rounded md:bg-[#DB4444]'></div>
        <h1 className='font-Poppins font-semibold text-[10px] text-[#DB4444] ml-2 md:font-Poppins md:font-semibold md:text-[16px] '>Categories</h1>
        </div>
        <div className='w-[100%] h-auto flex mt-3'>
        <h1 className='font-Inter font-semibold text-[20px] text-[#000000] items-center flex md:flex md:text-[36px] md:text-Inter md:font-semibold'>Browse By Category</h1>
        <div className='md:ml-[750px] md:flex items-center hidden'>
                <IoArrowBackCircle className='md:w-10 md:h-10 md:text-gray-300'/>
                <IoArrowForwardCircle className='md:w-10 md:h-10 md:text-gray-300'/>
        </div>
        </div>
        <div className='w-[100%] h-auto grid grid-cols-2 grid-rows-3 gap-9 md:flex md:gap-10'>
            <div className='flex'>
                <div className='w-[100px] h-[100px] border-gray-300 mt-6 ml-4 border-2 p-5 md:w-[150px] md:h-[150px] md:p-10'>
                <IoPhonePortraitOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>Phones</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[100px] h-[100px] border-gray-300 mt-6 ml-4 border-2 p-5 md:w-[150px] md:h-[150px] md:p-10'>
                <IoLaptopOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>Computers</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[100px] h-[100px] border-gray-300 mt-6 ml-4 border-2 p-5 md:w-[150px] md:h-[150px] md:p-10'>
                <IoWatchOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>SmartWatch</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[100px] h-[100px] mt-6 ml-4 rounded-sm p-5 bg-[#DB4444] md:w-[150px] md:h-[150px] md:p-10'>
                <IoCameraOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>Camera</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[100px] h-[100px] mt-6 ml-4 p-5 border-2 border-gray-300 md:w-[150px] md:h-[150px] md:p-10'>
                <IoHeadsetOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>HeadPhones</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[100px] h-[100px] mt-6 ml-4 p-5 border-2 border-gray-300 md:w-[150px] md:h-[150px] md:p-10'>
                <IoGameControllerOutline className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                <h1 className='text-[12px] font-Poppins font-normal text-center md:mt-2'>Gaming</h1>
                </div>
            </div>
        </div>
        <hr className='mt-6 md:mt-6'/>
    </div>
  )
}

export default page
