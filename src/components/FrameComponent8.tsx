import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent8.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onCardContainerClick = useCallback(() => {
    navigate("/activity-screen6");
  }, [navigate]);

  return (
    <div className={`image-container-group ${className}`}>
      <div className="image-container3">
        <div className="card-with-heart-parent">
          <div className="card-with-heart">
            <div className="card-wrapper6">
              <div className="card77">
                <div className="background75" />
                <div className="frame-parent70">
                  <img className="frame-icon54" alt="" src="/card.svg" />
                  <div className="heart74">
                    <img
                      className="heart-icon76"
                      loading="lazy"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card78" onClick={onCardContainerClick}>
              <div className="background76" />
              <div className="three-card-stack">
                <img
                  className="middle-heart-components"
                  alt=""
                  src="/card.svg"
                />
                <div className="heart75">
                  <img
                    className="heart-icon77"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card79">
              <div className="background77" />
              <div className="frame-parent71">
                <img className="frame-icon55" alt="" src="/card.svg" />
                <div className="heart76">
                  <img
                    className="heart-icon78"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="empty-container">
            <div className="card-stack">
              <div className="card80">
                <div className="background78" />
                <div className="three-card-sequence-parent">
                  <img className="three-card-sequence" alt="" src="/card.svg" />
                  <div className="heart77">
                    <img
                      className="heart-icon79"
                      loading="lazy"
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="card81">
                <div className="background79" />
                <div className="frame-parent72">
                  <img className="frame-icon56" alt="" src="/card.svg" />
                  <div className="heart78">
                    <img
                      className="heart-icon80"
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
      <div className="ellipse-parent3">
        <div className="frame-child100" />
        <div className="frame-child101" />
        <div className="frame-child102" />
      </div>
    </div>
  );
};

export default FrameComponent;
