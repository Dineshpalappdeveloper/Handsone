// import React from 'react'
import React from "react";
// import {withRouter} from "react-router-dom"
import { useContext } from "react";
import { Store } from "./Details";
import "./Home.css";
const DetailsPage = (props) => {
  const [details] = useContext(Store);
  console.log(details);
  return (
    <div>
      <h1>heelo dinesh</h1>
        <div className="left-side">
          {details
            .filter((item) => item.id === props.id)
            .map((data) => {
              return (
                <>
                  {
                    <div>

                 <h1></h1>
                    <img
                      src={data.img}
                      alt="not found"
                      className={"left-card1"}
                    />
                       </div>
                  }
                </>
              );
            })}
        </div>
    </div>
  )
}

export default DetailsPage
