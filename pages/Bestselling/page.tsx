import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

const page = () => {
  return (
    <div className='w-[100%] h-auto md:w-[100%] md:h-[493px] mt-10 md:mt-56 md:ml-16'>
      <div className='flex items-center ml-2 md:flex md:items-center md:ml-2'>
        <div className='w-[10px] h-[20px] rounded-sm bg-[#DB4444] md:w-[20px] md:h-[40px] md:rounded md:bg-[#DB4444]'></div>
        <h1 className='font-Poppins font-semibold text-[10px] text-[#DB4444] ml-2 md:font-Poppins md:font-semibold md:text-[16px] '>This Month</h1>
        </div>
           <div className='w-[100%] h-auto flex mt-3'>
            <h1 className='font-Inter font-semibold text-[20px] text-[#000000] items-center flex md:flex md:text-[36px] md:text-Inter md:font-semibold'>Best Selling Products</h1>
            <button className=" md:bg-[#DB4444] md:p-5 md:mt-4 md:font-Poppins md:font-medium md:text-[#FAFAFA] md:w-[234px] md:h-[56px] md:text-[16px] md:ml-[650px]">View All</button>
            </div>
            <div className='w-[100%] h-auto mt-4 md:w-[100%] md:h-[500px] md:mt-8 md:flex'>
        <div className='w-full md:mt-4'>
            <Image src="/images/bestselling1.png" alt='sale1' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>The north coat</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$260</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$360</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(65)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/bestselling2.png" alt='sale2' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Gucci duffle bag</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$960</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$1160</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(65)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/bestselling3.png" alt='sale3' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>RGB liquid CPU Cooler</h1>
            <div className='flex'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$160</p>
                <p className='line-through text-gray-400 text-[12px] ml-3'>$170</p>
            </div>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(65)</p>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/bestselling4.png" alt='sale4' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Small BookSelf</h1>
            <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$360</p>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(65)</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default page
