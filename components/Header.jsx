import React, { useState } from 'react'
import { useEffect } from 'react'
import { HandleData , DiscoverMovie , series, movies} from './helpers/VideosM'

const Header = ({ setData , settext , setmoviesSeries}) => {
    
    const [search, setSearch] = useState('')
    const handleSearch = ({ target }) => setSearch(target.value)
                                                
    const [url , seturl] = useState(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=`)

    const handleData = async () => {

        let path = `${url}${search}`
        HandleData(path , setData)
    }
    // 
     useEffect(() => {
         DiscoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37` , setData)
    }, [])    
    //
    return (
        <header>
            <nav>
                <h2 className='MovieS'>MovieStore</h2>
                <div className='searchNav'>
                    <img src='./imgs/loupe.png' />
                    <input 
                        className='inputS' 
                        type='text' 
                        placeholder='Search any movie'
                        onChange={handleSearch}/>
                    <button onClick={handleData}><b>Search</b></button>
                </div>

                <div className='infos'>
                        <button className='change' onClick={(()=>{
                            seturl(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=`)
                            settext('Discover Movies')
                            setmoviesSeries(movies)
                            DiscoverMovie( `https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37`, setData)
                        })}>Home</button>

                        <button className='change' onClick={
                            (()=>{
                                seturl(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=`)
                                settext('Movie Section')
                                setmoviesSeries(movies)
                                DiscoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37` , setData)
                            })
                         }>Movies</button>
                            
                        <button className='change' onClick={
                            (()=>{
                                seturl(`https://api.themoviedb.org/3/search/tv?api_key=5039d81fe0701d5eb97f27754ec17b37&query=` , setData)
                                settext('Tv-Series Section')
                                DiscoverMovie(`https://api.themoviedb.org/3/discover/tv?api_key=5039d81fe0701d5eb97f27754ec17b37` , setData)

                                setmoviesSeries(series)
                            })
                        }>Tv-series</button>
                </div>
            </nav>
        </header>
    )
}

export default Header