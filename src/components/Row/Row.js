import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import { base_imageUrl } from '../../requests' // eslint-disable-line camelcase
import movieTrailer from 'movie-trailer'
import './styles.css'

function Row ({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)

  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    console.log('entrie', movie)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      try {
        movieTrailer(movie?.title || '').then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {
          movies.map(movie => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} // eslint-disable-line camelcase
              alt={movie.name}
            />
          ))
        }
      </div>
      {
        trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
      }
    </div>
  )
}

export default Row
