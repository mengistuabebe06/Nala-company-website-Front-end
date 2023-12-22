import React from "react";

("use client");

import { Carousel } from "flowbite-react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slider() {
  return (
    <div className="container mx-auto px-4 h-10">
      <AliceCarousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          className="sliderimg"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          className="sliderimg"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          className="sliderimg"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          className="sliderimg"
        />
      </AliceCarousel>
    </div>
    // <Carousel>
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
    //   />
    // </Carousel>
  );
}
