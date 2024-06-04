import React from 'react'
const Header = () => {
    return (
        <div className='absolute z-10 w-full'>
            {/* <img className='w-48 bg-gradient-to-b from-black' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" /> */}
            <h1 className='font-bold p-2 text-red-600 Bebas text-4xl bg-gradient-to-b from-black relative'>
            <span className='block'>
                <span className='transform -translate-y-2'>N</span>
                <span className='transform -translate-y-1'>I</span>
                <span className=''>R</span>
                <span className='transform translate-y-1'>V</span>
                <span className='transform translate-y-2'>A</span>
                <span className='transform -translate-y-1'>N</span>
                <span className='transform -translate-y-2'>A</span>
            </span>
        </h1>        </div>
    )
}

export default Header