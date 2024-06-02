import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent21";
import "./ActivityScreen4.css";

const ActivityScreen4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen5");
  }, [navigate]);

  return (
    <div className="activity-screen5">
      <div className="card-container" />
      <div className="activity-screen-inner2">
        <div className="frame-parent20">
          <div className="card-wrapper">
            <div className="card28">
              <div className="card-group">
                <div className="card29">
                  <div className="background28" />
                  <div className="heart-icon27">
                    <img className="heart-pair-icon" alt="" src="/card.svg" />
                    <div className="heart27">
                      <img
                        className="heart-icon28"
                        loading="lazy"
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="card30">
                  <div className="background29" />
                  <div className="frame-parent21">
                    <img className="frame-icon19" alt="" src="/card.svg" />
                    <div className="heart28">
                      <img
                        className="heart-icon29"
                        loading="lazy"
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-parent1">
                <div className="card31">
                  <div className="background30" />
                  <div className="frame-parent22">
                    <img className="frame-icon20" alt="" src="/card.svg" />
                    <div className="heart29">
                      <img
                        className="heart-icon30"
                        loading="lazy"
                        alt=""
                        src="/heart.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="card32">
                  <div className="background31" />
                  <div className="frame-parent23">
                    <img className="frame-icon21" alt="" src="/card.svg" />
                    <div className="heart30">
                      <img className="heart-icon31" alt="" src="/heart.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container-parent">
            <div className="image-container">
              <div className="card-parent2">
                <div className="card33">
                  <div className="background32" />
                  <div className="custom-card">
                    <img className="frame-icon22" alt="" src="/card.svg" />
                    <div className="heart31">
                      <img
                        className="heart-icon32"
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="card34">
                  <div className="background33" />
                  <div className="frame-parent24">
                    <img className="frame-icon23" alt="" src="/card.svg" />
                    <div className="heart32">
                      <img
                        className="heart-icon33"
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="heading-13">It’s a match !</div>
              </div>
            </div>
            <div className="cards-area-wrapper">
              <div className="cards-area">
                <div className="card35">
                  <div className="background34" />
                  <div className="frame-parent25">
                    <img className="frame-icon24" alt="" src="/card.svg" />
                    <div className="heart33">
                      <img
                        className="heart-icon34"
                        loading="lazy"
                        alt=""
                        src="/heart-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="card36">
                  <div className="background35" />
                  <div className="frame-parent26">
                    <img className="frame-icon25" alt="" src="/card.svg" />
                    <div className="heart34">
                      <img
                        className="heart-icon35"
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
        </div>
      </div>
      <main className="image-5-parent3">
        <img className="image-5-icon9" alt="" src="/image-5@2x.png" />
        <img
          className="frame-child39"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child40" alt="" src="/group-1484@2x.png" />
        <div className="frame-parent27">
          <img className="frame-child41" alt="" src="/group-154@2x.png" />
          <div className="vector-container">
            <img className="frame-child42" alt="" src="/vector-2251.svg" />
            <img
              className="frame-child43"
              loading="lazy"
              alt=""
              src="/ellipse-3151.svg"
            />
          </div>
          <img
            className="frame-child44"
            loading="lazy"
            alt=""
            src="/vector-2261.svg"
          />
        </div>
        <img className="card-icon4" alt="" src="/card6@2x.png" />
        <img className="card-icon5" alt="" src="/card-11@2x.png" />
      </main>
      <FrameComponent2 />
    </div>
  );
};

export default ActivityScreen4;
