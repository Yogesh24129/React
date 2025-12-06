import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-[80vh] bg-slate-100 flex justify-center items-center'>The page doesnt exist 404
        Go to &nbsp;<Link to={'/'} className='text-blue-500 hover:bg-blue-700 hover:underline'>Home</Link>



    </div>

  )
}

export default NotFound