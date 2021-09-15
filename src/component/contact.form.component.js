import React from 'react'
const ContactForm = () =>{

  return(
    <div className="contactForm" data-aos="fade-left" data-aos-duration="2000">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="First Name*"/>
            </div>

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Last Name"/>
            </div>

          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="E-mail Address"/>
            </div>

          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Phone Number"/>
            </div>

          </div>
        </div>



        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Choose Service</option>
              <option>DevOps</option>
              <option>React Js</option>
              <option>React Native</option>
              <option>Node Js</option>
            </select>
            </div>

          </div>
          
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>

            </div>

          </div>
          
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
            <button type="button" className="btn btn-primary">Send us message</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
};

export default ContactForm;