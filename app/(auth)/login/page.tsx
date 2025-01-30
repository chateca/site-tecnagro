import LoginForm from '@/components/LoginForm'
import React from 'react'

function page() {
  return (
     <div className='flex flex-col h-[100vh] w-full items-center justify-center'>
        <h1 className='text-green-1 font-extrabold text-[18px] uppercase' >Olá seja bem vindo!</h1>
          <LoginForm/>
     </div>
  
  )
}

export default page