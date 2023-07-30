import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
// import Home from './Home';
// import Hollywood from './Hollywood';
// import Bollywood from './Bollywood';

export const Store = createContext();
const Details = (props) => {
  const [details,setDetails]=useState([
 {
  "id":10,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Hollywood",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 
 {
  "id":21,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Bollywood",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 
 {
  "id":31,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":32,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":33,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":34,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":35,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":36,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Food",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":22,
  "title":"The Money Heist",
  "img":"https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==",
  "category":"Bollywood",
  "description":"The series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. It re-cut the series into 22 shorter episodes and released them worldwide, beginning with the first part on 20 December 2017, followed by the second part on 6 April 2018. In April 2018, Netflix renewed the series with a significantly increased budget for 16 new episodes total. Part 3, with eight episodes, was released on 19 July 2019. Part 4, also with eight episodes, was released on 3 April 2020"
 },
 {
  "id":2,
  "title":"Hacked Movie",
  "img": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/02/hacked-movie-review-hina-khan-makes-a-promising-debut-in-this-desi-dramatic-mashup-of-you-black-mirror-1.jpg",
  "category":"Hollywood",
  "description":"Hacked (2020) is but a cancerous movie reeking of extremely toxic pseudo-feminism At the outset, please be so gracious as to elucidate upon the genre of this film Is it science fiction? Is it women empowerment? Does it pertain to social issues? Or is it but a haphazard amalgamation of all of them? "
 },
 {
  "id":3,
  "title":"Miss India",
  "img":"https://upload.wikimedia.org/wikipedia/en/5/53/Miss_India_poster.jpg",
  "category":"Hollywood",
  "description":"The film has been produced by Mahesh S. Koneru under East Coast Productions. Dani Sanchez-Lopez and Sujith Vaassudev handled the cinematography, while S. Thaman composed the music.[3] The film was planned to be released on 17 April 2020 but has been postponed due to the COVID-19 pandemic. The film is released on Netflix on 4 November 2020 in Telugu along with dubbed versions in Tamil and Malayalam.[4][5]"
 },
 {
  "id":4,
  "title":"Corporate Movie",
  "img":"https://upload.wikimedia.org/wikipedia/en/6/67/Corporate%28Film%29.jpg",
  "category":"Hollywood",
  "description":"Corporate centers around the power games between two industrialists, The Sehgal Group of Industries (SGI) owned by Vinay Sehgal and the Marwah Group of Industries (MGI) owned by Dharmesh Marwah. The two companies are traditional rivals in the food and beverages products business. Nishigandha Nishi  Dasgupta is the vice-president of SGI, while Vinay Sehgal's brother-in-law Ritesh joins in later as senior vice president"
 },
 {
  "id":5,
  "title":" 3 Idiots ",
  "img":"https://i.ytimg.com/vi/AqeagE1c1nE/maxresdefault.jpg",
  "category":"Hollywood",
  "description":"In college, Farhan and Raju form a great bond with Rancho due to his positive and refreshing outlook to life. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive."
 },
 {
  "id":6,
  "title":"Munna Bhai M.B.B.S",
  "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VMoGDi-H8Un7Ahbt6PdZjn5GpMJsHPmqHa8UdxgE8uJp3imf36swj9OinQ&s",
  "category":"Bollywood",
  "description":"Munna Bhai M.B.B.S. Is A National Award Winning Bollywood Comedy Hindi Movie, Directed By Rajkumar Hirani, Starring Sanjay Dutt And Arshad Warsi In The Lead Roles. The Film Won 18 Awards. Munna Is A Goon Who Sets Out To Fulfill His Father's Dream Of Becoming A Doctor. With Help From His Sidekick Circuit, He Enrolls Himself In Medical College And Drives Dr Asthana Up The Wall."
 },
 {
  "id":7,
  "title":"Farzi",
  "img":"https://karnatakastateopenuniversity.in/wp-content/uploads/2023/03/Farzi-Movie-Download.jpg",
  "category":"Bollywood",
  "description":"Recently, Shahid Kapoor appear in the web series Farzi Movie. Fans of Shahid Kapoor have waited a long time for his next movie, but they no longer have to. In January, the fake film direct by Shahid Kapoor’s trailer was made public. His crazed appearance was the reason why his fans wait so long for his fictitious web series."
 },
 {
  "id":8,
  "title":"Pk",
  "img":"https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_QL75_UY266_CR2,0,180,266_.jpg",
  "category":"Bollywood",
  "description":"P.K.: Which god should I believe? You all say that, it's only one god. I say, no... there are two gods. One is the one who created us all. The other one is the one created by people like you. We know nothing about the god who made us all. But the god people like you made is exactly like you... liar, pretend to act, giving false promises, meeting rich people sooner, letting the poor neglected, happy when get praised... People are afraid to even say a word. My right number is very simple, the God who created us all, put faith in Him. And the god like you created, the duplicate god, destroy it."
 },
 {
  "id":9,
  "title":"MS Dhoni",
  "img":"https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY266_CR2,0,180,266_.jpg",
  "category":"Bollywood",
  "description":"Mahendra Singh Dhoni is a goalkeeper in school football team. Bannerjee a school cricket coach asks him to join his cricket team and practice daily with him for two hours time passes and he becomes a big state-level cricketer, but for a long time luck doesn't favor him to become a member of the Indian Cricket team. Dhoni takes a job in Indian Railways as a ticket-checker and plays cricket for the railways; after four years he gets selected for the Indian Cricket team and turns out to be one of the best cricketing captains in the history of Indian Cricket."
 },
 {
  "id":1,
  "title":"khakee the bihar chapter",
  "img":"https://m.media-amazon.com/images/M/MV5BZjUyZjNmMTMtMTZmMS00N2FjLWJlZGUtMWM5OWE2MjdlOGU0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
  "category":"Bollywood",
  "description":" ठोक देंगे कट्टा कपार में, आइए ना हमरा बिहार में :-Khakee series is a story of a police officer and his team trying to remove crime from a village in Bihar and what all obstacles do they face in the joureny? Do they get hold of the criminals there? That is what you get to see in the story. Nice acting by the cast. I mean all the actors have performed exceptionally well. I was really impressed with the acting of Ashustosh Rana in this series. He was impressive in his acting performance as well as entertaining. Karan Tacker as lead actor of the series was also okay. Avinashi Tiwari villain, his acting we didnt like inititally but towards the between and end of the sereis, we slowly developed a liking for him, his acting, his voice and his personality"
 }
  ])
  return (
    <div>
      <Store.Provider value={[details,setDetails]}>
{props.children}

      </Store.Provider>

    </div>
  )
}

export default Details
