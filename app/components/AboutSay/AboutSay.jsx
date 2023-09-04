import { AiFillStar } from 'react-icons/ai'
import RevealAnimation from '../RevealAnimation/RevealAnimation'
import imgOne from './images/img1.png'
import proOne from './images/pro1.png'
import proTwo from './images/pro2.png'
import proThree from './images/pro3.png'
import quote from './images/quote.png'

const AboutSay = () => {
    return (
        <div className="container mt-[100px] md:mt-[278px]">
            <div className='md:flex justify-between'>
                <div>
                    <RevealAnimation>
                        <h2 className='text-[#002A4A] text-[30px] lg:text-[40px] xl:text-[55px] font-bold mb-5'>What our customers say about us</h2>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className='text-[#002A4A] text-sm lg:text-lg xl:text-[22px] font-medium mb-5 md:mb-0'>We are delivering top level digital services <br /> with our best experienced team,</p>
                    </RevealAnimation>
                </div>
                <img className=' md:w-1/2 xl:w-auto' src={imgOne.src} alt="" />
            </div>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[43px] lg:-mt-[185px] mt-10 md:mt-0 mx-auto justify-center'>
                <div className='bg-[#F4F4F4] rounded-[10px] py-[31px] px-[32px] w-[338px] h-[275px]'>
                    <div className='flex items-center'>
                        <img className='mr-[25px]' src={proOne.src} alt="" />
                        <div>
                            <RevealAnimation>
                                <h4 className='text-xl font-medium mb-2'>Binod Sharma</h4>
                            </RevealAnimation>
                            <RevealAnimation>
                                <p className='text-sm'>Business Man</p>
                            </RevealAnimation>
                        </div>
                        <span className='text-sm flex items-center'>4.5 <AiFillStar className='text-[#FF4711]'></AiFillStar></span>
                    </div>
                    <hr className='mt-5 mb-6' />
                    <img src={quote.src} className='mb-[5px]' alt="" />
                    <RevealAnimation>
                        <p className='text-[13px]'>
                            Better high-touch, digital model for maternity and improve digital engagement. fertility care is designed to completement your services.
                        </p>
                    </RevealAnimation>
                </div>
                <div className='bg-[#F4F4F4] rounded-[10px] py-[31px] px-[32px] w-[338px] h-[275px]'>
                    <div className='flex items-center'>
                        <img className='mr-[25px]' src={proTwo.src} alt="" />
                        <div>
                            <RevealAnimation>
                                <h4 className='text-xl font-medium mb-2'>Roger S. Head</h4>
                            </RevealAnimation>
                            <RevealAnimation>
                                <p className='text-sm'>UI/Ux Designer</p>
                            </RevealAnimation>
                        </div>
                        <span className='text-sm flex items-center'>4.5 <AiFillStar className='text-[#FF4711]'></AiFillStar></span>
                    </div>
                    <hr className='mt-5 mb-6' />
                    <img src={quote.src} className='mb-[5px]' alt="" />
                    <RevealAnimation>
                        <p className='text-[13px]'>
                            Better high-touch, digital model for maternity and improve digital engagement. fertility care is designed to completement your services.
                        </p>
                    </RevealAnimation>
                </div>
                <div className='bg-[#02ACD0] rounded-[10px] py-[31px] px-[32px] w-[338px] h-[275px] text-white'>
                    <div className='flex items-center'>
                        <img className='mr-[25px]' src={proThree.src} alt="" />
                        <div>
                            <h4 className='text-xl font-medium mb-2'>Minakki Shen</h4>
                            <p className='text-sm'>Photographer</p>
                        </div>
                        <span className='text-sm flex items-center'>4.5 <AiFillStar className='text-[#FF4711]'></AiFillStar></span>
                    </div>
                    <hr className='mt-5 mb-6' />
                    <img src={quote.src} className='mb-[5px]' alt="" />
                    <p className='text-[13px]'>
                        Better high-touch, digital model for maternity and improve digital engagement. fertility care is designed to completement your services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSay;