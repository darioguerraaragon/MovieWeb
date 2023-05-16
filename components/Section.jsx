import DisvocerMovie from './DisvocerMovie'
import MoviesCards from './MoviesCards'
import {DiscoverMovie} from './helpers/VideosM'

const Section = ({data , dism , text , setdisM , moviesSeries , settext }) => { 
  // console.log(data)
  
  return (
    <section>
      <div className='wel-text'>

        <h2>{text}</h2>

        <div className='cicon'>
          <img src='./iconsMovies/top-games-star.png'/>

          <button onClick={
            (()=>{
            DiscoverMovie(moviesSeries[0] , setdisM)
            settext('Top Popular')
            })    
          }>TopPopular</button>
        </div> 
        
        <div className='cicon'>
          <img src='./iconsMovies/trending.png'/>

          <button onClick={
            (()=>{
              DiscoverMovie(moviesSeries[1] , setdisM)
              settext('Popular')
            })
          }>Populars</button>
        </div>

       <div className='cicon'>
        <img src='./iconsMovies/soon.png'/>

        <button onClick={(()=>{
            DiscoverMovie(moviesSeries[2] , setdisM)
            // settext(text)
          })
          }>{text == 'Tv-Series Section'?'on the air':'Upcoming'}</button>
       </div>

        <div className='cicon'>
          <img src='./iconsMovies/theatre.png'/>

          <button onClick={(()=>{
            DiscoverMovie(moviesSeries[3] , setdisM)
            settext('Movies in Theatres')
          })
          }className='block'>Theatres</button>
        </div>   

        <div className='tranding '>
          <img src='./iconsMovies/trend.png'/>

            <p>Tranding</p>
            <div>
              <button className='btn1' onClick={
                (()=>{
                   DiscoverMovie(moviesSeries[4] , setdisM)
                    settext('Trending-today')
                })
                }><b>Today</b></button>
              <button className='btn2' onClick={
                (()=>{
                  DiscoverMovie(moviesSeries[4] , setdisM)
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