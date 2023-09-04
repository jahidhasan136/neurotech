import { AiOutlineDoubleRight } from "react-icons/ai";
import imgOne from './images/img1.png'
import imgTwo from './images/img2.png'
import imgThree from './images/img3.png'
import borderOne from './images/border1.png'
import borderTwo from './images/border2.png'
import RevealAnimation from "../RevealAnimation/RevealAnimation";

const MakeThings = () => {
    return (
        <div className="container mt-[135px] mb-[100px] md:mb-[300px] lg:mb-[400px] 2xl:mb-[335px]">
            <div className="md:flex justify-between">
                <div className="relative">
                    <img className="w-2/3 lg:w-10/12 xl:w-full" src={imgOne.src} alt="" />
                    <img className="w-1/3 lg:w-1/2 xl:w-fit absolute top-20 -right-5 lg:-right-36 xl:-right-56 z-10" src={imgTwo.src} alt="" />
                    <img className="w-1/2 xl:w-fit absolute -bottom-28 xl:-bottom-36 -right-2
                    lg:-right-20 xl:-right-40" src={imgThree.src} alt="" />
                    <img className="w-1/2 xl:w-fit absolute -bottom-32 xl:-bottom-44 right-3 lg:-right-14 xl:-right-32 -z-10" src={borderOne.src} alt="" />
                    <img className="w-1/3 lg:w-1/2 xl:w-fit absolute -top-5 right-10 lg:-right-5 -z-10" src={borderTwo.src} alt="" />
                </div>
                <div className="mt-44 md:mt-0">
                    <RevealAnimation>
                        <h2 className="text-[30px] lg:text-[40px] xl:text-[55px] text-[#002A4A] mb-5 font-bold md:leading-[46px] lg:leading-[66px]">We make things <br /> look good</h2>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className="mb-5 xl:mb-10 text-sm lg:text-lg xl:text-[22px] font-semibold">We are delivering top level digital services with <br /> our best experienced team, just get started with us.</p>
                    </RevealAnimation>
                    <button className="text-base xl:text-[22px] font-medium bg-[#02ACD0] py-[21px] px-[33px] rounded-r-[25px] rounded-b-[25px] text-white flex items-center shadow-lg shadow-[#00000066]">Read more <AiOutlineDoubleRight className='ml-[10px]' /></button>
                </div>
            </div>
        </div>
    );
};

export default MakeThings;