import React from 'react'

const MovieInfos = ({cardInfos , setinfos , details}) => {
const {release_date , runtime , status , genres , title} = details

  const HandleClose = () => {setinfos(false)}

  let minutos = parseInt(runtime)
  //calcular horas
  let horas = Math.floor(minutos /60)
  let minutosRestantes = minutos % 60
  //
  
  // sistema de clasificacion=>
  const HandleClasificacion = (e) => {
    const stars = document.querySelectorAll('.star')

    stars.forEach((el)=>{
      if(el.id > e.target.id){
        el.src = 'imgs/star.png'
      }else{
        el.src = 'imgs/star (1).png'
      }
    })

  }

  return (
    <div className='MovieInfos'>
      
      <div className='close'>
        <div className='starContainer'>
          <img src='/imgs/star.png' className='star' id='1' onClick={HandleClasificacion}/>
          <img src='/imgs/star.png' className='star' id='2' onClick={HandleClasificacion} />
          <img src='/imgs/star.png' className='star' id='3' onClick={HandleClasificacion} />
          <img src='/imgs/star.png' className='star' id='4' onClick={HandleClasificacion} />
          <img src='/imgs/star.png' className='star' id='5' onClick={HandleClasificacion} />
        </div>
        <img src='/iconsMovies/close.png' onClick={HandleClose}/>
      </div>

      <div className='imgDescription'>
        <img src={`https://image.tmdb.org/t/p/original${cardInfos[2]}`}/>

        <div className='contentDescript'>
          <div className='titleI'>
            <h2>{cardInfos[0]}</h2>

            <div className='release'>
              <small>Release Date - {release_date}</small>
              <small>RunTime - {horas}h-{minutosRestantes}min</small>
              <small>Status - {status}</small>
            </div>
            
          </div>

          <p>{cardInfos[1]}</p>

          <div className='genres'>
            <small></small>
            <small></small>
            <small></small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfos