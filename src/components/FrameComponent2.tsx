import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent7 ${className}`}>
      <div className="frame-child87" />
      <div className="frame-parent46">
        <div className="p-l-a-y-wrapper">
          <div className="p-l-a-y">
            <div className="p-l-a-y-child" />
            <div className="frame-parent47">
              <div className="t-e-x-t-parent">
                <b className="t-e-x">03</b>
                <div className="frame-child88" />
              </div>
              <div className="frame-child89" />
            </div>
          </div>
        </div>
        <div className="frame-parent48">
          <div className="heading-1-life-skills-group">
            <div className="heading-18">If they’re same</div>
            <div className="frame-wrapper3">
              <div className="ellipse-container">
                <div className="frame-child90" />
                <img
                  className="card-icon9"
                  loading="lazy"
                  alt=""
                  src="/card-1@2x.png"
                />
                <img className="card-icon10" alt="" src="/card-2@2x.png" />
              </div>
            </div>
          </div>
          <div className="heading-1-life-skills-frame">
            <h2 className="heading-19">Its a match !</h2>
          </div>
        </div>
      </div>
      <div className="heading-1-life-skills-wrapper1">
        <div className="heading-110">otherwise retry :(</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
