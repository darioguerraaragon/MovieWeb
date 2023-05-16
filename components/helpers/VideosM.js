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
export  const DiscoverMovie = async (rut , setdisM) => {        
    const res = await fetch(rut)
                        .then((res)=>{return res.json()})
                        setdisM(res.results)
}

export const series = [
    `https://api.themoviedb.org/3/tv/top_rated?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/tv/popular?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=5039d81fe0701d5eb97f27754ec17b37` //on the air tv-shows
]

export const movies = [
    `https://api.themoviedb.org/3/movie/top_rated?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/popular?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/movie/now_playing?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    // `https://api.themoviedb.org/3/movie/latest?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/trending/all/day?api_key=5039d81fe0701d5eb97f27754ec17b37`,
    `https://api.themoviedb.org/3/trending/all/week?api_key=5039d81fe0701d5eb97f27754ec17b37`
]