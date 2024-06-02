import { FunctionComponent } from "react";
import "./Right.css";

export type RightType = {
  className?: string;
};

const Right: FunctionComponent<RightType> = ({ className = "" }) => {
  return (
    <div className={`right ${className}`}>
      <div className="right-inner">
        <div className="card-parent12">
          <div className="card72">
            <div className="background70" />
            <div className="read-parent">
              <img className="read-icon" alt="" src="/card.svg" />
              <div className="heart69">
                <img className="heart-icon71" alt="" src="/heart.svg" />
              </div>
            </div>
          </div>
          <div className="card-parent13">
            <div className="card73">
              <div className="background71" />
              <div className="category-parent">
                <img className="category-icon" alt="" src="/card.svg" />
                <div className="heart70">
                  <img className="heart-icon72" alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
            <div className="card74">
              <div className="background72" />
              <div className="guest-experience-parent">
                <img className="guest-experience-icon" alt="" src="/card.svg" />
                <div className="heart71">
                  <img className="heart-icon73" alt="" src="/heart.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper5">
            <div className="frame-parent66">
              <div className="wrapper-card-parent">
                <div className="wrapper-card1">
                  <img className="card-icon11" alt="" src="/card4@2x.png" />
                </div>
                <div className="frame-parent67">
                  <img className="frame-child91" alt="" src="/group-660.svg" />
                  <div className="frame-wrapper6">
                    <div className="a-parent">
                      <div className="a">A</div>
                      <img
                        className="vector-219-stroke"
                        loading="lazy"
                        alt=""
                        src="/vector-219-stroke.svg"
                      />
                      <img
                        className="vector-219-stroke1"
                        alt=""
                        src="/vector-219-stroke-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card75">
                <div className="background73" />
                <div className="frame-parent68">
                  <img className="frame-icon52" alt="" src="/card.svg" />
                  <div className="heart72">
                    <img className="heart-icon74" alt="" src="/heart-1.svg" />
                  </div>
                </div>
              </div>
              <div className="card76">
                <div className="background74" />
                <div className="frame-parent69">
                  <img className="frame-icon53" alt="" src="/card.svg" />
                  <div className="heart73">
                    <img className="heart-icon75" alt="" src="/heart-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ellipse-parent1">
        <div className="frame-child92" />
        <div className="flex-living-insights" />
        <div className="frame-child93" />
      </div>
    </div>
  );
};

export default Right;
