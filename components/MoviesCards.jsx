import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { HandleVideos } from './helpers/VideosM'

const MoviesCards = ({ movie }) => {
  const { title , poster_path  , id , overview } = movie
  
  //video branch =>
  const [video, setvideo] = useState([])

  useEffect(() => {
    HandleVideos(id , setvideo)
  }, [id])
  //
  return (
    <div className='MovieCard'>
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='Something went wrong !'/>

      <p><b>{title}</b></p>

      <div className='Clasificacion' >
          <div>{overview}</div>
      </div>

      <BrowserRouter>
        <Link to={`https://www.youtube.com/watch?v=${video}`} target='_blank'>Play</Link>
      </BrowserRouter> 
      
    </div>
  )
}

export default MoviesCards