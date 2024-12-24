import React from 'react'
import Header from '../components/Header'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import { BG_IMAGE } from '../utilities/constants'

const GptSearch = () => {
  return (
    <div>
        <Header/>
       <div className='absolute -z-10'>
        <img src={BG_IMAGE} alt="background imagw" />

       </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        

    </div>
  )
}

export default GptSearch