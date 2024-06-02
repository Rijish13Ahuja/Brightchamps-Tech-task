import { FunctionComponent } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent36 ${className}`}>
      <div className="vector-parent1">
        <img className="frame-child60" alt="" src="/vector-1.svg" />
        <div className="wrapper-left-container">
          <div className="wrapper-left2">
            <img className="left-icon4" alt="" src="/left.svg" />
          </div>
          <img className="right-icon4" alt="" src="/right@2x.png" />
          <img className="union-icon4" alt="" src="/union.svg" />
          <div className="face-container">
            <img className="face-icon2" alt="" src="/face.svg" />
            <div className="intersect-container">
              <img className="intersect-icon2" alt="" src="/intersect.svg" />
              <div className="wrapper-blushes2">
                <img className="blushes-icon2" alt="" src="/blushes.svg" />
              </div>
            </div>
            <div className="wrapper-shade2">
              <img className="shade-icon2" alt="" src="/shade.svg" />
            </div>
            <div className="union-container">
              <img className="union-icon5" alt="" src="/union-1.svg" />
              <img className="left-icon5" alt="" src="/left-1@2x.png" />
              <img className="right-icon5" alt="" src="/right-1.svg" />
              <img className="nose-icon2" alt="" src="/nose.svg" />
            </div>
          </div>
        </div>
        <div className="mystery-season" />
        <div className="frame-child61" />
        <div className="frame-child62" />
      </div>
      <img className="frame-child63" alt="" src="/ellipse-313.svg" />
      <div className="vector-parent2">
        <img className="frame-child64" alt="" src="/ellipse-315.svg" />
        <div className="vector-parent3">
          <img className="frame-child65" alt="" src="/vector-1.svg" />
          <div className="wrapper-left-parent1">
            <div className="wrapper-left3">
              <img className="left-icon6" alt="" src="/left.svg" />
            </div>
            <img
              className="right-icon6"
              loading="lazy"
              alt=""
              src="/right@2x.png"
            />
            <img className="union-icon6" alt="" src="/union.svg" />
            <div className="face-parent1">
              <img className="face-icon3" alt="" src="/face.svg" />
              <div className="intersect-parent1">
                <img className="intersect-icon3" alt="" src="/intersect.svg" />
                <div className="wrapper-blushes3">
                  <img className="blushes-icon3" alt="" src="/blushes.svg" />
                </div>
              </div>
              <div className="wrapper-shade3">
                <img className="shade-icon3" alt="" src="/shade.svg" />
              </div>
              <div className="union-parent1">
                <img className="union-icon7" alt="" src="/union-1.svg" />
                <img
                  className="left-icon7"
                  loading="lazy"
                  alt=""
                  src="/left-1@2x.png"
                />
                <img
                  className="right-icon7"
                  loading="lazy"
                  alt=""
                  src="/right-1.svg"
                />
                <img
                  className="nose-icon3"
                  loading="lazy"
                  alt=""
                  src="/nose.svg"
                />
              </div>
            </div>
          </div>
          <div className="del-revs" />
          <div className="scifi" />
          <div className="frame-child66" />
        </div>
        <img className="frame-child67" alt="" src="/ellipse-313.svg" />
      </div>
    </div>
  );
};

export default GroupComponent;
