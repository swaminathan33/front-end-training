import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [images, setImages] = useState([]);
  const [clickedImage, setClickedImage] = useState([])

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const key = 'G-wRxlyESmIw5JOiaaReIjxWbBXa3OH2vbsoCi15B1U'
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=office&client_id=${key}`)
    .then(response => response.json())
    .then(data => setImages(data.results))
    .catch(err => console.log(err))
  }, [])

  const shuffle = () =>{
    // shuffle here
    const shuffledArray = images.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
     }
    setImages(shuffledArray)
  }

  const clicked = (id) =>{
    setClickedImage([...clickedImage, id], () => {

    })
    console.log('1. clicked', id)
    console.log('2. clicked list',clickedImage)
    if(clickedImage.includes(id)){
      if(score > bestScore){
        setBestScore(score)
      }
      setScore(0)
    }else{
      setScore(score+1)
    }
    shuffle()
    console.log(score)
  }

  return (
    <div>
            <h2>score - {score}</h2>
      <h2>Best Score - {bestScore}</h2>
      {
        images.map((i, id) =>{
          return <div key={id}>
            <button onClick={() => clicked(i.id)}>
            <img src={i.urls.small} width={200} height={200} alt="" />
            </button>
            <p>{i.id}</p>
          </div>
        })
      }
    </div>
  )
}

export default App