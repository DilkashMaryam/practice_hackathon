import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

const page = () => {
  return (
    <div className='w-[100%] h-auto md:w-[100%] md:h-[493px] mt-10 md:mt-56 md:ml-16'>
        <div className='flex items-center ml-2 md:flex md:items-center md:ml-2'>
        <div className='w-[10px] h-[20px] rounded-sm bg-[#DB4444] md:w-[20px] md:h-[40px] md:rounded md:bg-[#DB4444]'></div>
        <h1 className='font-Poppins font-semibold text-[10px] text-[#DB4444] ml-2 md:font-Poppins md:font-semibold md:text-[16px] '>Today's</h1>
        </div>
        <div className='w-[100%] h-auto flex mt-3'>
            <h1 className='font-Inter font-semibold text-[20px] text-[#000000] items-center flex md:flex md:text-[36px] md:text-Inter md:font-semibold'>Flash Sales</h1>
            <div className='ml-5 w-10 md:ml-36'>
                <h1 className='font-Poppins font-medium text-[10px] md:text-[12px]'>Days</h1>
                <h1 className='font-Inter font-bold text-[18px] flex md:flex md:font-bold md:font-Inter md:text-[36px]'>03  
                    <span className='text-[#DB4444] font-bold text-[18px] pl-3 md:text-[36px] md:pl-3'> :</span></h1>
            </div>
            <div className='ml-2 w-10 md:ml-8'>
                <h1 className='font-Poppins font-medium text-[10px] md:text-[12px]'>Hours</h1>
                <h1 className='font-Inter font-bold text-[18px] flex md:flex md:font-bold md:font-Inter md:text-[36px]'>23  
                    <span className='text-[#DB4444] font-bold text-[18px] pl-3 md:text-[36px] md:pl-3'> :</span></h1>
            </div>
            <div className='ml-2 w-10 md:ml-8'>
                <h1 className='font-Poppins font-medium text-[10px] md:text-[12px]'>Minutes</h1>
                <h1 className='font-Inter font-bold text-[18px] flex md:flex md:font-bold md:font-Inter md:text-[36px]'>19  
                    <span className='text-[#DB4444] font-bold text-[18px] pl-3 md:text-[36px] md:pl-3'> :</span></h1>
            </div>
            <div className='ml-2 w-10 md:ml-8'>
                <h1 className='font-Poppins font-medium text-[10px] md:text-[12px]'>Seconds</h1>
                <h1 className='font-Inter font-bold text-[18px] md:flex md:font-bold md:font-Inter md:text-[36px]'>56 </h1>
            </div>
            <div className='md:ml-[500px] md:flex items-center hidden'>
                <IoArrowBackCircle className='md:w-10 md:h-10 md:text-gray-300'/>
                <IoArrowForwardCircle className='md:w-10 md:h-10 md:text-gray-300'/>
            </div>
        </div>
     <div className='w-[100%] h-auto mt-4 md:w-[100%] md:h-[500px] md:mt-8 md:flex'>
        <div className='w-full md:mt-4'>
            <Image src="/images/sale1.png" alt='sale1' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>HAVIT HV-G92 Gamepad</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$120</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$160</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(88)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/sale2.png" alt='sale2' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>AK-900 Wired Keyboard</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$960</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$1160</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar className='text-gray-300' />
            <p className='ml-2 text-[12px] text-gray-400'>(75)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/sale3.png" alt='sale3' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>IPS LCD Gaming Monitor</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$370</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$400</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(99)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/sale4.png" alt='sale4' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>S-Series Comfort Chair </h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$375</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$400</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(99)</p>
            </div>
        </div>
     </div>
    <button className="bg-[#DB4444] w-[150px] h-[50px] p-5 mt-4 ml-16 text-[12px] font-Poppins font-medium text-[#FAFAFA] md:w-[234px] md:h-[56px] md:text-[16px] md:ml-[500px]">View All Products</button>
    </div>
  )
}

export default page
