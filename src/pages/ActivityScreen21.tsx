import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer1 from "../components/CardContainer1";
import FrameComponent1 from "../components/FrameComponent12";
import "./ActivityScreen21.css";

const ActivityScreen2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onActivityScreenContainer8Click = useCallback(() => {
    navigate("/activity-screen8");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen6");
  }, [navigate]);

  return (
    <div className="activity-screen8" onClick={onActivityScreenContainer8Click}>
      <CardContainer1 />
      <FrameComponent1 />
      <main className="image-container1">
        <img className="image-5-icon12" alt="" src="/image-5@2x.png" />
        <div className="wrapper-card">
          <img
            className="card-icon6"
            loading="lazy"
            alt=""
            src="/card71@2x.png"
          />
        </div>
        <img
          className="image-container-child"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="image-container-item" alt="" src="/group-1486@2x.png" />
        <img className="image-container-inner" alt="" src="/group-154@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen2;
