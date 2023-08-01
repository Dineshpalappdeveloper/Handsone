import React from "react";

import { useContext } from "react";
import { Store } from "./Details";
import "./Home.css";
import "./DetailsPage.css";
import clapping from "../logo/clapping.png";
import SmallCard from "../Components/SmallCard";
import Fixed from "../Components/Fixed";
import Writer from "../Components/Writer";
import persion from "../logo/man.png"
import { NavLink } from "react-router-dom";
const DetailsPage = () => {
  const url = window.location.href;
  const orUrl = url.split("/").pop();
  let url1 = Number(orUrl);

  console.log("url", url1);
  const [details] = useContext(Store);
  console.log(details);
  return (
    <div>
      <div className="latest-one details-parent ">
        {details
          .filter((item) => item.id === url1)
          .map((data) => {
            return (
              <>
                {
                  <div className="data1-singlepage">
                    <h1 className="heading">{data.title}</h1>
                    <SmallCard />
                    <Fixed />
                    <img
                      src={data.img}
                      alt="not found"
                      className={"latest-card1 singlepage-img "}
                    />

                    <h5>{data.description}...</h5>
                    <div className="language">
                      <button className="bt-language">React</button>
                      <button className="bt-language">Javascript</button>
                      <button className="bt-language">Animation</button>
                    </div>
                    <div className="clap-counts">
                      <div className="fixed-sub">
                        <div
                          className="fixed-img bg"
                          style={{ backgroundImage: `url(${clapping})` }}
                        ></div>
                        <div className="fixed-text">4.9M</div>
                      </div>
                    </div>
                    <Writer />
                  </div>
                }
              </>
            );
          })}
      </div>
      <div>
        <br></br>
        <div className="more-serin">
          <h3 className="more-heading">More From The Siren</h3>
          <div className="more-parent">
            <div className="latest-one more-one">
              {details
                .filter((item) => item.id === 1)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"}>
                          <div className="related">related reads</div>
                          <img
                            src={data.img}
                            alt="not found"
                            className={"latest-card1"}
                          />

                          <h2 className="more-main-title">{data.title}</h2>
                          <div className="smallCard-containeer more-dev">
                            <div className="smallcard-parent">
                              <div>
                                <div
                                  className="smallcard-persion-img bg"
                                  style={{ backgroundImage: `url(${persion})` }}
                                ></div>
                              </div>
                              <div className="smallcard-userdata write-data ">
                                 <div></div>
                                <div className="h5">Dinesh kumar</div>
                                <div>5 August 2023</div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      }
                    </>
                  );
                })}
            </div>
            <div className="latest-one more-one">
              {details
                .filter((item) => item.id === 15)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"}>
                          <div className="related">related reads</div>
                          <img
                            src={data.img}
                            alt="not found"
                            className={"latest-card1"}
                          />

                          <h2 className="more-main-title">{data.title}</h2>
                          <div className="smallCard-containeer more-dev">
                            <div className="smallcard-parent">
                              <div>
                                <div
                                  className="smallcard-persion-img bg"
                                  style={{ backgroundImage: `url(${persion})` }}
                                ></div>
                              </div>
                              <div className="smallcard-userdata write-data ">
                                 <div></div>
                                <div className="h5">Dinesh kumar</div>
                                <div>5 August 2023</div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      }
                    </>
                  );
                })}
            </div>
            <div className="latest-one more-one">
              {details
                .filter((item) => item.id === 27)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"}>
                          <div className="related">related reads</div>
                          <img
                            src={data.img}
                            alt="not found"
                            className={"latest-card1"}
                          />

                          <h2 className="more-main-title">{data.title}</h2>
                          <div className="smallCard-containeer more-dev">
                            <div className="smallcard-parent">
                              <div>
                                <div
                                  className="smallcard-persion-img bg"
                                  style={{ backgroundImage: `url(${persion})` }}
                                ></div>
                              </div>
                              <div className="smallcard-userdata write-data ">
                                 <div></div>
                                <div className="h5">Dinesh kumar</div>
                                <div>5 August 2023</div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      }
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
