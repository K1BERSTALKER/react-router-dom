import React from "react";
import { about } from "../../../data/data";
import Info from "./Info";
import Bio from "./Bio";
import Services from "./Services";
import Slider from "./Slider";
import Price from "./Price";
import Heading from "../../Heading";
export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
        {about.map((items) => {
          return (
            <>
              <div className="about__details">
                <Info items={items} Heading={Heading} />
                <Bio items={items} Heading={Heading} />
              </div>
              <Services items={items} Heading={Heading} />
              <Slider items={items} Heading={Heading} />
              <Price items={items} Heading={Heading} />
              
            </>
          );
        })}
        </div>
      </div>
    </>
  );
}
