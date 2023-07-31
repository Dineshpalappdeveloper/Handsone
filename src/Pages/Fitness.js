import React from 'react'
import "./Food.css"
import { useContext } from "react";
import { Store } from "./Details";
const Fitness = () => {
  const [details] = useContext(Store);
  console.log(details);
  return (
    <div>
    <div className='Food-parent'>
         <div className='Food-containeer'>
         <h3 className="sub-title latest-food11">Bihar Tourism</h3>
       <hr className="sub-heading-hr latest-food11" />
       <div className="latest-Articles latest-food1">
         <div className="latest-Articles-parent the-latest-food-parent">
           <div className="articles-one">
    

             {details
               .filter((item) => item.category==="Bihar")
               .map((data) => {
                 return (
                   <>
                     {
                       
                       <div className="article-image-details-parent">
                   
                         <div>
                         <hr className="Food-hr" />
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

       </div>
         </div>
         <div className="top-post-details-parent">
           <h3 className="sub-title top-post-title1">Top Post</h3>
           <hr className="sub-heading-hr top-post-hr" />
           <div className="top-post-con">
             <div className="top-post-one-data">
         
               {details
                 .filter((item) => item.id===19 ) 
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
             .filter((item) => item.id === 18)
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
             .filter((item) => item.id === 17)
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
         <div className="advatige advatige-Food">
           <h2 className="advatige-text advatige-text-Food ">advertistment</h2>
         </div>
          
         </div>
         
    </div>
   </div>
  )
}

export default Fitness
