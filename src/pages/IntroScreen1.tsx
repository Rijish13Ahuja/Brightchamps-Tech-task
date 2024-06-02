import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import "./IntroScreen1.css";

const IntroScreen1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/intro-screen1");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="intro-screen1">
      <main className="image-5-group">
        <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
        <div className="label" />
        <div className="ellipse-div" />
        <div className="input-input-interactive" />
        <div className="frame-parent">
          <div className="example-company-example-compan-parent">
            <img
              className="example-company-example-compan"
              alt=""
              src="/vector-1.svg"
            />
            <div className="wrapper-left-parent">
              <div className="wrapper-left">
                <img className="left-icon" alt="" src="/left.svg" />
              </div>
              <img
                className="right-icon"
                loading="lazy"
                alt=""
                src="/right@2x.png"
              />
              <img
                className="union-icon"
                loading="lazy"
                alt=""
                src="/union.svg"
              />
              <div className="face-parent">
                <img className="face-icon" alt="" src="/face.svg" />
                <div className="intersect-parent">
                  <img className="intersect-icon" alt="" src="/intersect.svg" />
                  <div className="wrapper-blushes">
                    <img className="blushes-icon" alt="" src="/blushes.svg" />
                  </div>
                </div>
                <div className="wrapper-shade">
                  <img className="shade-icon" alt="" src="/shade.svg" />
                </div>
                <div className="union-parent">
                  <img className="union-icon1" alt="" src="/union-1.svg" />
                  <img
                    className="left-icon1"
                    loading="lazy"
                    alt=""
                    src="/left-1@2x.png"
                  />
                  <img
                    className="right-icon1"
                    loading="lazy"
                    alt=""
                    src="/right-1.svg"
                  />
                  <img
                    className="nose-icon"
                    loading="lazy"
                    alt=""
                    src="/nose.svg"
                  />
                </div>
              </div>
            </div>
            <div className="frame-child1" />
            <div className="frame-child2" />
            <div className="frame-child3" />
          </div>
          <img className="ellipse-icon" alt="" src="/ellipse-313.svg" />
        </div>
        <img
          className="group-icon"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
      </main>
      <div className="cog-component-wrapper">
        <div className="cog-component">
          <div className="wrapper-group-1491">
            <img
              className="wrapper-group-149-item"
              alt=""
              src="/group-149.svg"
            />
          </div>
          <div className="heading-1-life-skills-parent">
            <div className="heading-1-container">
              <span>
                <p className="hi-i">Hi , I am Mizo !</p>
                <p className="and-i-love">{`and I love bananas `}</p>
              </span>
            </div>
            <img
              className="frame-child4"
              loading="lazy"
              alt=""
              src="/group-155@2x.png"
            />
          </div>
        </div>
      </div>
      <FrameComponent
        sTART="NEXT"
        propBackgroundColor="#ffcf25"
        propBackgroundColor1="#ffcf25"
        propLeft="62.4px"
        onGroupContainerClick={onGroupContainerClick}
      />
    </div>
  );
};

export default IntroScreen1;
