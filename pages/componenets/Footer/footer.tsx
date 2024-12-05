import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className="bg-[#000000] w-[100%] mt-[500px]">
            <div className="md:flex">
          <div className="md:flex md:flex-col flex-col item-center px-5 py-5 md:w-[300px] md:h-[300px]">
            <div className="text-center md:text-left">
            <h1 className="text-[#FAFAFA] font-Inter font-bold text-xl px-5 py-5">Exclusive</h1>
            <p className="text-[#FAFAFA] font-Poppins font-medium px-5">Subscribe</p>
            <p className="text-[#FAFAFA] font-Poppins font-normal px-5">Get 10% off your first order</p>
            </div>

           <div className="mt-4 md:mt-4 w-full">
            <input type="email"
            placeholder="Enter your email"
            className="w-60 md:w-[250px] p-2 rounded-sm border border-grey-300 mr-2 text-[#FAFAFA] bg-[#000000]"/>
            </div>
           </div>

           <div className="flex flex-col md:flex-row items-center px-5 md:gap-32">
            <div className="w-[175px] mt-8 text-center md:text-left">
            <h2 className="text-[#FAFAFA] font-Poppins font-medium mb-4">Support</h2>
            <ul className="text-[#FAFAFA] font-normal space-y-2 text-[12px]">
                <li><a href="/">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
                <li><a href="/">exclusive@gmail.com</a></li>
                <li><a href="/">+88015-88888-9999</a></li>
            </ul>
            </div>
            <div className="mt-8 md:mt-0">
                <h2 className="text-[#FAFAFA] font-medium mb-4">Account</h2>
                <ul className="text-[#FAFAFA] font-normal space-y-2 text-[12px]">
                <li><a href="/">My Account</a></li>
                <li><a href="/">Login / Register</a></li>
                <li><a href="/">Cart</a></li>
                <li><a href="/">Wishlist</a></li>
                <li><a href="/">Shop</a></li>
            </ul>
            </div>
            <div className="mt-8 md:mt-0">
                <h2 className="text-[#FAFAFA] font-medium mb-4">Quick Link</h2>
                <ul className="text-[#FAFAFA] font-normal space-y-2 text-[12px]">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms Of Use</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            </div>
               <div className="mt-8 md:mt-0 md:text-left items-center">
                <h2 className="text-[#FAFAFA] font-medium ml-16">Download App</h2>
                <h1 className="text-[#FAFAFA] font-thin text-[10px] ml-12">Save $3 with App New User Only</h1>
                <div className="flex ml-12 md:ml-1 md:mt-5 mt-4">
               <Image src="/images/Qr Code.png" alt="Qr" width={70} height={50}></Image>
               <div className="w-[200px] h-[50px] ml-5">
               <Image src="/images/googleplay.png" alt="Qr" width={100} height={50}></Image>
               <Image src="/images/playstore.png" alt="Qr" width={100} height={50} className="mt-2"></Image>
               <div className="flex text-white mt-2 gap-3 md:flex md:text-white md:mt-4 md:gap-3 ">
               <FaFacebook/>
               <FiTwitter/>
               <FaInstagram/>
               <FaLinkedin/>
               </div>
               </div>
               </div>
               </div>
               </div>
            </div>
            <div className="bg-[#000000] text-center py-4 mt-10">
            <h2 className="text-[#FAFAFA] text-[10px] font-normal">© Copyright Rimel 2022. All right reserved</h2>
            </div>
        </div>
    )
}
export default Footer