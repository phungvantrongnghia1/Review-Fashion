import React from "react";
import Slider from "react-slick";
export default function Slide(props){

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000

      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div>
               <img src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
          </Slider>
        </div>
      );
}