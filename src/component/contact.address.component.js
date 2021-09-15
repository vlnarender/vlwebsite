import React from 'react'

const Contact = () =>{

  return(
    <div className="contactContainer" data-aos="fade-right" data-aos-duration="2000">
      <div className="address">
        <h4>Contact <span>us</span></h4>
        <p className="querytext">
          Feel free contact with us for any kind of query.
        </p>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        </p>
      </div>

      <div className="address">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="contactAddress">
              <div>
              <img src="../images/phone-call.png" alt="phone" />
              </div>
              <div>
              <span>Phone Number</span>
              <span className="num">9873648658</span> 
              </div>
            
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="contactAddress">
              <div>
              <img src="../images/envelope.png" alt="envelope" />
              </div>
              <div>
              <span>Mail Address</span>
              <span className="num">info@variyaslabs.com</span> 
              </div>
            
            </div>
          </div>


          <div className="col-md-6 col-sm-6">
            <div className="contactAddress">
              <div>
              <img src="../images/pin.png" alt="pin" />
              </div>
              <div>
              <span>Head Office</span>
              <span className="num">9873648658</span> 
              </div>
            
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="contactAddress">
              <div>
              <img src="../images/clock.png" alt="clock" />
              </div>
              <div>
              <span>Opening Time</span>
              <span className="num">10:00am - 7am</span>
              <span className="num">(Monday to Friday)</span> 
              </div>
            
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Contact;