import { FunctionComponent, useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import { useNavigate } from "react-router-dom";
import "./ActivityScreen.css";

const ActivityScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/instruction-screen");
  }, [navigate]);

  return (
    <div className="activity-screen">
      <FrameComponent5 />
      <div className="custom-shape" />
      <FrameComponent6 />
      <main className="image-5-parent1">
        <img className="image-5-icon4" alt="" src="/image-5@2x.png" />
        <img
          className="frame-child21"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child22" alt="" src="/group-148@2x.png" />
        <img className="frame-child23" alt="" src="/group-1541@2x.png" />
        <img className="frame-child24" alt="" src="/vector-224.svg" />
      </main>
      <div className="ellipse-parent">
        <div className="frame-child25" />
        <div className="frame-child26" />
        <div className="frame-child27" />
      </div>
    </div>
  );
};

export default ActivityScreen;
