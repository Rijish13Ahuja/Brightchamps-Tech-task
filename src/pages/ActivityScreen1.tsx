import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent7";
import "./ActivityScreen1.css";

const ActivityScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackgroundClick = useCallback(() => {
    navigate("/activity-screen2");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen");
  }, [navigate]);

  return (
    <div className="activity-screen1">
      <div className="background" onClick={onBackgroundClick} />
      <div className="activity-screen-inner">
        <div className="frame-parent1">
          <div className="card-parent">
            <div className="card">
              <div className="background1" />
              <div className="card-top">
                <img className="frame-icon" alt="" src="/card.svg" />
                <div className="heart">
                  <img
                    className="heart-icon"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="background2" />
              <div className="frame-parent2">
                <img className="frame-icon1" alt="" src="/card.svg" />
                <div className="heart1">
                  <img
                    className="heart-icon1"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="second-card">
            <div className="card2">
              <div className="background3" />
              <div className="triple-top">
                <img className="frame-icon2" alt="" src="/card.svg" />
                <div className="heart2">
                  <img
                    className="heart-icon2"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card3">
              <div className="background4" />
              <div className="frame-parent3">
                <img className="frame-icon3" alt="" src="/card.svg" />
                <div className="heart3">
                  <img
                    className="heart-icon3"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card4">
              <div className="background5" />
              <div className="frame-parent4">
                <img className="frame-icon4" alt="" src="/card.svg" />
                <div className="heart4">
                  <img
                    className="heart-icon4"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent />
      <main className="image-5-parent2">
        <img className="image-5-icon5" alt="" src="/image-5@2x.png" />
        <img
          className="frame-child28"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child29" alt="" src="/group-148@2x.png" />
        <img className="frame-child30" alt="" src="/group-1541@2x.png" />
        <img className="card-icon" loading="lazy" alt="" src="/card2@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen;
