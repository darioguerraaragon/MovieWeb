import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleVideos } from './helpers/VideosM'
import MovieInfos from './MovieInfos'

const DisvocerMovie = ({dm}) => {
  // info movies =>
  const [infos, setinfos] = useState(false)
  const [cardInfos, secardInfos] = useState()
  let elements = []
  // 
  const {poster_path , title  , id , overview} = dm 
  //video branch =>
  const [video, setvideo] = useState([])
  
  useEffect(() => {
    HandleVideos(id , setvideo)
  }, [])
  //
  return (
    <div className='MovieCard'>

      {infos?<div className='movieInfoWraper'><MovieInfos cardInfos={cardInfos} setinfos={setinfos}/></div>:null}

      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='Something went wrong !' onClick={((e)=>{
          elements = [title , overview , poster_path]
          secardInfos(elements)
          setinfos(true)
      })}/>

      <p><b>{title}</b></p>

      <BrowserRouter>
        <Link to={`https://www.youtube.com/watch?v=${video}`} target='_blank' className='linkV'><b>Play Trailer</b></Link>
      </BrowserRouter> 
    
  </div>
  )
}

export default DisvocerMovie