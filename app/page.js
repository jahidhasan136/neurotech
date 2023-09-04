import Image from 'next/image'
import Banner from './components/Banner/Banner'
import Sites from './components/Sites/Sites'
import WhatNeed from './components/WhatNeed/WhatNeed'
import MakeThings from './components/MakeThings/MakeThings'
import Helps from './components/Helps/Helps'
import WhyOurAgency from './components/WhyOurAgency/WhyOurAgency'
import AboutSay from './components/AboutSay/AboutSay'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Sites></Sites>
      <WhatNeed></WhatNeed>
      <MakeThings></MakeThings>
      <Helps></Helps>
      <WhyOurAgency></WhyOurAgency>
      <AboutSay></AboutSay>
      <Footer></Footer>
    </>
  )
}
