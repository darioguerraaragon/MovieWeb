import React, { useState } from 'react'
import { useEffect } from 'react'
import { HandleData , DiscoverMovie , series, movies} from './helpers/VideosM'

const Header = ({ setData , setdisM , settext , setmoviesSeries}) => {
    //this is to hide the discover section =>
    let acc = false
    //
    const [search, setSearch] = useState('')
    const handleSearch = ({ target }) => setSearch(target.value)
                                                
    const [url , seturl] = useState(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=`)

    const handleData = async () => {
        //this is to hide the discover section =>
        acc = true
        if(acc){setdisM(undefined)}
        //
        let path = `${url}${search}`
        
        HandleData(path , setData)
    }
    // 
     useEffect(() => {
         DiscoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37` , setdisM)
    }, [])    
    //

    return (
        <header>
            <nav>
                <img className='cinema'/>
                <div className='searchNav'>
                    <div className='searchIcon'><img src='./imgs/loupe.png' /></div>
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
                            settext('Moust Popular Movies')
                            setData(undefined)
                            setmoviesSeries(movies)
                            DiscoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37` , setdisM)
                        })}>Home</button>

                        <button className='change' onClick={
                            (()=>{
                                seturl(`https://api.themoviedb.org/3/search/movie?api_key=5039d81fe0701d5eb97f27754ec17b37&query=`)
                                settext('Movie Section')
                                setData(undefined)
                                setmoviesSeries(movies)
                                DiscoverMovie(`https://api.themoviedb.org/3/discover/movie?api_key=5039d81fe0701d5eb97f27754ec17b37` , setdisM)
                            })
                         }>Movies</button>
                            
                        <button className='change' onClick={
                            (()=>{
                                seturl(`https://api.themoviedb.org/3/search/tv?api_key=5039d81fe0701d5eb97f27754ec17b37&query=` , setdisM)
                                settext('Tv-Series Section')
                                setData(undefined)
                                DiscoverMovie(`https://api.themoviedb.org/3/discover/tv?api_key=5039d81fe0701d5eb97f27754ec17b37` , setdisM)

                                setmoviesSeries(series)
                            })
                        }>Tv-series</button>
                </div>
            </nav>
        </header>
    )
}

export default Header