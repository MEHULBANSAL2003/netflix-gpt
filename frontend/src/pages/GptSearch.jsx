import React from 'react'
import Header from '../components/Header'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import { BG_IMAGE } from '../utilities/constants'

const GptSearch = () => {
  return (
    <div>
        <Header/>
       <div className='fixed -z-10'>
        <img  className='h-screen object-cover w-screen' src={BG_IMAGE} alt="background imagw" />

       </div>
       <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
        

    </div>
  )
}

export default GptSearch