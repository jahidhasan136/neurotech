import { AiOutlineDoubleRight } from "react-icons/ai";
import logo from './images/logo.png'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiRightArrowCircle } from 'react-icons/bi'
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#DBEEF5]">
            <div className="container mt-[100px] md:mt-[166px] pt-[53px]">
                <div className="flex justify-between items-center border border-dashed border-[#02ACD0] rounded-[10px] py-[10px] lg:py-[32px] md:px-[30px] lg:px-[100px]">
                    <h2 className="text-2xl md:text-[40px] xl:text-[55px] font-bold">Get in touch</h2>
                    <button className='button-primary mr-10'>Let's Start <AiOutlineDoubleRight className='ml-[10px]' /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-[#002A4A] mt-[88px]">
                    <div>
                        <img className="mb-[10px]" src={logo.src} alt="" />
                        <p className="text-base">We are delivering top level digital services with our best experienced team.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-[18px]">Support</h3>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Teams</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Careers</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Blog</Link>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-[18px]">Products</h3>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Project</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">News</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Events</Link>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-[18px]">Security</h3>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Privacy Policy</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Terms & Conditions</Link>
                        <Link href='/' className="text-base font-medium mb-[14px] block">Reviews</Link>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-[18px]">Subscribe</h3>
                        <div className="relative">
                            <input className="bg-[#02ACD0] p-[12px] text-[#FFFFFF] rounded" type="text" placeholder="Enter your email" />
                            <BiRightArrowCircle className="absolute top-4 -right-10 xl:right-5 text-white text-xl"></BiRightArrowCircle>
                        </div>
                        <div className="mt-[24px] flex gap-[15px]">
                            <div className="bg-[#02ACD0] p-2 rounded text-white">
                                <BiLogoFacebook />
                            </div>
                            <div className="bg-[#02ACD0] p-2 rounded text-white">
                                <BiLogoTwitter />
                            </div>
                            <div className="bg-[#02ACD0] p-2 rounded text-white">
                                <BiLogoLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-[0.4px] border-[#9C9C9C] pt-[50px]"></div>
                <p className="text-sm  pt-5 text-center pb-5">Copyright 2022 ©neorotech  All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;