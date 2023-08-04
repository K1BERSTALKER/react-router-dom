import React, { useState } from "react";
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
export default function Slider({ items, Heading }) {
  const [data, setData] = useState(items.review);
  const [curSlide, setCurSlide] = useState(0);
  const checkIndex = (position) => {
    if (position > data.length - 1) {
      return 0;
    } else if (position < 0) {
      return data.length - 1;
    }
    return position
  };
  const nextSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide + 1;
      return checkIndex(newSlide);
    });
  };
  const prevSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide - 1;
      return checkIndex(newSlide);
    });
  };
  return (
    <>
      <div className="about__sider">
        <Heading title="what they says" />
        <div className="about__sider__content">
          {data.map((slide, index) => (
            <>
            {index === curSlide && (
                <div className="card">
              <div className="img">
                <img src={slide.cover} alt="Images Content" />
              </div>
              <div className="text">
                <p>{slide.desc}</p>
                <h3>{slide.name}</h3>
                <label htmlFor="">{slide.link}</label>
              </div>
            </div>
            )}
            </>
          ))}

          <div className="about__sider__content__slideButton">
            <button className="icon" onClick={nextSlide}>
            <BsArrowRight />
            </button>
            <button className="icon" onClick={prevSlide}>
            <BsArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
