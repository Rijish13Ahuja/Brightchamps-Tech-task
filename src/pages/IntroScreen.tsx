import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import "./IntroScreen.css";

const IntroScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/intro-screen");
  }, [navigate]);

  return (
    <div className="intro-screen">
      <div className="intro-screen-inner">
        <div className="wrapper-group-149-parent">
          <div className="wrapper-group-149">
            <img
              className="wrapper-group-149-child"
              loading="lazy"
              alt=""
              src="/group-149.svg"
            />
          </div>
          <div className="heading-1">Welcome Kiddo !</div>
        </div>
      </div>
      <main className="image-5-parent">
        <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        <div className="frame-child" />
        <div className="frame-item" />
        <div className="frame-inner" />
        <GroupComponent />
      </main>
      <FrameComponent
        sTART="START"
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default IntroScreen;
