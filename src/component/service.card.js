import React from "react";

const ServiceCard = (props) => {
  return (
    <div
      className="col-md-4 col-sm-4"
      data-aos="zoom-in-left"
      data-aos-duration="2000"
    >
      <div className="serviceBox">
        <div className="serviceImgBox">
          <img src={process.env.PUBLIC_URL + props.image} alt={props.title} />
        </div>
        <div className="servicContentBox">
          <h5>{props.title}</h5>
          <p>
           {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
