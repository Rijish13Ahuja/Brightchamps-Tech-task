import { FunctionComponent } from "react";
import "./CardContainer1.css";

export type CardContainer1Type = {
  className?: string;
};

const CardContainer1: FunctionComponent<CardContainer1Type> = ({
  className = "",
}) => {
  return (
    <div className={`card-container4 ${className}`}>
      <div className="heart-container-group">
        <div className="heart-container">
          <div className="card-parent14">
            <div className="card86">
              <div className="background84" />
              <div className="heart-pair-group">
                <img className="heart-pair-icon2" alt="" src="/card.svg" />
                <div className="heart83">
                  <img
                    className="heart-icon85"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card87">
              <div className="background85" />
              <div className="frame-parent75">
                <img className="frame-icon60" alt="" src="/card.svg" />
                <div className="heart84">
                  <img
                    className="heart-icon86"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dual-cards">
          <div className="card88">
            <div className="background86" />
            <div className="image-holder">
              <img className="frame-icon61" alt="" src="/frame-2.svg" />
              <div className="frame-parent76">
                <img
                  className="frame-child103"
                  loading="lazy"
                  alt=""
                  src="/group-666.svg"
                />
                <div className="o">O</div>
              </div>
            </div>
          </div>
          <div className="card-wrapper10">
            <div className="card89">
              <div className="background87" />
              <div className="frame-parent77">
                <img className="frame-icon62" alt="" src="/card.svg" />
                <div className="heart85">
                  <img
                    className="heart-icon87"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper11">
            <div className="card90">
              <div className="background88" />
              <div className="frame-parent78">
                <img className="frame-icon63" alt="" src="/card.svg" />
                <div className="heart86">
                  <img
                    className="heart-icon88"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
