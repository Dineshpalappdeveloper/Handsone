import React from 'react'
import { useContext } from 'react'
import { Store } from './Details'
import "./Home.css"
const Home = () => {
  const [details] = useContext(Store)
  console.log(details);
  return (
    <div>
      <div className='home-first-card-containeer'>

    <div className='left-side'>
    {
     details.filter((item)=> item.id===1).map((data)=> {
       return (
         <>

       {
          <img src= {data.img} alt='not found' className={"left-card1"} /> 
      }
       </>
       )
     })
    }
    </div>
   <div className='right-side'>
   {
     details.filter((item)=> item.id===1).map((data)=> {
       return (
         <>
       {
          <img src= {data.img} alt='not found' className={"left-card2"} /> 
      }
       </>
       )
     })
    }
     {
     details.filter((item)=> item.id===1).map((data)=> {
       return (
         <>
       {
          <img src= {data.img} alt='not found' className={"left-card3"} /> 
      }
       </>
       )
     })
    }
   </div>
    
  </div>
   </div>
  )
}

export default Home
