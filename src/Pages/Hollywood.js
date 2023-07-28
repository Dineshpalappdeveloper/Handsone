import React from 'react'
import { useContext } from 'react'
import { Store } from './Details'
const Hollywood = () => {
  const [details] = useContext(Store)
  console.log(details);
  return (
    <div>
     {
      details.filter((item)=> item.category==="Hollywood").map((data)=> {
        return (
          <>
          <h1>data.heading</h1>
          <img src= {data.img} alt='not found' />
          </>
        )
      })
     }
    </div>
  )
}

export default Hollywood
