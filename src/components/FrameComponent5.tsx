import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent5.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onCardContainer1Click = useCallback(() => {
    navigate("/activity-screen1");
  }, [navigate]);

  return (
    <div className={`activity-screen9 ${className}`}>
      <div className="card-container2">
        <div className="heart-icon-wrapper">
          <div className="heart-icon48">
            <div className="wrapper-group-1493">
              <img
                className="wrapper-group-149-child1"
                loading="lazy"
                alt=""
                src="/group-1492.svg"
              />
            </div>
            <div className="heading-111">Select a card.</div>
          </div>
        </div>
        <div className="card-parent8">
          <div className="card49">
            <div className="background48" />
            <div className="card50">
              <img className="inner-card-icon" alt="" src="/card.svg" />
              <div className="heart47">
                <img
                  className="heart-icon49"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="multi-card-container">
            <div className="card51">
              <div className="background49" />
              <div className="heart-set-parent">
                <img className="heart-set-icon" alt="" src="/card.svg" />
                <div className="heart48">
                  <img
                    className="heart-icon50"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card52" onClick={onCardContainer1Click}>
              <div className="background50" />
              <div className="frame-parent49">
                <img className="frame-icon34" alt="" src="/card.svg" />
                <div className="heart49">
                  <img
                    className="heart-icon51"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-parent9">
            <div className="card53">
              <div className="background51" />
              <div className="frame-parent50">
                <img className="frame-icon35" alt="" src="/card.svg" />
                <div className="heart50">
                  <img
                    className="heart-icon52"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card54">
              <div className="background52" />
              <div className="frame-parent51">
                <img className="frame-icon36" alt="" src="/card.svg" />
                <div className="heart51">
                  <img
                    className="heart-icon53"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card55">
              <div className="background53" />
              <div className="frame-parent52">
                <img className="frame-icon37" alt="" src="/card.svg" />
                <div className="heart52">
                  <img
                    className="heart-icon54"
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
  );
};

export default FrameComponent5;
