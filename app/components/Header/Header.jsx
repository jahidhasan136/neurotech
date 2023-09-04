'use client'

import logo from './images/logo.png'
import { FaBars, FaTimesCircle } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);

    }
    return (
        <>
            <div className='container'>
                <div className='flex justify-between items-center pt-10'>
                    <Link href="/">
                        <img className='z-10' src={logo.src} alt="" />
                    </Link>
                    <div className='md:flex gap-10 text-lg lg:text-xl z-10 font-bold hidden'>
                        <Link href="/" className='text-[#002a4abf] transition-all'>About Us</Link>
                        <Link href="/" className='text-[#002a4abf] transition-all'>Our Client</Link>
                        <Link href="/" className='text-[#002a4abf] transition-all'>Services</Link>
                        <Link href="/" className='text-[#002a4abf] transition-all'>Contact Us</Link>
                    </div>
                    <button className='hidden lg:block text-[#02ACD0] text-base lg:text-lg border rounded-r-[15px] rounded-b-[15px] border-[#02ACD0] lg:py-[13px] px-5 lg:px-[34px]'>Sign Up</button>
                    <div className='md:hidden' onClick={handleClick}>
                        <FaBars className='text-[26px]'></FaBars>
                    </div>
                </div>
            </div>

            {/* mobile device */}

            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
                <div className="logo mb-[30px]">
                    <Link href="/">
                        <img className='w-3/4' src={logo.src} alt="" />
                    </Link>
                </div>
                <ul className="space-y-[15px] text-[16px] font-bold text-white mb-[20px]">
                    <li><Link href='/' className='transition text-white'>Home</Link></li>
                    <li><Link href='/' className='transition text-white'>About</Link></li>
                    <li><Link href='/' className='transition text-white'>Features</Link></li>
                    <li><Link href='/' className='transition text-white'>Service</Link></li>
                    <li><Link href='/' className='transition text-white'>Pricing</Link></li>
                </ul>
                <button className='text-[#02ACD0] text-base lg:text-lg border rounded-r-[15px] rounded-b-[15px] border-[#02ACD0] py-[5px] px-5'>Sign Up</button>
            </div>
        </>
    );
};

export default Header;