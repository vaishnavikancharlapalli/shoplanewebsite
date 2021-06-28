import react from  "react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Carousel = ()=>
{ 
const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div>
        <Slider {...settings}>
          <div>
              <img className="caimg"src="https://shoplane.netlify.app/img/img1.png"/>
          </div>
          <div>
              <img className="caimg" src="https://shoplane.netlify.app/img/img2.png"/>
          </div>

          <div>
              <img className="caimg"src="https://shoplane.netlify.app/img/img3.png"/>
          </div>

          <div>
              <img className="caimg"src="https://shoplane.netlify.app/img/img4.png"/>
          </div>


        </Slider>
      </div>
    );
  
}
export default Carousel;