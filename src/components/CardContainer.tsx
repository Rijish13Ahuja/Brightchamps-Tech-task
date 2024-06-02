import { FunctionComponent } from "react";
import "./CardContainer.css";

export type CardContainerType = {
  className?: string;
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`card-container3 ${className}`}>
      <div className="round-containers-parent">
        <div className="round-containers" />
        <div className="round-containers1" />
        <div className="round-containers2" />
      </div>
      <div className="card82">
        <div className="background80" />
        <div className="sub-cards-parent">
          <img className="sub-cards-icon" alt="" src="/card.svg" />
          <div className="heart79">
            <img
              className="heart-icon81"
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
      </div>
      <div className="empty-card">
        <div className="wrapper-card-group">
          <div className="wrapper-card2">
            <img className="card-icon12" alt="" src="/card7@2x.png" />
          </div>
          <img
            className="orange-icon"
            loading="lazy"
            alt=""
            src="/orange.svg"
          />
        </div>
      </div>
      <div className="card-wrapper7">
        <div className="card83">
          <div className="background81" />
          <div className="frame-parent73">
            <img className="frame-icon57" alt="" src="/card.svg" />
            <div className="heart80">
              <img
                className="heart-icon82"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper8">
        <div className="card84">
          <div className="background82" />
          <div className="card-trio">
            <img className="frame-icon58" alt="" src="/card.svg" />
            <div className="heart81">
              <img
                className="heart-icon83"
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper9">
        <div className="card85">
          <div className="background83" />
          <div className="frame-parent74">
            <img className="frame-icon59" alt="" src="/card.svg" />
            <div className="heart82">
              <img
                className="heart-icon84"
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
