import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent11";
import "./ActivityScreen11.css";

const ActivityScreen1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCardContainer1Click = useCallback(() => {
    navigate("/activity-screen3");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen1");
  }, [navigate]);

  return (
    <div className="activity-screen2">
      <div className="name" />
      <div className="activity-screen-child">
        <div className="f-r-a-m-e-parent">
          <div className="f-r-a-m-e">
            <div className="card5">
              <div className="background6" />
              <div className="frame-parent5">
                <img className="frame-icon5" alt="" src="/card.svg" />
                <div className="heart5">
                  <img
                    className="heart-icon5"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card6">
              <div className="background7" />
              <div className="frame-parent6">
                <img className="frame-icon6" alt="" src="/card.svg" />
                <div className="heart6">
                  <img
                    className="heart-icon6"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card7">
            <div className="card8">
              <div className="background8" />
              <div className="frame-parent7">
                <img className="frame-icon7" alt="" src="/card.svg" />
                <div className="heart7">
                  <img
                    className="heart-icon7"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card9">
              <div className="background9" />
              <div className="frame-parent8">
                <img className="frame-icon8" alt="" src="/card.svg" />
                <div className="heart8">
                  <img
                    className="heart-icon8"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card10">
              <div className="background10" />
              <div className="frame-parent9">
                <img className="frame-icon9" alt="" src="/card.svg" />
                <div className="heart9">
                  <img
                    className="heart-icon9"
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
      <main className="cardcontainer-parent">
        <section className="cardcontainer">
          <img className="image-5-icon6" alt="" src="/image-5@2x.png" />
          <div className="card11">
            <div className="background11" />
            <div className="image-area-parent">
              <img className="image-area-icon" alt="" src="/card.svg" />
              <div className="heart10">
                <img
                  className="heart-icon10"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="card12" onClick={onCardContainer1Click}>
            <div className="background12" />
            <div className="frame-parent10">
              <img className="frame-icon10" alt="" src="/card.svg" />
              <div className="heart11">
                <img
                  className="heart-icon11"
                  loading="lazy"
                  alt=""
                  src="/heart-1.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <img
          className="frame-child31"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child32" alt="" src="/group-1481@2x.png" />
        <img className="frame-child33" alt="" src="/group-1541@2x.png" />
        <img className="card-icon1" loading="lazy" alt="" src="/card3@2x.png" />
        <img className="frame-child34" alt="" src="/vector-2241.svg" />
        <img className="frame-child35" alt="" src="/group-1493@2x.png" />
      </main>
      <FrameComponent1 />
    </div>
  );
};

export default ActivityScreen1;
