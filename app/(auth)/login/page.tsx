import LoginForm from '@/components/LoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  const session = (await cookies()).get('session')?.value
  if(session) return redirect('/adminPage')
  return (
     <div className='flex flex-col h-[100vh] w-full items-center justify-center'>
        <h1 className='text-green-1 font-extrabold text-[18px] uppercase' >Olá seja bem vindo!</h1>
          <LoginForm/>
     </div>
  
  )
}

export default page