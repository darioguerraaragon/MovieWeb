import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleVideos } from './helpers/VideosM'
import MovieInfos from './MovieInfos'

const DisvocerMovie = ({dm}) => {
  // info movies =>
  const [infos, setinfos] = useState(false)
  // 

  const {poster_path , title  , id , overview} = dm
  
  //video branch =>
  const [video, setvideo] = useState([])
  
  useEffect(() => {
    HandleVideos(id , setvideo)
  }, [])
  //
  //

  return (
    <div className='MovieCard'>
      {/* <div>{infos?<MovieInfos/>:null}</div> */}
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

export default DisvocerMovie