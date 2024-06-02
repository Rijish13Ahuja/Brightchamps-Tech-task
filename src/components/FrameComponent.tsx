import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
  sTART?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propLeft?: CSSProperties["left"];

  /** Action props */
  onGroupContainerClick?: () => void;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  sTART,
  propBackgroundColor,
  propBackgroundColor1,
  propLeft,
  onGroupContainerClick,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const sTARTStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`frame-parent37 ${className}`}>
      <div className="cog-wrapper">
        <div className="cog">
          <img className="cog-icon" loading="lazy" alt="" src="/cog.svg" />
        </div>
      </div>
      <div className="star-parent">
        <div className="star">
          <img className="star-icon" loading="lazy" alt="" src="/star.svg" />
        </div>
        <div className="progress-bar-parent">
          <img className="progress-bar-icon" alt="" src="/progress-bar.svg" />
          <div className="frame-child68" />
          <div className="frame-child69" />
        </div>
      </div>
      <div className="frame-parent38" onClick={onGroupContainerClick}>
        <div className="rectangle-parent1">
          <div className="frame-child70" />
          <button className="frame-button" style={frameButtonStyle}>
            <div className="frame-child71" style={rectangleDivStyle} />
            <div className="start" style={sTARTStyle}>
              {sTART}
            </div>
            <div className="vector-parent4">
              <img className="frame-child72" alt="" src="/rectangle-15.svg" />
              <img className="frame-child73" alt="" src="/ellipse-3.svg" />
            </div>
          </button>
        </div>
        <div className="polygon-group">
          <img
            className="frame-child74"
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className="frame-child75" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
