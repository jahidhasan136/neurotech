import bench from './images/ench.png'
import facebook from './images/facebook.png'
import intercom from './images/intercom.png'
import amazon from './images/amazon.png'
import morning from './images/morning.png'
import reebok from './images/reebok.png'

const Sites = () => {
    return (
        <div className="container mt-[96px]">
            <div className='grid grid-cols-3 xl:grid-cols-6 justify-between items-center gap-5 md:gap-0 bg-[#DBEEF5] py-[52px] px-[36px]'>
                <img className='object-contain' src={intercom.src} alt="" />
                <img className='object-contain' src={bench.src} alt="" />
                <img className='w-[111px] h-[22px]' src={facebook.src} alt="" />
                <img className='w-[100px] h-[26px]' src={amazon.src} alt="" />
                <img className='w-[111px] h-[32px]' src={morning.src} alt="" />
                <img className='w-[122px] h-[39px]' src={reebok.src} alt="" />
            </div>
        </div>
    );
};

export default Sites;