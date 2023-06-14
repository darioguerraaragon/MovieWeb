import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const TopPopular = ({settext , setdisM , moviesSeries}) => {
  return (
    <div className='cicon'>
        <img src='./iconsMovies/top-games-star.png'/>

        <button onClick={
        (()=>{
        DiscoverMovie(moviesSeries[0] , setdisM)
        settext('Top Popular')
        })    
        }>TopPopular</button>
    </div> 
  )
}

export default TopPopular