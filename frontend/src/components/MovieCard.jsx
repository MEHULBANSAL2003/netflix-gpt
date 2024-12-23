import React from 'react'
import { MOVIE_POSTER_URL } from '../utilities/constants'
const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
       <img src={MOVIE_POSTER_URL+posterPath} alt="Movie card" /> 
    </div>
  )
}

export default MovieCard
