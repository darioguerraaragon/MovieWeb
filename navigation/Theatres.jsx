import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const Theatres = ({settext , setdisM , moviesSeries}) => {
  return (
    <div className='cicon'>
        <img src='./iconsMovies/theatre.png'/>

        <button onClick={(()=>{
            DiscoverMovie(moviesSeries[3] , setdisM)
            settext('Movies in Theatres')
        })
        }>Theatres</button>
    </div>   
  )
}

export default Theatres