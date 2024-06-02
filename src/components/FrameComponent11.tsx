import { FunctionComponent } from "react";
import "./FrameComponent11.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent62 ${className}`}>
      <div className="table-parent">
        <div className="table" />
        <div className="header" />
        <div className="col" />
      </div>
      <div className="card-wrapper2">
        <div className="card68">
          <div className="background66" />
          <div className="cardstack">
            <img className="frame-icon48" alt="" src="/card.svg" />
            <div className="heart65">
              <img
                className="heart-icon67"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper3">
        <div className="card69">
          <div className="background67" />
          <div className="frame-parent63">
            <img className="frame-icon49" alt="" src="/card.svg" />
            <div className="heart66">
              <img
                className="heart-icon68"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="heading-1-life-skills-wrapper2">
        <div className="heading-112">Now select second card .</div>
      </div>
      <div className="card-wrapper4">
        <div className="card70">
          <div className="background68" />
          <div className="frame-parent64">
            <img className="frame-icon50" alt="" src="/card.svg" />
            <div className="heart67">
              <img
                className="heart-icon69"
                loading="lazy"
                alt=""
                src="/heart-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-wrapper5">
        <div className="card71">
          <div className="background69" />
          <div className="frame-parent65">
            <img className="frame-icon51" alt="" src="/card.svg" />
            <div className="heart68">
              <img
                className="heart-icon70"
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

export default FrameComponent1;
