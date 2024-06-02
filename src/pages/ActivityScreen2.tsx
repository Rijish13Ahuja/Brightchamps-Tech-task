import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Right from "../components/Right";
import "./ActivityScreen2.css";

const ActivityScreen2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/activity-screen4");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen2");
  }, [navigate]);

  return (
    <div className="activity-screen3">
      <div className="image" onClick={onImageClick} />
      <div className="content">
        <div className="top">
          <div className="cards">
            <div className="card13">
              <div className="background13" />
              <div className="frame-parent11">
                <img className="frame-icon11" alt="" src="/card.svg" />
                <div className="heart12">
                  <img
                    className="heart-icon12"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card14">
              <div className="background14" />
              <div className="min-read-parent">
                <img className="min-read-icon" alt="" src="/card.svg" />
                <div className="heart13">
                  <img className="heart-icon13" alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="triple-card">
            <div className="card15">
              <div className="background15" />
              <div className="frame-parent12">
                <img className="frame-icon12" alt="" src="/card.svg" />
                <div className="heart14">
                  <img className="heart-icon14" alt="" src="/heart-1.svg" />
                </div>
              </div>
            </div>
            <div className="card16">
              <div className="background16" />
              <div className="frame-parent13">
                <img className="frame-icon13" alt="" src="/card.svg" />
                <div className="heart15">
                  <img className="heart-icon15" alt="" src="/heart-1.svg" />
                </div>
              </div>
            </div>
            <div className="card17">
              <div className="background17" />
              <div className="frame-parent14">
                <img className="frame-icon14" alt="" src="/card.svg" />
                <div className="heart16">
                  <img className="heart-icon16" alt="" src="/heart-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Right />
      <main className="footer">
        <img className="image-5-icon7" alt="" src="/image-5@2x.png" />
        <img
          className="footer-child"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="footer-item" alt="" src="/group-1482@2x.png" />
        <img className="footer-inner" alt="" src="/group-1541@2x.png" />
        <img className="card-icon2" alt="" src="/card3@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen2;
