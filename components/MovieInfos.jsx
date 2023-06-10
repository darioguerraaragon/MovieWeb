import React from 'react'

const MovieInfos = ({cardInfos , setinfos}) => {

  const HandleClose = () => {setinfos(false)}

  return (
    <div className='MovieInfos'>
      <div className='close'>
        <img src='/iconsMovies/close.png' onClick={HandleClose}/>
      </div>

      <div className='imgDescription'>
        <img src={`https://image.tmdb.org/t/p/original${cardInfos[2]}`}/>

        <div className='contentDescript'>
          <div>
            <h2>{cardInfos[0]}</h2>
          </div>
          <p>{cardInfos[1]}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfos