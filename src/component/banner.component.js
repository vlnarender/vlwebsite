import React from 'react'
import BannerTextAnimation from './banner.text.animation.component'
const Banner = () =>{
  return(

    <section className="bannerSection overlayBanner" style={{backgroundImage:`url('images/banner.jpg')`}}>

      <div className="bannerText">
        <div className="container text-center">
            
                <h1>Variyas <span>labs</span></h1>
                <h2>Corporate Agency</h2>
                <p data-aos="zoom-in">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <BannerTextAnimation/>
        </div>
      </div>

    </section>
  )
}

export default Banner;