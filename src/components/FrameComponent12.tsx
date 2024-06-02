import { FunctionComponent } from "react";
import "./FrameComponent12.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent79 ${className}`}>
      <div className="nested-cards-wrapper">
        <div className="nested-cards">
          <div className="card91">
            <div className="background89" />
            <div className="card-with-border">
              <img className="card-back-icon" alt="" src="/card.svg" />
              <div className="heart87">
                <img
                  className="heart-icon89"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="card-wrapper12">
            <div className="card92">
              <div className="background90" />
              <div className="frame-parent80">
                <img className="frame-icon64" alt="" src="/card.svg" />
                <div className="heart88">
                  <img
                    className="heart-icon90"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="nested-cards-inner">
            <div className="card-parent15">
              <div className="card93">
                <div className="background91" />
                <div className="frame-parent81">
                  <img className="frame-icon65" alt="" src="/card.svg" />
                  <div className="heart89">
                    <img
                      className="heart-icon91"
                      loading="lazy"
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="card94">
                <div className="background92" />
                <div className="frame-parent82">
                  <img className="frame-icon66" alt="" src="/card.svg" />
                  <div className="heart90">
                    <img
                      className="heart-icon92"
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
      <div className="ellipse-parent4">
        <div className="frame-child104" />
        <div className="frame-child105" />
        <div className="frame-child106" />
      </div>
    </div>
  );
};

export default FrameComponent1;
