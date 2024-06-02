import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "../components/FrameComponent22";
import { useNavigate } from "react-router-dom";
import "./FinalRewardsScreen.css";

const FinalRewardsScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen8");
  }, [navigate]);

  return (
    <div className="final-rewards-screen">
      <div className="final-rewards-screen-child" />
      <div className="frame-parent35">
        <div className="image-5-parent6">
          <img className="image-5-icon13" alt="" src="/image-5@2x.png" />
          <div className="ellipse-group">
            <div className="frame-child51" />
            <div className="frame-child52" />
            <div className="frame-child53" />
          </div>
          <FrameComponent2 />
        </div>
        <img
          className="frame-child54"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child55" alt="" src="/group-1487@2x.png" />
        <img className="frame-child56" alt="" src="/group-156-1@2x.png" />
        <img className="frame-child57" alt="" src="/group-156-1@2x.png" />
        <img
          className="frame-child58"
          loading="lazy"
          alt=""
          src="/group-156-2@2x.png"
        />
        <img className="frame-child59" alt="" src="/group-1561@2x.png" />
      </div>
    </div>
  );
};

export default FinalRewardsScreen;
