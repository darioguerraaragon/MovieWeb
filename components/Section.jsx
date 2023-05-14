import DisvocerMovie from './DisvocerMovie'
import MoviesCards from './MoviesCards'
import {DiscoverMovie} from './helpers/VideosM'

const Section = ({data , dism , text , setdisM , moviesSeries , settext }) => { 
  // console.log(data)
  return (
    <section>

      <div className='wel-text'>

        <h2>{text}</h2>

        <button onClick={
          (()=>{
          DiscoverMovie(moviesSeries[0] , setdisM)
          settext('Top Popular')
          })    
        }>TopPopular</button> 

        <button onClick={
          (()=>{
            DiscoverMovie(moviesSeries[1] , setdisM)
            settext('Popular')
          })
        }>Populars</button>

        <button onClick={(()=>{
          DiscoverMovie(moviesSeries[2] , setdisM)
          // settext('UpComing')
        })
        }>{text == 'Tv-Series Section'?'on the air':'Upcoming'}</button>

        <button onClick={(()=>{
          DiscoverMovie(moviesSeries[3] , setdisM)
          settext('Movies in Theatres')
        })
        }>Theatres</button>

        <button onClick={
          (()=>{
            DiscoverMovie(moviesSeries[4] , setdisM)
            settext('Moust New')
          })
        }>Moust New</button>

        <div className='tranding'>
          <p>Tranding</p>
          <div>
            <button className='btn1' onClick={
              (()=>{
                  DiscoverMovie(moviesSeries[5] , setdisM)
                  settext('Trending-today')
              })
              }><b>Today</b></button>
            <button className='btn2' onClick={
              (()=>{
                DiscoverMovie(moviesSeries[6] , setdisM)
                settext('Trending-week')
              })
            }><b>Week</b></button>
          </div>
        </div>

      </div>

      <div className='row'></div>

      <article>
        {data == undefined?null:data.map((movie)=>(
          <MoviesCards 
            key={movie.id} 
            movie={movie} 
          />))}

        {dism == undefined?null:dism.map((dm)=>(
          <DisvocerMovie 
          dm={dm} 
          key={dm.id}
          />))}
  
      </article>     
    </section>
  )
}

export default Section