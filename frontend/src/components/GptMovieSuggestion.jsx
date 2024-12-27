import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {
  
  const gpt=useSelector((store)=>store.gpt);
  console.log(gpt);
  return (
    <div>


    </div>
  )
}

export default GptMovieSuggestion