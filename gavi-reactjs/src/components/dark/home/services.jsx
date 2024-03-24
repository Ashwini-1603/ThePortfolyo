import React from 'react';
import data from '../../../data/services.json';
function Services(prop) {
  
  return (
    <div
      className="sec-box services section-padding bord-thin-bottom"
      id="services"
    >
      <div className="sec-head mb-80 wow fadeInUp">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Our Services</h6>
            <h3>
              Turn Information{' '}
              <span className="main-color">Into Actionable</span> Insights
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        {prop.data.user&&prop.data.user.services.map((item, index) => (
          <div key={index} className="col-md-6">
            <div className="item mb-40 wow fadeIn" data-wow-delay=".2s">
              <span className="icon-img-70 mb-30 opacity-7">
                <img src={item.image.url} alt="" />
              </span>
              <h6 className="text-u ls1 mb-15">{item.name}</h6>
              <p>{item.desc}</p>
              <h4>{item.charge}</h4>
              <div className="bord-color"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;