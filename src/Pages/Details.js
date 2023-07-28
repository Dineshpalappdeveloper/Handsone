import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const store = createContext();
const Details = (props) => {
  const [details,setDetails]=useState([
 {
  "id":1,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Bollywood",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":2,
  "title":"",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":3,
  "title":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":4,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":5,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":6,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":7,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":8,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":9,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 },
 {
  "id":70,
  "title":"",
  "img":"",
  "category":"Bollywood",
  "description":""
 }
  ])
  return (
    <div>
      <store.Provider value={[details,setDetails]}>
        {props.children}
      </store.Provider>
      {/* <h1>Details </h1> */}
    </div>
  )
}

export default Details
