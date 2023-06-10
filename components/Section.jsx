import DisvocerMovie from './DisvocerMovie'
import MoviesCards from './MoviesCards'
import {DiscoverMovie , DiscoverGenersMovies} from './helpers/VideosM'
import MovieInfos from './MovieInfos'

const Section = ({data , dism , text , setdisM , moviesSeries , settext }) => { 
  // console.log(data)

  return (
    <section>
    {/* <MovieInfos/> */}

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

        <div className='cicon' id='hidde'>
          <img src='./iconsMovies/theatre.png'/>

          <button onClick={(()=>{
            DiscoverMovie(moviesSeries[3] , setdisM)
            settext('Movies in Theatres')
          })
          }>Theatres</button>
        </div>   

        <div className='cicon'>
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