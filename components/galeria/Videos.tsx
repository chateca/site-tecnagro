import React from 'react'

function Videos() {
  return (
    <div className='w-full grid grid-cols-4 gap-4 p-4'>
              <div className='w-[100%] h-[100%] '>
              <video className='size-full' controls autoPlay={true} loop={true}  src="/video/video.mp4"/>
              </div>
              <div className='w-[100%] h-[100%] '>
              <video className='size-full' controls autoPlay={true} loop={true}  src="/video/video.mp4"/>
              </div>
              <div className='w-[100%] h-[100%] '>
              <video className='size-full' controls autoPlay={true} loop={true}  src="/video/video.mp4"/>
              </div>
              <div className='w-[100%] h-[100%] '>
              <video className='size-full' controls autoPlay={true} loop={true}  src="/video/video.mp4"/>
              </div>
    </div>
  )
}

export default Videos