import React from 'react'
import { MOVIE_POSTER_URL } from '../utilities/constants'
const MovieCard = ({posterPath}) => {
  if(!posterPath) return; 
  return (
    <div className=' w-36 md:w-48 pr-4'>
       <img src={MOVIE_POSTER_URL+posterPath} alt="Movie card" /> 
    </div>
  )
}

export default MovieCard
