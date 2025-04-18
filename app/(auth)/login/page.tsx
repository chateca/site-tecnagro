import LoginForm from '@/components/LoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  const session = (await cookies()).get('sessionTecnagro')?.value
  if(session) return redirect('/adminPage')
  return (
          <LoginForm/>
         )
}

export default page