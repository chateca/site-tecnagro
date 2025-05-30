import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import {FormState} from '@/lib/definitions'
import { cookies } from 'next/headers'
 
const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function encrypt(payload: FormState) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}
 
export async function decrypt(session: string | undefined = '') {
  try {
    if (!session) throw new Error('Nenhuma sessão encontrada')
    
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })

    console.log('Sessão válida:', payload)
    return payload
  } catch (error) {
    console.error('Erro ao verificar sessão:', error)
    return null
  }
}

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({userId, expiresAt})
    const cookieStore = await cookies()
   
    cookieStore.set('sessionTecnagro', session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: 'none',
      path: '/',
    })
  }

  export async function updateSession() {
    const session = (await cookies()).get('sessionTecnagro')?.value
    const payload = await decrypt(session)
   
    if (!session || !payload) {
      return null
    }
   
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
   
    const cookieStore = await cookies()
    cookieStore.set('sessionTecnagro', session, {
      httpOnly: true,
      secure: true,
      expires: expires,
      sameSite: 'none',
      path: '/',
    })
  }

  export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('sessionTecnagro')
  }