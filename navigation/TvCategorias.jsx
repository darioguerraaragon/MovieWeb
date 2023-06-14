import React from 'react'
import { DiscoverGenersMovies } from '../components/helpers/VideosM'

const TvCategorias = ({setdisM}) => {
  return (
    <div className='cicon' id='categorias'>
        <img src='./iconsMovies/menu.png'/>

        <select onClick={((e)=>{DiscoverGenersMovies(e.target.value , setdisM)})}>
          <option>Action</option>
          <option>Aventure</option>
          <option>Animation</option>
          <option>Comedy</option>
          <option>Crime</option>
          <option>Documentary</option>
          <option>Drama</option>
          <option>Family</option>
          <option>Fantasy</option>
          <option>History</option>
          <option>Horror</option>
          <option>Music</option>
          <option>Mystery</option>
          <option>Romance</option>
          <option>Science Fiction</option>
          <option>TV Movie</option>
          <option>Thriller</option>
          <option>War</option>
        </select>
    </div>
  )
}

export default TvCategorias