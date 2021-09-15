import React from 'react'

const EssThreeBox = () =>{
  return(
    <div className="threebox" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <div className="grayStrip">
          <div className="row row-eq-height">
            <div className="col-md-4 col-sm-4">
              <div className="essBox">
                <h3>Experience</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="essBox">
                <h3>Strategy</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="essBox">
                <h3>Social</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default EssThreeBox;