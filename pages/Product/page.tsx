import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

const page = () => {
  return (
    <div className='w-[100%] h-auto md:w-[100%] md:h-[493px] mt-10 md:mt-56 md:ml-16'>
      <div className='flex items-center ml-2 md:flex md:items-center md:ml-2'>
        <div className='w-[10px] h-[20px] rounded-sm bg-[#DB4444] md:w-[20px] md:h-[40px] md:rounded md:bg-[#DB4444]'></div>
        <h1 className='font-Poppins font-semibold text-[10px] text-[#DB4444] ml-2 md:font-Poppins md:font-semibold md:text-[16px] '>Our Products</h1>
        </div>
        <div className='w-[100%] h-auto flex mt-3'>
            <h1 className='font-Inter font-semibold text-[20px] text-[#000000] items-center flex md:flex md:text-[36px] md:text-Inter md:font-semibold'>Explore Our Products</h1>
            <div className='md:ml-[700px] md:flex items-center hidden'>
                <IoArrowBackCircle className='md:w-10 md:h-10 md:text-gray-300'/>
                <IoArrowForwardCircle className='md:w-10 md:h-10 md:text-gray-300'/>
            </div>
        </div>
        <div className='w-[100%] h-auto mt-4 md:w-[100%] md:h-[500px] md:mt-8 md:flex'>
        <div className='w-full md:mt-4'>
            <Image src="/images/product1.png" alt='product1' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Breed Dry Dog Food</h1>
            <div className='flex gap-5'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$100</p>
                <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar className='text-gray-300'/>
            <IoIosStar className='text-gray-300'/>
            <p className='ml-2 text-[12px] text-gray-400'>(35)</p>
            </div>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/product2.png" alt='product2' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>CANON EOS DSLR Camera</h1>
            <div className='flex gap-5'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$360</p>
                <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar className='text-gray-300' />
            <p className='ml-2 text-[12px] text-gray-400'>(95)</p>
            </div>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/product3.png" alt='product3' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>ASUS FHD Gaming Laptop</h1>
            <div className='flex gap-5'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$700</p>
                <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(325)</p>
            </div>
            </div>
        </div>
        <div className='w-full mt-4 md:mt-4'>
            <Image src="/images/product4.png" alt='product4' width={400} height={400} className='md:w-[270px] md:h-[250px]'></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Curology Product Set </h1>
            <div className='flex gap-5'>
                <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$500</p>
                <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className='ml-2 text-[12px] text-gray-400'>(145)</p>
            </div>
            </div>
        </div>
     </div>
     <div className='hidden md:w-[100%] md:h-[500px] md:flex gap-16'>
        <div className=' md:mt-2'>
            <Image src="/images/product5.png" alt='product5' width={270} height={250}></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Kids Electric Car</h1>
            <div className='flex gap-5'>
            <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$960</p>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar/>
            <IoIosStar/>
            <p className='ml-2 text-[12px] text-gray-400'>(65)</p>
            </div>
            </div>
            <div className='flex gap-2 mt-2'>
                <Image src="/images/circle1.png" alt='circle' width={20} height={20}></Image>
                <Image src="/images/ellipse.png" alt='circle' width={20} height={20}></Image>
            </div>
        </div>
        <div className=' md:mt-2'>
            <Image src="/images/product6.png" alt='product6' width={270} height={250}></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Jr. Zoom Soccer Cleats</h1>
            <div className='flex gap-5'>
            <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$1160</p>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar/>
            <IoIosStar/>
            <p className='ml-2 text-[12px] text-gray-400'>(35)</p>
            </div>
            </div>
            <div className='flex gap-2 mt-2'>
                <Image src="/images/doublecircle.png" alt='circle' width={20} height={20}></Image>
                <Image src="/images/ellipse.png" alt='circle' width={20} height={20}></Image>
            </div>
        </div>
        <div className=' md:mt-2'>
            <Image src="/images/product7.png" alt='product7' width={270} height={250}></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>GP11 Shooter USB Gamepad</h1>
            <div className='flex gap-5'>
            <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$660</p>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar/>
            <IoIosStar/>
            <p className='ml-2 text-[12px] text-gray-400'>(55)</p>
            </div>
            </div>
            <div className='flex gap-2 mt-2'>
                <Image src="/images/doublecircle2.png" alt='circle' width={20} height={20}></Image>
                <Image src="/images/ellipse.png" alt='circle' width={20} height={20}></Image>
            </div>
        </div>
        <div className=' md:mt-2'>
            <Image src="/images/product8.png" alt='product8' width={270} height={250}></Image>
            <h1 className='font-Poppins font-medium text-[16px] text-[#000000] pt-3'>Quilted Satin Jacket</h1>
            <div className='flex gap-5'>
            <p className='text-[#DB4444] font-Poppins font-medium text-[12px]'>$660</p>
            <div className='flex text-[#FFAD33]'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar/>
            <IoIosStar/>
            <p className='ml-2 text-[12px] text-gray-400'>(55)</p>
            </div>
            </div>
            <div className='flex gap-2 mt-2'>
                <Image src="/images/doublecircle2.png" alt='circle' width={20} height={20}></Image>
                <Image src="/images/ellipse.png" alt='circle' width={20} height={20}></Image>
            </div>
        </div>
    </div>
     <button className="bg-[#DB4444] w-[150px] h-[50px] p-5 mt-4 ml-16 text-[12px] font-Poppins font-medium text-[#FAFAFA] md:w-[234px] md:h-[56px] md:text-[16px] md:ml-[500px]">View All Products</button>
    </div>
  )
}

export default page
