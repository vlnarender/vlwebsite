import React from 'react'
import Contact from '../component/contact.address.component'
import ContactForm from '../component/contact.form.component'
import FooterBottom from '../component/footbottom.component'


const Footer = () =>{

  return(
    <>
    <div className="mainContainer mrgTop">
      <div className="footerBanner" style={{backgroundPosition:`right`, backgroundImage:`url('images/contactbanner.jpg')`}}>
        <div className="container" style={{position:`relative`}}>
        <div className="row">
          <div className="col-md-6 col-sm-6">
          <Contact/>
          </div>
          <div className="col-md-6 col-sm-6">

          <ContactForm/>
          </div>
          </div>
   
   
    </div>
    </div>
    </div>

    <div className="mainContainer">
      <FooterBottom/>
    </div>
    </>
  )
};

export default Footer;