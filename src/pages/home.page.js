import React from 'react'
import Banner from '../component/banner.component'
import EssThreeBox from '../component/ess.component'
// import 'aos/dist/aos.css'; 
import Aboutus from '../component/aboutus.component'
import Service from '../component/services.component'
import Footer from '../layout/footer.layout.'
import Header from '../layout/header.layout'
const Home = () =>{
  return(
    <>
        <Header/>
        <Banner/>
        <EssThreeBox/>
        <Aboutus/>
        <Service/>
        <Footer/> 
    
    </>
  )
};

export default Home;