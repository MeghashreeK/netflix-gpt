import React from 'react'
import Header from './Header'

const Browser = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div>
      <Header/>
      </div>
      <div>
      <button className='font-bold text-red-500'>Sign Out</button>
      </div>
      </div>
    </div>
  )
}

export default Browser;