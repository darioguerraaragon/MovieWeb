import DisvocerMovie from './MovieCards'
import Theatres from '../navigation/Theatres'
import TopPopular from '../navigation/TopPopular'
import Trending from '../navigation/Trending'
import UpComings from '../navigation/UpComings'
import TvCategorias from '../navigation/TvCategorias'
import TrendingWeekandDay from '../navigation/TrendingWeekandDay'

const Section = ({ data , text , setData , moviesSeries , settext }) => { 
  // console.log(data)
  return (
    <section>
      <div className='wel-text'>

        <h2>{text}</h2>

        <TopPopular setData={setData} moviesSeries={moviesSeries}/>
        
        <Trending  setData={setData} moviesSeries={moviesSeries}/>

        <UpComings setData={setData} moviesSeries={moviesSeries} text={text}/>

        {text != 'Tv-Series Section'?<Theatres setData={setData} moviesSeries={moviesSeries}/>:null}  

        {text == 'Tv-Series Section'?<TvCategorias setData={setData}/>:null}  

        <TrendingWeekandDay setData={setData} moviesSeries={moviesSeries}/>
      </div>

      <div className='row'></div>

      <article>

        {data == undefined?null:data.map((dm)=>(
          <DisvocerMovie 
          dm={dm} 
          key={dm.id}
          />))}
  
      </article>     
    </section>
  )
}

export default Section