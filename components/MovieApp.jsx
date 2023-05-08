import React, { useState } from 'react'
import Header from './Header'
import Section from './Section'
import {movies} from './helpers/VideosM'

const MovieApp = () => {
  const [text, settext] = useState('Moust Popular Movies')

  const [moviesSeries, setmoviesSeries] = useState(movies)

  const [data, setData] = useState([])
  
  const [disvocerM, setdisvocerM] = useState([])

  return (
    <div>
        <Header setData={setData} setdisM={setdisvocerM}  settext={settext} setmoviesSeries={setmoviesSeries}/>
        <Section data={data} dism={disvocerM} text={text} setdisM={setdisvocerM} moviesSeries={moviesSeries}/>
    </div>
  )
}

export default MovieApp