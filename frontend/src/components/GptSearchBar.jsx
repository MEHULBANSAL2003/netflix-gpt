import React from 'react'
import lang from '../utilities/languageConstants'
import { useSelector } from 'react-redux'



const GptSearchBar = () => {

  const currLang=useSelector((store)=>store.lang.lang);

  return (
    <div className='pt-[10%] flex justify-center'>
      

      <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
       
       <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[currLang].gptSearchPlaceholder} />
       <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded'>{lang[currLang].search}</button>

      </form>
      
    </div>
  )
}

export default GptSearchBar