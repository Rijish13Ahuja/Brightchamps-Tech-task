import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import "./InstructionScreen.css";

const InstructionScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/intro-screen1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/activity-screen");
  }, [navigate]);

  return (
    <div className="instruction-screen">
      <main className="frame-main">
        <section className="frame-section">
          <img className="image-5-icon3" alt="" src="/image-5@2x.png" />
          <div className="navbar-button">
            <div className="navbar-button-child" />
            <div className="misr-applied-knowledge-enterpr" />
            <div className="makers" />
          </div>
        </section>
        <img
          className="frame-child15"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child16" alt="" src="/group-148@2x.png" />
        <img className="frame-child17" alt="" src="/group-154@2x.png" />
        <img
          className="with-our-flexible-production-c"
          alt=""
          src="/with-our-flexible-production-capacity-and-high-tec.svg"
        />
      </main>
      <FrameComponent4 />
      <FrameComponent3 />
      <div className="frame-div">
        <FrameComponent2 />
        <div className="frame-wrapper">
          <div className="group-div" onClick={onGroupContainerClick}>
            <div className="partners-parent">
              <img
                className="partners-icon"
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
              <div className="rectangle-group">
                <div className="frame-child18" />
                <button className="rectangle-container">
                  <div className="frame-child19" />
                  <div className="play">PLAY</div>
                  <div className="vector-group">
                    <img
                      className="rectangle-icon"
                      alt=""
                      src="/rectangle-15.svg"
                    />
                    <img
                      className="frame-child20"
                      alt=""
                      src="/ellipse-3.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionScreen;
