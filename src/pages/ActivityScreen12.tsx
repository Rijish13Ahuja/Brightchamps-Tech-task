import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import "./ActivityScreen12.css";

const ActivityScreen1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCardContainerClick = useCallback(() => {
    navigate("/activity-screen5");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen7");
  }, [navigate]);

  return (
    <div className="activity-screen7">
      <div className="activity-display">
        <div className="frame-parent31">
          <div className="card-parent5">
            <div className="card42">
              <div className="background41" />
              <div className="heart-cards-parent">
                <img className="heart-cards-icon" alt="" src="/card.svg" />
                <div className="heart40">
                  <img
                    className="heart-icon41"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card43">
              <div className="background42" />
              <div className="frame-parent32">
                <img className="frame-icon30" alt="" src="/card.svg" />
                <div className="heart41">
                  <img
                    className="heart-icon42"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-parent6">
            <div className="card44" onClick={onCardContainerClick}>
              <div className="background43" />
              <div className="card-components-parent">
                <img className="card-components-icon" alt="" src="/card.svg" />
                <div className="heart42">
                  <img
                    className="heart-icon43"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card45">
              <div className="background44" />
              <div className="frame-parent33">
                <img className="frame-icon31" alt="" src="/card.svg" />
                <div className="heart43">
                  <img
                    className="heart-icon44"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card46">
              <div className="background45" />
              <div className="frame-parent34">
                <img className="frame-icon32" alt="" src="/card.svg" />
                <div className="heart44">
                  <img
                    className="heart-icon45"
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
      <CardContainer />
      <main className="image-5-parent5">
        <img className="image-5-icon11" alt="" src="/image-5@2x.png" />
        <img
          className="frame-child48"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="frame-child49" alt="" src="/group-1486@2x.png" />
        <img className="frame-child50" alt="" src="/group-154@2x.png" />
      </main>
    </div>
  );
};

export default ActivityScreen1;
