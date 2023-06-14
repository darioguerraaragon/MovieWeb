import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const Trending = ({setdisM , settext , moviesSeries}) => {
  return (
    <div className='cicon'>
          <img src='./iconsMovies/trending.png'/>

          <button onClick={
            (()=>{
              DiscoverMovie(moviesSeries[1] , setdisM)
              settext('Popular')
            })
          }>Populars</button>
        </div>
  )
}

export default Trending