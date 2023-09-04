import { AiOutlineDoubleRight } from "react-icons/ai";
import imageOne from './images/imgOne.png'

const WhyOurAgency = () => {
    return (
        <div className="container mt-[100px] md:mt-[180px] lg:mt-[247px]">
            <div className="bg-[#02ACD0] rounded-md md:rounded-none md:flex justify-center items-center h-[500px] md:h-80 lg:h-[452px] relative">
                <img className="md:absolute bottom-0 -left-10 w-1/2 lg:w-fit mx-auto" src={imageOne.src} alt="" />
                <div className="md:absolute right-0 pr-20 xl:pr-[99px] pl-4">
                    <h2 className="text-[30px] md:text-[40px] xl:text-[60px] font-extrabold mb-[9px] text-white xl:leading-[80px]">Why you choose <br /> our agency</h2>
                    <p className="md:text-lg xl:text-[22px] mb-5 xl:mb-10 text-[#ffffffcc]">We are delivering top level digital services <br /> with our best experienced team.</p>
                    <button className="text-base xl:text-[22px] font-medium bg-white py-[21px] px-[33px] rounded-r-[25px] rounded-b-[25px] text-[#02ACD0] flex items-center shadow-lg shadow-[#00000066]">Read more <AiOutlineDoubleRight className='ml-[10px]' /></button>
                </div>
            </div>
        </div>
    );
};

export default WhyOurAgency;