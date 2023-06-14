import React from 'react'
import { DiscoverMovie } from '../components/helpers/VideosM'

const TrendingWeekandDay = ({setData , settext , moviesSeries}) => {
  return (
    <div className='tranding '>
          <img src='./iconsMovies/trend.png'/>
            <p>Tranding</p>
            <div>
              <button className='btn1' onClick={
                (()=>{
                   DiscoverMovie(moviesSeries[4] , setData)
                    settext('Trending-today')
                })
                }><b>Today</b></button>
              <button className='btn2' onClick={
                (()=>{
                  DiscoverMovie(moviesSeries[5] , setData)
                  settext('Trending-week')
                })
              }><b>Week</b></button>
            </div>
    </div>
  )
}

export default TrendingWeekandDay