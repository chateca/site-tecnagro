'use client'
import React from 'react'

function LoadingComponent() {
  return (
    <div className='absolute bg-white w-full max-h-screen h-[100vh] items-center justify-center'>
      <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

  </svg>
  Processing...
</button>

    </div>

  )
}

export default LoadingComponent
