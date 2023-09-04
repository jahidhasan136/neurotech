import marketing from './images/marketing.png'
import webDevelopment from './images/web_development.png'
// import app from './images/app.png'
import art from './images/art.png'
import digital from './images/digital.png'
import video from './images/video.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation'

const WhatNeed = () => {
    return (
        <div className="container mt-[90px]">
            <h2 className="text-[40px] lg:text-[55px] font-bold text-[#002A4A] mb-[61px] text-center">What do you need?</h2>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-[38px] mx-auto justify-center'>
                <div className='border-[2px] border-[#D9D9D9] py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] relative w-[375px] h-[393px]'>
                    <div className='bg-[#02ACD0] w-[217px] h-1 absolute top-0 right-[70px] flex justify-center text-center mx-auto'></div>
                    <div className='w-[81px] h-[82px] bg-[#02ACD0] p-5 rounded-md mb-[38px]'>
                        <img src={marketing.src} alt="" />
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-lg font-medium text-[#002A4A]'>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                </div>
                <div className='py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] bg-[#02ACD0] text-white relative w-[375px] h-[393px]'>
                    <div className='w-[81px] h-[82px] bg-white p-5 rounded-md mb-[38px]'>
                        <img src={webDevelopment.src} alt="" />
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <p className='text-lg font-medium '>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                </div>
                <div className='border-[2px] border-[#D9D9D9] py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] relative w-[375px] h-[393px]'>
                    <div className='bg-[#02ACD0] w-[217px] h-1 absolute top-0 right-[70px] flex justify-center text-center mx-auto'></div>
                    <div className='w-[81px] h-[82px] bg-[#FFD80D] p-5 rounded-md mb-[38px]'>
                        <img src={art.src} alt="" />
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-lg font-medium text-[#002A4A]'>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                </div>
                <div className='border-[2px] border-[#D9D9D9] py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] relative w-[375px] h-[393px]'>
                    <div className='bg-[#02ACD0] w-[217px] h-1 absolute top-0 right-[70px] flex justify-center text-center mx-auto'></div>
                    <div className='w-[81px] h-[82px] bg-[#FF6A28] p-5 rounded-md mb-[38px]'>
                        {/* <img src={app.src} alt="" /> */}
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-lg font-medium text-[#002A4A]'>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                </div>
                <div className='border-[2px] border-[#D9D9D9] py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] relative w-[375px] h-[393px]'>
                    <div className='bg-[#02ACD0] w-[217px] h-1 absolute top-0 right-[70px] flex justify-center text-center mx-auto'></div>
                    <div className='w-[81px] h-[82px] bg-[#02ACD0] p-5 rounded-md mb-[38px]'>
                        <img src={digital.src} alt="" />
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-lg font-medium text-[#002A4A]'>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                </div>
                <div className='border-[2px] border-[#D9D9D9] py-9 md:py-[37px] px-2 md:px-[39px] rounded-[10px] relative w-[375px] h-[393px]'>
                    <div className='bg-[#02ACD0] w-[217px] h-1 absolute top-0 right-[70px] flex justify-center text-center mx-auto'></div>
                    <div className='w-[81px] h-[82px] bg-[#2DD840] p-5 rounded-md mb-[38px]'>
                        <img src={video.src} alt="" />
                    </div>
                    <RevealAnimation>
                        <h3 className='text-[25px] mb-[30px] font-bold'>Digital Marketing</h3>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-lg font-medium text-[#002A4A]'>We are delivering top level digital services with our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                </div>
            </div>
        </div>
    );
};

export default WhatNeed;