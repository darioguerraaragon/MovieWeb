import DisvocerMovie from './DisvocerMovie'
import MoviesCards from './MoviesCards'
import Theatres from '../navigation/Theatres'
import TopPopular from '../navigation/TopPopular'
import Trending from '../navigation/Trending'
import UpComings from '../navigation/UpComings'
import TvCategorias from '../navigation/TvCategorias'
import TrendingWeekandDay from '../navigation/TrendingWeekandDay'

const Section = ({data , dism , text , setdisM , moviesSeries , settext }) => { 
  // console.log(data)
  return (
    <section>
      <div className='wel-text'>

        <h2>{text}</h2>

        <TopPopular settext={settext} setdisM={setdisM} moviesSeries={moviesSeries}/>
        
        <Trending settext={settext} setdisM={setdisM} moviesSeries={moviesSeries}/>

        <UpComings setdisM={setdisM} moviesSeries={moviesSeries} text={text}/>

        {text == 'Tv-Series Section'?null:<Theatres settext={settext} setdisM={setdisM} moviesSeries={moviesSeries}/>}  

        {text == 'Tv-Series Section'?<TvCategorias setdisM={setdisM}/>:null}  

        <TrendingWeekandDay setdisM={setdisM} moviesSeries={moviesSeries} settext={settext}/>
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