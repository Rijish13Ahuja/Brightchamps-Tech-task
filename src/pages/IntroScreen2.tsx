import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import "./IntroScreen2.css";

const IntroScreen2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroup1Click = useCallback(() => {
    navigate("/intro-screen");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/instruction-screen");
  }, [navigate]);

  return (
    <div className="intro-screen2">
      <div className="intro-screen-child">
        <div className="wrapper-group-149-group">
          <div className="wrapper-group-1492">
            <img
              className="wrapper-group-149-inner"
              loading="lazy"
              alt=""
              src="/group-1491.svg"
            />
          </div>
          <div className="heading-11">{`Can you help me get some ? `}</div>
        </div>
      </div>
      <main className="image-5-container">
        <img className="image-5-icon2" alt="" src="/image-5@2x.png" />
        <img className="vector-icon" alt="" src="/progress-bar.svg" />
        <div className="frame-child5" />
        <div className="frame-group">
          <div className="vector-parent">
            <img className="frame-child6" alt="" src="/vector-1.svg" />
            <div className="wrapper-left-group">
              <div className="wrapper-left1">
                <img className="left-icon2" alt="" src="/left.svg" />
              </div>
              <img
                className="right-icon2"
                loading="lazy"
                alt=""
                src="/right1@2x.png"
              />
              <img
                className="union-icon2"
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className="face-group">
                <img className="face-icon1" alt="" src="/face.svg" />
                <div className="intersect-group">
                  <img
                    className="intersect-icon1"
                    alt=""
                    src="/intersect.svg"
                  />
                  <div className="wrapper-blushes1">
                    <img className="blushes-icon1" alt="" src="/blushes.svg" />
                  </div>
                </div>
                <div className="wrapper-shade1">
                  <img className="shade-icon1" alt="" src="/shade.svg" />
                </div>
                <div className="union-group">
                  <img className="union-icon3" alt="" src="/union-1.svg" />
                  <img
                    className="left-icon3"
                    loading="lazy"
                    alt=""
                    src="/left-11@2x.png"
                  />
                  <img
                    className="right-icon3"
                    loading="lazy"
                    alt=""
                    src="/right-1.svg"
                  />
                  <img
                    className="nose-icon1"
                    loading="lazy"
                    alt=""
                    src="/nose.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-child7" />
            <div className="frame-child8" />
            <div className="frame-child9" />
          </div>
          <img className="frame-child10" alt="" src="/ellipse-313.svg" />
        </div>
        <img
          className="frame-child11"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroup1Click}
        />
        <img className="frame-child12" alt="" src="/group-148@2x.png" />
        <img className="frame-child13" alt="" src="/group-154@2x.png" />
      </main>
      <div className="frame-container" onClick={onGroupContainerClick}>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <FrameComponent1 />
        </div>
        <div className="polygon-parent">
          <img
            className="polygon-icon"
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className="frame-child14" />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen2;
