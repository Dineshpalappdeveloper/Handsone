import React from "react";
import { useContext } from "react";
import { Store } from "./Details";
import "./Home.css";
const Home = () => {
  const [details] = useContext(Store);
  console.log(details);
  return (
    <div>
      <div className="home-first-card-containeer">
        <div className="left-side">
          {details
            .filter((item) => item.id === 1)
            .map((data) => {
              return (
                <>
                  {
                    <img
                      src={data.img}
                      alt="not found"
                      className={"left-card1"}
                    />
                  }
                </>
              );
            })}
        </div>
        <div className="right-side">
          {details
            .filter((item) => item.id === 15)
            .map((data) => {
              return (
                <>
                  {
                    <img
                      src={data.img}
                      alt="not found"
                      className={"left-card2"}
                    />
                  }
                </>
              );
            })}
          {details
            .filter((item) => item.id === 11)
            .map((data) => {
              return (
                <>
                  {
                    <img
                      src={data.img}
                      alt="not found"
                      className={"left-card3"}
                    />
                  }
                </>
              );
            })}
        </div>
      </div>

      <div>
        <h3 className="sub-title">The Latest</h3>
        <hr className="sub-heading-hr" />
        <div className="the-latest-parent">
          <div className="latest-one">
            {details
              .filter((item) => item.id === 1)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"latest-card1"}
                        />

                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                      </div>
                    }
                  </>
                );
              })}
          </div>
          <div className="latest-one">
            {details
              .filter((item) => item.id === 15)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"latest-card1"}
                        />
                        {/* <br/> */}
                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                      </div>
                    }
                  </>
                );
              })}
          </div>
          <div className="latest-one">
            {details
              .filter((item) => item.id === 11)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"latest-card1"}
                        />
                        {/* <br/> */}
                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                      </div>
                    }
                  </>
                );
              })}
          </div>
        </div>
        
        <h3 className="sub-title">Latest Articles</h3>
        <hr className="sub-heading-hr" />
        <div className="latest-Articles">
          <div className="latest-Articles-parent">
            <div className="articles-one">
              <hr className="Articles-hr" />

              {details
                .filter((item) => item.id === 12)
                .map((data) => {
                  return (
                    <>
                      {
                        <div className="article-image-details-parent">
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                          </div>
                          <div className="article-image-details">
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <span>
                              Travel
                              <span className="travel-time">
                                /August 21 2023
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
            </div>
            <div className="articles-one">
              <hr className="Articles-hr" />

              {details
                .filter((item) => item.id === 13)
                .map((data) => {
                  return (
                    <>
                      {
                        <div className="article-image-details-parent">
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                          </div>
                          <div className="article-image-details">
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <span>
                              Travel
                              <span className="travel-time">
                                /August 21 2023
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
            </div>
            <div className="articles-one">
              <hr className="Articles-hr" />

              {details
                .filter((item) => item.id === 14)
                .map((data) => {
                  return (
                    <>
                      {
                        <div className="article-image-details-parent">
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                          </div>
                          <div className="article-image-details">
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <span>
                              Travel
                              <span className="travel-time">
                                /August 21 2023
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
            </div>
            <div className="articles-one">
              <hr className="Articles-hr" />

              {details
                .filter((item) => item.id === 16)
                .map((data) => {
                  return (
                    <>
                      {
                        <div className="article-image-details-parent">
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"latest-card1"}
                            />
                          </div>
                          <div className="article-image-details">
                            <h3>{data.title}</h3>
                            <h5>{data.description.slice(0, 150)}...</h5>
                            <span>
                              Travel
                              <span className="travel-time">
                                /August 21 2023
                              </span>{" "}
                            </span>
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
            </div>
          </div>

          <div className="advatige">
            <h2 className="advatige-text">advertistment</h2>
          </div>
        </div>
        <div className="top-post">
          <div className="top-post-parent">
            <div className="top-post-image-one">
              {details
                .filter((item) => item.id === 17)
                .map((data) => {
                  return (
                    <>
                      {
                        <div className="top-post-image1">
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"top-post-card1"}
                            />
                          </div>
                        </div>
                      }
                    </>
                  );
                })}
            </div>
          </div>
       
          <div className="top-post-details-parent">
            <h3 className="sub-title top-post-title1">Top Post</h3>
            <hr className="sub-heading-hr top-post-hr" />
            <div className="top-post-con">
              <div className="top-post-one-data">
          
                {details
                  .filter((item) => item.id===18 ) 
                  .map((data) => {
                 
                    return (
                      <>
                        {
                        
                          <div>
                            <img
                              src={data.img}
                              alt="not found"
                              className={"top-post-card2"}
                            />
                            <div>
                              <div className="top-post-data1">
                                <div>
                                  {" "}
                                  <h3>{data.title}</h3>
                                  <h4>
                                    Travel{" "}
                                    <span className="travel-time">
                                      /August 21 2023
                                    </span>{" "}
                                  </h4>
                                </div>
                                <div>
                                  <span className="top-post-count">1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      </>
                    );
                  })}
              </div>
            </div>
            <hr className="top-post-divider top-post-divider2"/>
      
            <div className="latest-one">
            {details
              .filter((item) => item.id === 19)
              .map((data) => {
                return (
                  <>
                    {
                      <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                      <div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"top-post-sub1-card1"}
                        />
                           </div>
                       <div>
                        <h5>{data.title}</h5>
                   
                        <h6>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h6>
                        </div>
                        <div>
                        <span className="top-post-count">2</span>{" "}
                        </div>
                      </div>
                    }
                  </>
                );
              })}
          
              
          </div>
          <hr className="top-post-divider3"/>
          <div className="latest-one top-post3">
            {details
              .filter((item) => item.id === 20)
              .map((data) => {
                return (
                  <>
                    {
                      <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                      <div>
                        <img
                          src={data.img}
                          alt="not found"
                          className={"top-post-sub1-card1"}
                        />
                           </div>
                       <div>
                        <h5>{data.title}</h5>
                   
                        <h6>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h6>
                        </div>
                        <div>
                        <span className="top-post-count">3</span>{" "}
                        </div>
                      </div>
                    }
                  </>
                );
              })}
          
              
          </div>
      
           
          </div>
          
          
        </div>
        <div className="latest-story-details-parent">
        
          <h3 className="sub-title top-post-title1">Latest Stories</h3>
            <hr className="sub-heading-hr top-post-hr" />
            <hr className="latest-stories-divider" />
               <div className="the-latest-parent the-Stories-parent">
          <div className="latest-one story1">
            {details
              .filter((item) => item.id === 18)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                    

                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                        <hr className="hrNone"></hr>
                      </div>
                    }
                  </>
                );
              })}
          </div>
          <div className="latest-one story1 ">
            {details
              .filter((item) => item.id === 19)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                     
                        {/* <br/> */}
                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                       
                      </div>
                      
                    }
                  </>
                );
              })}
          </div>
          
          <div className="latest-one story1">
            
            {details
              .filter((item) => item.id === 20)
              .map((data) => {
                return (
                  <>
                    {
                      <div>
                      
                        {/* <br/> */}
                        <h3>{data.title}</h3>
                        <h5>{data.description.slice(0, 150)}...</h5>
                        <h4>
                          Travel{" "}
                          <span className="travel-time">/August 21 2023</span>{" "}
                        </h4>
                      </div>
                    }
                  </>
                );
              })}
          </div>
        </div>
            <hr className="latest-stories-divider latest-stories-divider-last" />
          </div>
      </div>
    </div>
  );
};

export default Home;
