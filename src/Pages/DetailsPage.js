import React, { useState } from "react";

import { useContext } from "react";
import { Store } from "./Details";

import "./DetailsPage.css";
import clapping from "../logo/clapping.png";
import SmallCard from "../Components/SmallCard";
import Fixed from "../Components/Fixed";
import Writer from "../Components/Writer";
import persion from "../logo/man.png";
import { Link, NavLink } from "react-router-dom";

const DetailsPage = () => {
  const url = window.location.href;
  const orUrl = url.split("/").pop();

  let url1 = Number(orUrl);
  const [orid, setid] = useState(url1);
  // setid(orid + 2)
  console.log("url", url1);
  const [details] = useContext(Store);
  console.log(details);
  function idHandler() {
    const url = window.location.href;
    const orUrl = url.split("/").pop();

    let url1 = Number(orUrl);

    setid(url1);
  }
  console.log("hello");
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
                    <div style={{ zIndex: 1 }} className="fixed-res">
                      <Fixed />
                    </div>
                    <img
                      src={data.img}
                      alt="not found"
                      className={"latest-card1 singlepage-img "}
                    />

                    <h5 className="details-des">{data.description}...</h5>
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
                    <div className="writer-respo">
                      {" "}
                      <Writer />
                    </div>
                  </div>
                }
              </>
            );
          })}
      </div>

      <div>
        <br className="res-diveder"></br>
        <div className="more-serin" style={{ zIndex: 5 }}>
          <h3 className="more-heading ">More From The Siren</h3>

          <div className="more-parent">
            <div className="latest-one more-one">
              {details
                .filter((item) => item.id >= 1 && item.id <= 3)
                .map((data) => {
                  return (
                    <>
                      {
                        <NavLink
                          to={`/${data.id}`}
                          className={"home1"}
                          onClick={() => {
                            idHandler();
                          }}
                        >
                          <div className="related">related reads</div>
                          <img
                            src={data.img}
                            alt="not found"
                            className={"latest-card1"}
                            onClick={() => {
                              idHandler();
                            }}
                          />

                          <h2
                            className="more-main-title"
                            onClick={() => {
                              idHandler();
                            }}
                          >
                            {data.title}
                          </h2>
                          <div
                            className="smallCard-containeer more-dev"
                            onClick={() => {
                              idHandler();
                            }}
                          >
                            <div className="smallcard-parent res-more-seren-dev hides">
                              <div>
                                <div
                                  className="smallcard-persion-img bg hides"
                                  style={{ backgroundImage: `url(${persion})` }}
                                ></div>
                              </div>
                              <div className="smallcard-userdata write-data hides">
                                <div></div>
                                <div className="h5 hides">Dinesh kumar</div>
                                <div className="hides">5 August 2023</div>
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
