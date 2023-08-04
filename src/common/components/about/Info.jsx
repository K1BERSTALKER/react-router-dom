import React from "react";

export default function Info({ items, Heading }) {
  return (
    <>
      <Heading title="about info" />
      <div className="about__details__content">
        {items.deatils.map((val) => (
          <div className="about__details__content__box">
            <div className="icon">
              <span>{val.icon}</span>
            </div>
            <div className="about__details__content__box__text">
              <h4>{val.text}</h4>
              <span>{val.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
