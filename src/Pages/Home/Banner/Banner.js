import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/banner/pearls-g5d4c68d34_1920.jpg';
import img2 from '../../../images/banner/jewellery2.jpg';
import img3 from '../../../images/banner/jewellery3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100 banner-img"
      src={img3}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 banner-img"
      src={img1}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 banner-img"
      src={img2}
      alt="Second slide"
    />

  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;