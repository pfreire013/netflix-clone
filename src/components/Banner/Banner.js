import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import requests, { base_imageUrl } from '../../requests'// eslint-disable-line camelcase
import './styles.css'

function Banner () {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ])
      return request
    }
    fetchData()
  }, [])

  function truncate (str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_imageUrl}${movie?.backdrop_path})`, // eslint-disable-line camelcase
        backgroundPosition: 'center center'
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner__fadeBottom' /> {/* eslint-disable-line camelcase */}
    </header>
  )
}

export default Banner
