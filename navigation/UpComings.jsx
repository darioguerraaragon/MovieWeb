import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const UpComings = ({text , setData , moviesSeries}) => {
  return (
    <div className='cicon'>
        <img src='./iconsMovies/soon.png'/>

        <button onClick={(()=>{
            DiscoverMovie(moviesSeries[2] , setData)
            // settext(text)
          })
          }>{text == 'Tv-Series Section'?'on the air':'Upcoming'}</button>
    </div>
  )
}

export default UpComings