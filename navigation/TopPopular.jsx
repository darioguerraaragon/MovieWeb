import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const TopPopular = ({ setData , moviesSeries}) => {
  return (
    <div className='cicon'>
        <img src='./iconsMovies/top-games-star.png'/>

        <button onClick={
        (()=>{
        DiscoverMovie(moviesSeries[0] , setData)
        })    
        }>TopPopular</button>
    </div> 
  )
}

export default TopPopular