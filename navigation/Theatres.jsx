import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const Theatres = ({ setData , moviesSeries}) => {
  return (
    <div className='cicon'>
        <img src='./iconsMovies/theatre.png'/>

        <button onClick={(()=>{
            DiscoverMovie(moviesSeries[3] , setData)
        })
        }>Theatres</button>
    </div>   
  )
}

export default Theatres