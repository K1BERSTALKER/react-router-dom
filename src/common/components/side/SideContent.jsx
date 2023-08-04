import React from "react";
import sideImage from "../../../images/side.jpg";
import { side, socialIcon } from "../../../data/data";
import { FiDownloadCloud } from "react-icons/fi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "../../../scss/sideContent.scss";

const Progress = ({ done, title, back }) => {
  return (
    <div className="progress">
      <div
        className={`progress__done ${back}`}
        style={{ opacity: 1, width: `${done}%` }}
      >
      </div>
      <div className="progress__num">
        <h4>{done}.</h4>
      </div>
      <div className="progress__title">
        <h4>{title}.</h4>
      </div>
    </div>
  );
};

function SideContent() {
  return (
    <>
      <div className="sideContent">
        <div className="sideContent__top">
          <div className="sideContent__top__img">
            <img src={sideImage} alt="Side Img" />
            <div className="sideContent__top__img__name">
              <h3>Linda M. Bellamy</h3>
              <span>Sr. Developer</span>
            </div>
          </div>
          <div className="sideContent__top__social">
            {socialIcon.map((icons) => (
              <div className={icons.class}>
                <span>{icons.icon}</span>
              </div>
            ))}
          </div>
          <div className="sideContent__bottom">
            <div className="sideContent__bottom__skill">
              {side.map((item) => (
                <div className="side__skill__box">
                  <Progress
                    title={item.text}
                    done={item.num}
                    back={item.class}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="sideContent__bottom__buttonGroup">
            <button className="button">
              <span>
                <FiDownloadCloud className="button__bicon" />
              </span>
            </button>
            <button className="button">
              <RiMoneyDollarCircleLine className="button__bicon" />
              <span>HIRE ME</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideContent;
