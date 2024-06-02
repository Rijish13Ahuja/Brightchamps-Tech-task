import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent8";
import { useNavigate } from "react-router-dom";
import "./ActivityScreen5.css";

const ActivityScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen4");
  }, [navigate]);

  return (
    <div className="activity-screen6">
      <div className="card-container1">
        <div className="heart-component">
          <div className="card-parent3">
            <div className="card37">
              <div className="background36" />
              <div className="middle-heart-parent">
                <img className="middle-heart-icon" alt="" src="/card.svg" />
                <div className="heart35">
                  <img
                    className="heart-icon36"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card38">
              <div className="background37" />
              <div className="frame-parent28">
                <img className="frame-icon26" alt="" src="/card.svg" />
                <div className="heart36">
                  <img
                    className="heart-icon37"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-parent4">
            <div className="card39">
              <div className="background38" />
              <div className="three-card-row">
                <img className="frame-icon27" alt="" src="/card.svg" />
                <div className="heart37">
                  <img
                    className="heart-icon38"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card40">
              <div className="background39" />
              <div className="frame-parent29">
                <img className="frame-icon28" alt="" src="/card.svg" />
                <div className="heart38">
                  <img
                    className="heart-icon39"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card41">
              <div className="background40" />
              <div className="frame-parent30">
                <img className="frame-icon29" alt="" src="/card.svg" />
                <div className="heart39">
                  <img
                    className="heart-icon40"
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
      <main className="image-5-parent4">
        <img className="image-5-icon10" alt="" src="/image-5@2x.png" />
        <img
          className="frame-child45"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child46" alt="" src="/group-1485@2x.png" />
        <img className="frame-child47" alt="" src="/group-154@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen;
