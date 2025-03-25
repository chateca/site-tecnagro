"use client"
import React from 'react'

function Videos() {
  return (

              <div className='relative w-full h-96 '>
              <video className='w-full h-full' controls autoPlay={true} loop={true}  src="/assets/video/video.mp4"/>
              </div>
             
  
  )
}

export default Videos