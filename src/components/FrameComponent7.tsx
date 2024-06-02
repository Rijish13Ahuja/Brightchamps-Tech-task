import { FunctionComponent } from "react";
import "./FrameComponent7.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent57 ${className}`}>
      <div className="card-with-one-shape-wrapper">
        <div className="card-with-one-shape">
          <div className="card62">
            <div className="background60" />
            <div className="frame-parent58">
              <img className="frame-icon42" alt="" src="/card.svg" />
              <div className="heart59">
                <img
                  className="heart-icon61"
                  loading="lazy"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="multi-card1">
            <div className="card63">
              <div className="background61" />
              <div className="card-top1">
                <img className="frame-icon43" alt="" src="/card.svg" />
                <div className="heart60">
                  <img
                    className="heart-icon62"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
            <div className="card64">
              <div className="background62" />
              <div className="frame-parent59">
                <img className="frame-icon44" alt="" src="/card.svg" />
                <div className="heart61">
                  <img
                    className="heart-icon63"
                    loading="lazy"
                    alt=""
                    src="/heart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="image-container-wrapper">
            <div className="image-container2">
              <div className="card65">
                <div className="background63" />
                <div className="triple-top1">
                  <img className="frame-icon45" alt="" src="/card.svg" />
                  <div className="heart62">
                    <img
                      className="heart-icon64"
                      loading="lazy"
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="card66">
                <div className="background64" />
                <div className="frame-parent60">
                  <img className="frame-icon46" alt="" src="/card.svg" />
                  <div className="heart63">
                    <img
                      className="heart-icon65"
                      loading="lazy"
                      alt=""
                      src="/heart-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="card67">
                <div className="background65" />
                <div className="frame-parent61">
                  <img className="frame-icon47" alt="" src="/card.svg" />
                  <div className="heart64">
                    <img
                      className="heart-icon66"
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
      <div className="image-placeholder-parent">
        <div className="image-placeholder" />
        <div className="image-placeholder1" />
        <div className="image-placeholder2" />
      </div>
    </div>
  );
};

export default FrameComponent;
