import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
const Nav = () => {
  return (
    <div>
      <div className="nav">
     
          <h4 >
       
              <NavLink to={"/"} className={"none"} >
                Home
              </NavLink>
    
          </h4>
          <h4>
         
              <NavLink to={"/bollywood"} className={"none"} >
              Bollywood
              </NavLink>
     
          </h4>
          <h4>
        
              <NavLink to={"/technology"} className={"none"} >
              Technology
              </NavLink>
          
          </h4>
          <h4>
         
              <NavLink to={"/hollywood"} className={"none"} >
              Hollywood
              </NavLink>
       
          </h4>
          <h4>
       
              <NavLink to={"/fitness"} className={"none"} >
              Fitness
              </NavLink>
   
          </h4>
          <h4>
       
              <NavLink to={"/food"} className={"none"} >
                Food
              </NavLink>
          
          </h4>
         
      
     
      </div>
    </div>
  );
};

export default Nav;
