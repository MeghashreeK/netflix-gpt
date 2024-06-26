import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearch = () => {
  const language=useSelector(store=>store.language.languageSelected);
  console.log(language);
  return (
       <div className='flex justify-center bg-[#010B13] pt-[8%] h-screen w-screen gap-2'>
        <input className="h-5 w-1/2 p-5 rounded-lg focus:outline-none" placeholder={lang[language].gptSearchPlaceholder}/>
        <button className='flex text-white h-5 bg-red-600 p-5 items-center rounded-lg transition duration-1000 hover:opacity-70'>{lang[language].search}</button>
       </div>
  )
}

export default GptSearch;
