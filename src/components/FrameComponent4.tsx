import { FunctionComponent } from "react";
import "./FrameComponent4.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent3 ${className}`}>
      <div className="frame-child79" />
      <div className="card-frame">
        <div className="card47">
          <div className="background46" />
          <div className="card-parent7">
            <img className="card-icon7" alt="" src="/card.svg" />
            <div className="heart45">
              <img className="heart-icon46" alt="" src="/heart.svg" />
            </div>
          </div>
          <img className="card-icon8" alt="" src="/card1@2x.png" />
        </div>
      </div>
      <div className="frame-parent39">
        <div className="frame-wrapper1">
          <div className="frame-parent40">
            <div className="rectangle-parent4">
              <div className="frame-child80" />
              <div className="frame-parent41">
                <div className="parent">
                  <b className="b">01</b>
                  <div className="frame-child81" />
                </div>
                <div className="frame-child82" />
              </div>
            </div>
            <div className="heading-1-life-skills-wrapper">
              <h2 className="heading-14">Select a pink card.</h2>
            </div>
          </div>
        </div>
        <div className="heading-15">It has images.</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
