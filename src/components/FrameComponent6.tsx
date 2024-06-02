import { FunctionComponent } from "react";
import "./FrameComponent6.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={`background-image ${className}`}>
      <div className="card-parent10">
        <div className="card56">
          <div className="background54" />
          <div className="heart-container-parent">
            <img className="heart-container-icon" alt="" src="/card.svg" />
            <div className="heart53">
              <img
                className="heart-icon55"
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
          </div>
        </div>
        <div className="multi-card">
          <div className="card57">
            <div className="background55" />
            <div className="heart-pair-parent">
              <img className="heart-pair-icon1" alt="" src="/card.svg" />
              <div className="heart54">
                <img
                  className="heart-icon56"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="card58">
            <div className="background56" />
            <div className="frame-parent53">
              <img className="frame-icon38" alt="" src="/card.svg" />
              <div className="heart55">
                <img
                  className="heart-icon57"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="card-parent11">
            <div className="card59">
              <div className="background57" />
              <div className="frame-parent54">
                <img className="frame-icon39" alt="" src="/card.svg" />
                <div className="heart56">
                  <img
                    className="heart-icon58"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card60">
              <div className="background58" />
              <div className="frame-parent55">
                <img className="frame-icon40" alt="" src="/card.svg" />
                <div className="heart57">
                  <img
                    className="heart-icon59"
                    loading="lazy"
                    alt=""
                    src="/heart-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card61">
              <div className="background59" />
              <div className="frame-parent56">
                <img className="frame-icon41" alt="" src="/card.svg" />
                <div className="heart58">
                  <img
                    className="heart-icon60"
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

export default FrameComponent6;
