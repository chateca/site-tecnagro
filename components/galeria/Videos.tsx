"use client"
import React from 'react'

function Videos() {
  return (

              <div className='relative w-full h-96 '>
              <video className='w-full h-full' controls autoPlay={true} loop={true} >

                <source  src="/assets/video/video.mp4" type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
              
           
                  </video>
              </div>
             
  
  )
}

export default Videos