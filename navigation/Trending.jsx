import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const Trending = ({setData , moviesSeries}) => {
  return (
    <div className='cicon'>
          <img src='./iconsMovies/trending.png'/>

          <button onClick={
            (()=>{
              DiscoverMovie(moviesSeries[1] , setData)
            })
          }>Populars</button>
        </div>
  )
}

export default Trending