import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent21.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/final-rewards-screen");
  }, [navigate]);

  return (
    <footer className={`frame-footer ${className}`}>
      <div className="ellipse-parent2">
        <div className="frame-child94" />
        <div className="frame-child95" />
        <div className="frame-child96" />
      </div>
      <div className="frame-wrapper7" onClick={onGroupContainerClick}>
        <div className="polygon-container">
          <img
            className="frame-child97"
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className="rectangle-parent8">
            <div className="frame-child98" />
            <button className="rectangle-parent9">
              <div className="frame-child99" />
              <div className="next">NEXT</div>
              <div className="pointer">
                <img className="pointer-child" alt="" src="/rectangle-15.svg" />
                <img className="pointer-item" alt="" src="/ellipse-3.svg" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent2;
