import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivityScreen3.css";

const ActivityScreen3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/activity-screen3");
  }, [navigate]);

  return (
    <div className="activity-screen4">
      <div className="activity-screen-inner1">
        <div className="first-card-parent">
          <div className="first-card">
            <div className="second-card1">
              <div className="card18">
                <div className="background18" />
                <div className="fourth-card">
                  <img className="fifth-card-icon" alt="" src="/card.svg" />
                  <div className="heart17">
                    <img
                      className="heart-icon17"
                      loading="lazy"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="card19">
                <div className="background19" />
                <div className="frame-parent15">
                  <img className="frame-icon15" alt="" src="/card.svg" />
                  <div className="heart18">
                    <img
                      className="heart-icon18"
                      loading="lazy"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eighth-card">
            <div className="ninth-card">
              <div className="tenth-card">
                <div className="card20">
                  <div className="background20" />
                  <div className="twelfth-card">
                    <img
                      className="thirteenth-card-icon"
                      alt=""
                      src="/card.svg"
                    />
                    <div className="heart19">
                      <img className="heart-icon19" alt="" src="/heart.svg" />
                    </div>
                  </div>
                </div>
                <div className="seventeenth-card">
                  <div className="card21">
                    <div className="background21" />
                    <div className="nineteenth-card">
                      <img
                        className="twentieth-card-icon"
                        alt=""
                        src="/card.svg"
                      />
                      <div className="heart20">
                        <img
                          className="heart-icon20"
                          loading="lazy"
                          alt=""
                          src="/heart.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="twenty-third-card">
              <div className="twenty-fourth-card">
                <div className="twenty-fifth-card">
                  <div className="card22">
                    <div className="background22" />
                    <div className="twenty-seventh-card">
                      <img
                        className="twenty-eighth-card"
                        alt=""
                        src="/card.svg"
                      />
                      <div className="heart21">
                        <img
                          className="heart-icon21"
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card23">
                    <div className="background23" />
                    <div className="frame-parent16">
                      <img className="frame-icon16" alt="" src="/card.svg" />
                      <div className="heart22">
                        <img
                          className="heart-icon22"
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card24">
                    <div className="background24" />
                    <div className="frame-parent17">
                      <img className="frame-icon17" alt="" src="/card.svg" />
                      <div className="heart23">
                        <img
                          className="heart-icon23"
                          loading="lazy"
                          alt=""
                          src="/heart-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="heading-12">It’s a match !</div>
                </div>
              </div>
              <div className="thirty-second-card">
                <div className="thirty-third-card">
                  <div className="card25">
                    <div className="background25" />
                    <div className="thirty-fifth-card">
                      <img
                        className="thirty-sixth-card"
                        alt=""
                        src="/card.svg"
                      />
                      <div className="heart24">
                        <img
                          className="heart-icon24"
                          loading="lazy"
                          alt=""
                          src="/heart.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="thirty-ninth-card">
                    <div className="fortieth-card">
                      <div className="card26">
                        <div className="background26" />
                        <div className="forty-second-card">
                          <img
                            className="forty-third-card"
                            alt=""
                            src="/card.svg"
                          />
                          <div className="heart25">
                            <img
                              className="heart-icon25"
                              loading="lazy"
                              alt=""
                              src="/heart-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="card27">
                        <div className="background27" />
                        <div className="frame-parent18">
                          <img
                            className="frame-icon18"
                            alt=""
                            src="/card.svg"
                          />
                          <div className="heart26">
                            <img
                              className="heart-icon26"
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
          </div>
        </div>
      </div>
      <div className="forty-sixth-card" />
      <div className="forty-seventh-card">
        <div className="forty-eighth-card" />
        <div className="forty-eighth-card1" />
        <div className="forty-eighth-card2" />
      </div>
      <main className="fortyninth-card">
        <img className="image-5-icon8" alt="" src="/image-5@2x.png" />
        <img
          className="fortyninth-card-child"
          loading="lazy"
          alt=""
          src="/group-156.svg"
          onClick={onGroupClick}
        />
        <img className="fortyninth-card-item" alt="" src="/group-1483@2x.png" />
        <img className="fortyninth-card-inner" alt="" src="/group-662@2x.png" />
        <img className="card-icon3" alt="" src="/card5@2x.png" />
        <div className="frame-parent19">
          <img className="frame-child36" alt="" src="/group-1541@2x.png" />
          <img className="frame-child37" alt="" src="/vector-225.svg" />
          <img
            className="frame-child38"
            loading="lazy"
            alt=""
            src="/vector-226.svg"
          />
        </div>
      </main>
    </div>
  );
};

export default ActivityScreen3;
