import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesPage.css";

const ServicesPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="services-page">
      <h1 className="services-title">Our Services</h1>
      <Slider {...settings}>
        <div className="service-card">
          <div className="service-image" />
          <h2 className="service-title">Service 1</h2>
          <p className="service-description">Description of service 1.</p>
        </div>
        <div className="service-card">
          <div className="service-image" />
          <h2 className="service-title">Service 2</h2>
          <p className="service-description">Description of service 2.</p>
        </div>
        <div className="service-card">
          <div className="service-image" />
          <h2 className="service-title">Service 3</h2>
          <p className="service-description">Description of service 3.</p>
        </div>
        {/* Add more services as needed */}
      </Slider>
    </div>
  );
};

export default ServicesPage;
