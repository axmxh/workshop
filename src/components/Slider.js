import React from "react";
import banner from "../images/banner.png";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="" src={banner} alt="First slide" />
          <Carousel.Caption>
            <h3>Al Foundation</h3>
            <p>
              is focused on inspiring the next generation of kids Healthcare
              professionals.
            </p>
            <button className="btn">Donate Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={banner} alt="Third slide" />
          <Carousel.Caption>
            <h3>Al Foundation</h3>
            <p>
              is focused on inspiring the next generation of kids Healthcare
              professionals.
            </p>
            <button className="btn">Donate Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={banner} alt="Third slide" />
          <Carousel.Caption>
            <h3>Al Foundation</h3>
            <p>
              is focused on inspiring the next generation of kids Healthcare
              professionals.
            </p>
            <button className="btn">Donate Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
