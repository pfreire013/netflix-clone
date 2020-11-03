const APIKEY = '80f8b3b0f5367cbe4ea801584219c062'

export const base_imageUrl = 'https://image.tmdb.org/t/p/original/' // eslint-disable-line camelcase

const request = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${APIKEY}&with_networks=213`,
  fetctTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default request
