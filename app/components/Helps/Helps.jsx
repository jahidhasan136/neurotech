import { AiOutlineDoubleRight } from "react-icons/ai";
import imgOne from './images/img1.png'
import imgTwo from './images/img2.png'
import borderOne from './images/border1.png'
import borderTwo from './images/border2.png'
import RevealAnimation from "../RevealAnimation/RevealAnimation";

const Helps = () => {
    return (
        <div className="container mt-10 md:mt-[130px] mb-[130px]">
            <div className="md:flex items-center justify-between">
                <div className="text-end md:text-start">
                    <RevealAnimation>
                        <h2 className="font-bold text-[30px] lg:text-[40px] xl:text-[55px] text-[#002A4A] mb-[18px]">Follow our steps, we <br /> will help you</h2>
                    </RevealAnimation>
                    <RevealAnimation>
                        <p className="mb-5 lg:mb-[42px] text-sm lg:text-lg xl:text-[22px] font-semibold">We are delivering top level digital services with <br /> our best experienced team, just get started <br /> with us.</p>
                    </RevealAnimation>
                    <button className='button-primary mr-10 mx-auto flex lg:justify-start'>Read more <AiOutlineDoubleRight className='ml-[10px]' /></button>
                </div>
                <div className="relative mt-[74px] lg:mt-0 flex justify-end mx-auto">
                    <img className="w-9/12 lg:w-full inline-block" src={imgOne.src} alt="" />
                    <img className="w-1/3 lg:w-auto absolute -bottom-5 -left-0 lg:-left-40" src={imgTwo.src} alt="" />
                    <img className="w-1/3 lg:w-auto absolute -top-12 left-5 lg:-left-10 -z-10" src={borderOne.src} alt="" />
                    <img className="w-3/5 lg:w-auto absolute -bottom-10 lg:-bottom-14 -z-10 left-0" src={borderTwo.src} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Helps;