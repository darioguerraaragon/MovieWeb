export const HandleVideos = async (id , setvideo) => {
    const res  = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5039d81fe0701d5eb97f27754ec17b37`)
                        .then((res)=>{return res.json()})
                        .then((res)=>{res.results.map((el)=>{setvideo(el.key)})})                  
}

// peticiones

export const HandleData = async (url , setData) => {
    const res  = await fetch(url)
                    .then((res)=>{return res.json()})
                    .then((res)=>{setData(res.results)})
}

// discover function
export  const DiscoverMovie = async (rut , setData) => {        
    const res = await fetch(rut)
                        .then((res)=>{return res.json()})
                        setData(res.results)
}

// genersMovies
export const DiscoverGenersMovies = (gener , setData) => { 
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=5039d81fe0701d5eb97f27754ec17b37&query=${gener}`)
                        .then((res)=>{return res.json()})
                        .then((res)=>{setData(res.results)})
    
}


export const series = [
    `https://api.themoviedb.org/3/tv/top_rated?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/tv/popular?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=5039d81fe0701d5eb97f27754ec17b37`, //on the air tv-shows
    `https://api.themoviedb.org/3/tv/airing_today?api_key=5039d81fe0701d5eb97f27754ec17b37`,// on the air today
    `null`,
    `https://api.themoviedb.org/3/trending/tv/day?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/trending/tv/week?api_key=5039d81fe0701d5eb97f27754ec17b37`
]

export const movies = [
    `https://api.themoviedb.org/3/movie/top_rated?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/popular?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/now_playing?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/trending/movie/day?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/trending/movie/week?api_key=5039d81fe0701d5eb97f27754ec17b37`
]

// get details

export const GetDetails = async (id , setdetails) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5039d81fe0701d5eb97f27754ec17b37`)
                                    .then((res)=>{return res.json()})
                                    .then((res)=>{setdetails(res)})
                                    // .then((res)=>{console.log(res)})
    
}