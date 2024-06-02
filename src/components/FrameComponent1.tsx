import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent2 ${className}`}>
      <div className="frame-child76" />
      <div className="yes">{`YES `}</div>
      <div className="vector-parent5">
        <img className="frame-child77" alt="" src="/rectangle-15.svg" />
        <img
          className="frame-child78"
          loading="lazy"
          alt=""
          src="/ellipse-3.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
