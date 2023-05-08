import React from 'react'
import DisvocerMovie from './DisvocerMovie'
import MoviesCards from './MoviesCards'
import {DiscoverMovie} from './helpers/VideosM'

const Section = ({data , dism , text , setdisM , moviesSeries }) => { 
  // console.log(data)
  return (
    <section>

      <div className='wel-text'>

        <h2>{text}</h2>

        <button onClick={
          (()=>{
          DiscoverMovie(moviesSeries[0] , setdisM)
          })    
        }>TopPopular</button> 
        <button onClick={
          (()=>{
            DiscoverMovie(moviesSeries[1] , setdisM)
          })
        }>Populars</button>
        <button onClick={(()=>{
          DiscoverMovie(moviesSeries[2] , setdisM)
        })
        }>UpComing</button>

      </div>

      <div className='row'></div>

      <article>
        {data == undefined?null:data.map((movie)=>(
          <MoviesCards 
            key={movie.id} 
            movie={movie} 
          />))}

        {dism == undefined?null:dism.map((dm)=>(<DisvocerMovie dm={dm} key={dm.id}/>))}
  
      </article>     
    </section>
  )
}

export default Section