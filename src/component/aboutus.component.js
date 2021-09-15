import React from 'react'
const Aboutus = () =>{

  return(
    <div className="aboutus">
      <div className="row">
        <div className="col-md-7 col-xs-7">
          <div className="aboutImage" >
          <img src="../images/about.png" alt="About" />
          </div>
        </div>
        <div className="col-md-5 col-xs-5">
          <div className="aboutContent">
            <h4>About <span>Us</span></h4>
            <p className="big">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look 
            </p>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            </p>

            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Aboutus;