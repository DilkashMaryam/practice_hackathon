import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-[100%] h-auto md:w-[100%] md:h-[700px] mt-10 md:mt-[900px] md:ml-16'>
      <div className='flex items-center ml-2 md:flex md:items-center md:ml-2'>
        <div className='w-[10px] h-[20px] rounded-sm bg-[#DB4444] md:w-[20px] md:h-[40px] md:rounded md:bg-[#DB4444]'></div>
        <h1 className='font-Poppins font-semibold text-[10px] text-[#DB4444] ml-2 md:font-Poppins md:font-semibold md:text-[16px] '>Featured</h1>
        </div>
         <div className='w-[100%] h-auto mt-3'>
            <h1 className='font-Inter font-semibold text-[20px] text-[#000000] items-center flex md:flex md:text-[36px] md:text-Inter md:font-semibold'>New Arrival</h1>
         </div>
         <div className='w-[100%] h-auto mt-4 md:w-[100%] md:h-[700px] md:mt-8 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8'>
           <Image src="/images/arrival1.png" alt='arrival' width={320} height={500} className='md:row-span-2 md:col-span-2 md:flex md:w-full md:h-full md:object-cover mt-3'></Image>
           <Image src="/images/arrival2.png" alt='arrival' width={320} height={500} className='md:w-full md:h-full md:col-span-2 md:object-cover mt-3'></Image>
           <Image src="/images/arrival3.png" alt='arrival' width={320} height={500} className='md:col-span-1 md:w-full md:h-full md:object-cover mt-3'></Image>
           <Image src="/images/arrival4.png" alt='arrival' width={320} height={500} className='md:col-span-1 md:w-full md:h-full md:object-cover mt-3'></Image>
         </div>
       <div className='w-[100%] h-[300px] gap-4 mt-4 md:flex md:w-[100%] md:gap-48 md:mt-32'>
        <div className='text-center mt-4'>
            <Image src="/images/Services.png" alt='service' width={80} height={80} className='ml-28'></Image>
            <h1 className='font-Poppins font-semibold text-[12px] text-[#000000] w-full mt-5 md:text-[18px] md:font-Poppins'>FREE AND FAST DELIVERY</h1>
            <p className='font-Poppins font-normal text-[10px] text-[#000000] md:text-[16px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='text-center mt-4'>
            <Image src="/images/Services (1).png" alt='service' width={80} height={80} className='ml-28'></Image>
            <h1 className='font-Poppins font-semibold text-[12px] text-[#000000] w-full mt-5 md:text-[18px] md:font-Poppins md:pl-7'>24/7 CUSTOMER SERVICE</h1>
            <p className='font-Poppins font-normal text-[10px] text-[#000000] md:text-[16px]'>Friendly 24/7 customer support</p>
        </div>
        <div className='text-center mt-4'>
            <Image src="/images/Services (2).png" alt='service' width={80} height={80} className='ml-28'></Image>
            <h1 className='font-Poppins font-semibold text-[12px] text-[#000000] w-full mt-5 md:text-[18px] md:font-Poppins md:pl-7'>MONEY BACK GUARANTEE</h1>
            <p className='font-Poppins font-normal text-[10px] text-[#000000] md:text-[16px]'>We return money within 30 days</p>
        </div>
       </div>
    </div>
  )
}

export default page
