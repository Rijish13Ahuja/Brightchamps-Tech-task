import { FunctionComponent } from "react";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent5 ${className}`}>
      <div className="frame-child83" />
      <div className="card-wrapper1">
        <div className="card48">
          <div className="background47" />
          <div className="frame-parent42">
            <img className="frame-icon33" alt="" src="/card.svg" />
            <div className="heart46">
              <img
                className="heart-icon47"
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent43">
        <div className="frame-parent44">
          <div className="frame-wrapper2">
            <div className="rectangle-parent6">
              <div className="frame-child84" />
              <div className="frame-parent45">
                <div className="group">
                  <b className="b1">02</b>
                  <div className="frame-child85" />
                </div>
                <div className="frame-child86" />
              </div>
            </div>
          </div>
          <h2 className="heading-16">Select a blue card.</h2>
        </div>
        <div className="heading-1-life-skills-container">
          <div className="heading-17">It has alphabets.</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
