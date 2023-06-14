import React, { useState } from 'react'
import Header from './Header'
import Section from './Section'
import {movies} from './helpers/VideosM'

const MovieApp = () => {
  const [text, settext] = useState('Discover Movies')

  const [moviesSeries, setmoviesSeries] = useState(movies)
  
  const [data, setdata] = useState([])

  return (
    <div>
        <Header setData={setdata}  
          settext={settext} 
          setmoviesSeries={setmoviesSeries}
          />

        <Section data={data} 
          text={text} 
          setData={setdata} 
          moviesSeries={moviesSeries} 
          settext={settext}
          />
    </div>
  )
}

export default MovieApp