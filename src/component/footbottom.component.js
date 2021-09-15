import React from 'react'

const FooterBottom = () =>{

  return(
    <div className="footerbottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
              <div className="socialIcon" data-aos="fade-right" data-aos-duration="2000">
                <ul>
                  <li>Follow Us</li>
                  <li>
                    <a href="">
                    <img src="../images/facebook.png" alt="facebook" />
                    </a>
                  </li>

                  <li>
                    <a href="">
                    <img src="../images/linkedin.png" alt="linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
          </div>

          <div className="col-md-6 col-sm-6">
              <div className="copyRight" data-aos="fade-left" data-aos-duration="2000">
                2021 &copy;	 All rights reserved by Variyaslabs.com
              </div>
          </div>


        </div>
      </div>
    </div>
  )
};

export default FooterBottom;