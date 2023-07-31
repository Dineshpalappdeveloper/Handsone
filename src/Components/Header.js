import React, { useState } from 'react'
import "./Header.css"
const Header = () => {
  const [count,setCount]=useState(0);
  const [value1,setValue1]=useState("inline-block");
  return (
    <div>
      <div className='main_header'>
        <div className='main_header'>
    
       
       <p>The</p>
       <h1 className='siren'>Siren</h1>
       </div>
       <div className='hamber' style={{display:`${value1}`}} onClick={()=>{
        console.log(count);
         if(count%2===0){
          setCount(count+1);
          console.log("block");
          setValue1("inline-block")
         }else{
          setCount(count-1);
          setValue1("none")
          console.log("none");
         }
       }}>
        =
       </div>
       {/* <div className='hamber'>
           =
       </div> */}
      </div>
    </div>
  )
}

export default Header
