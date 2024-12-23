import React from 'react'
import Header from '../components/Header'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
        <Header/>
        <GptSearchBar/>
        <GptMovieSuggestion/>

    </div>
  )
}

export default GptSearch