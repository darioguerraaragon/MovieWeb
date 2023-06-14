import React from 'react'

const MovieInfos = ({cardInfos , setinfos , details}) => {
const {release_date , runtime , status , genres} = details

  const HandleClose = () => {setinfos(false)}

  return (
    <div className='MovieInfos'>
      
      <div className='close'>
        <img src='/iconsMovies/close.png' onClick={HandleClose}/>
      </div>

      <div className='imgDescription'>
        <img src={`https://image.tmdb.org/t/p/original${cardInfos[2]}`}/>

        <div className='contentDescript'>
          <div className='titleI'>
            <h2>{cardInfos[0]}</h2>

            <div className='release'>
              <small>Release Date - {release_date}</small>
              <small>RunTime - {runtime}mn</small>
              <small>Status - {status}</small>
            </div>
            
          </div>

          <p>{cardInfos[1]}</p>

          <div className='genres'>
            {/* <small>{{gen1}}</small>
            <small>{genres[1]}</small>
            <small>{genres[2]}</small> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfos