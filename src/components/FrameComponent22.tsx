import { FunctionComponent } from "react";
import "./FrameComponent22.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`card-parent16 ${className}`}>
      <div className="card95">
        <div className="background93" />
        <div className="player-stats">
          <img className="frame-icon67" alt="" src="/card.svg" />
          <div className="heart91">
            <img className="heart-icon93" alt="" src="/heart.svg" />
          </div>
        </div>
      </div>
      <img className="frame-child107" alt="" src="/group-146@2x.png" />
      <div className="frame-wrapper8">
        <div className="frame-parent83">
          <div className="frame-parent84">
            <div className="frame-parent85">
              <div className="vector-parent6">
                <img className="frame-child108" alt="" src="/vector-11.svg" />
                <div className="left-parent">
                  <img className="left-icon8" alt="" src="/left1.svg" />
                  <img
                    className="right-icon8"
                    loading="lazy"
                    alt=""
                    src="/right2@2x.png"
                  />
                  <img
                    className="union-icon8"
                    loading="lazy"
                    alt=""
                    src="/union1.svg"
                  />
                  <div className="face-components">
                    <img className="face-icon4" alt="" src="/face1.svg" />
                    <div className="expression-details">
                      <img
                        className="intersect-icon4"
                        alt=""
                        src="/intersect1.svg"
                      />
                      <div className="wrapper-blushes4">
                        <img
                          className="blushes-icon4"
                          alt=""
                          src="/blushes1.svg"
                        />
                      </div>
                    </div>
                    <div className="wrapper-shade4">
                      <img className="shade-icon4" alt="" src="/shade1.svg" />
                    </div>
                    <div className="union-parent2">
                      <img className="union-icon9" alt="" src="/union-11.svg" />
                      <img
                        className="eyes-icon"
                        loading="lazy"
                        alt=""
                        src="/eyes.svg"
                      />
                      <img
                        className="eyes-icon1"
                        loading="lazy"
                        alt=""
                        src="/eyes-1.svg"
                      />
                      <img
                        className="nose-icon4"
                        loading="lazy"
                        alt=""
                        src="/nose1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-child109" />
                <div className="frame-child110" />
              </div>
              <img className="frame-child111" alt="" src="/ellipse-3131.svg" />
            </div>
            <img
              className="frame-child112"
              loading="lazy"
              alt=""
              src="/group-663.svg"
            />
          </div>
          <img className="frame-child113" alt="" src="/group-160@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
