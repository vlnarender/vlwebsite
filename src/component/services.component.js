import React from 'react'
import ServiceCard from '../component/service.card'
import servicesAPI from '../configAPI/service.api'

const Service = () =>{
  

  return(
    <div className="mainContainer services" style={{position:`relative`}}>
                    <img className="bgService" src="../images/7.png" alt="bg" />

    <div className="container">
      <div className="row">
        <div className="col-md-12" data-aos="zoom-in" data-aos-duration="2000">
          <h4>Areas we <span>Serve</span></h4>
          <p>
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.


          </p>
        </div>
      </div>


      <div className="row mt-3">
        
        {
          servicesAPI.map((item) =>{

            return <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          })
          
        }


        
      </div>
    </div>
    </div>
  )
}

export default Service;