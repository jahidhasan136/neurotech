import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai'
import video_icon from './images/vi_icon.png'
import banner from './images/banner.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation';

const Banner = () => {
    return (
        <div className='container mt-[30px] md:mt-[50px] lg:mt-[95px]'>
            <div className='md:flex justify-between items-center'>
                <div>
                    <RevealAnimation>
                        <h1 className='text-[40px] lg:text-[55px] xl:text-[75px] font-bold text-[#002A4A] mb-1 md:mb-4 xl:mb-[30px] leading-[50px] lg:leading-[70px] xl:leading-[90px]'>
                            Building digital <br /> products,brands <br /> & experience
                        </h1>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-base xl:text-[22px] font-medium mb-5 xl:mb-[44px]'>
                            We are delivering top level digital services with our best <br /> experienced team, just et started with us.
                        </p>
                    </RevealAnimation>
                    <div className='flex items-center'>
                        <button className='button-primary mr-10'>Get Started <AiOutlineDoubleRight className='ml-[10px]' /></button>
                        <div className='flex items-center gap-5'>
                            <div className='bg-[#FFD80D] p-[13px] rounded-full cursor-pointer'>
                                <img src={video_icon.src} alt="" />
                            </div>
                            <p className='text-[22px] font-medium hidden xl:block'>Watch our Video</p>
                        </div>
                    </div>
                </div>
                <div className='relative mt-12 flex justify-center'>
                    <img className='w-10/12 md:w-full' src={banner.src} alt="" />
                    <div className='h-[290px] lg:h-[454px] w-[290px] md:w-[370px] lg:w-[480px] bg-[#02ACD0] absolute -top-5 md:-top-10 2xl:-top-[74px] left-5 2xl:left-20 -z-10 rounded-[10px]'></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;