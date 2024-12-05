import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mt-7 md:w-[100%] md:h-[500px] md:mt-32'>
      <Image src="/images/Frame 600.png" alt="hero2" width={1170} height={500} className='md:w-[100%] md:h-[500px]'></Image>
    </div>
  )
}

export default page
