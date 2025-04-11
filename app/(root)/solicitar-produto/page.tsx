import FormPedidos from '@/components/FormPedidos'
import Image from 'next/image'
import React from 'react'
import banner2 from './../../../public/assets/img/banner2.jpg'
import milho from './../../../public/assets/img/milho.jpg'
import fejao from './../../../public/assets/img/fejao.jpg'
import soja from './../../../public/assets/img/soja.jpg'
import mandioca from './../../../public/assets/img/mandioca.jpg'
import nhame from './../../../public/assets/img/nhame.jpg'
import tomate from './../../../public/assets/img/tomate.jpg'
import delivery from './../../../public/assets/img/delivery.gif'

function page() {
  return (
    <section className='w-full flex flex-col pb-3'>
      <div className='relative w-full h-80 item'>
                      <Image
                      src={banner2}
                      alt="banner"
                      fill
                      sizes='auto'
                      className='object-cover w-[100%] h-[100%] brightness-50 '
                      />
      </div>
      
      <div className='container mt-3'>
        <div className='relative  w-full flex md:flex-row flex-col p-2  rounded-tr-3xl rounded-bl-3xl bg-white  '>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col w-full items-center text-center space-y-4 justify-center p-4'>
                 <h1 className='lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-extrabold text-green-2'>TecnAgro</h1>
                 <span className='lg:text-4xl md:text-3xl sm:text-xl text-lg font-bold text-gray-400'>
                  Faça a solicitacao do seu produto, e receba em pouco tempo! <br/>
                  Garantimos segurança e rapidez na entrega. 
                 </span>
            </div>
              <div className='flex flex-wrap gap-3 w-full items-center justify-center'>
                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={milho}
                      alt="milho"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>

                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={tomate}
                      alt="tomate"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>

                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={nhame}
                      alt="nhame"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>
                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={soja}
                      alt="soja"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>
                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={mandioca}
                      alt="mandioca"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>
                   <div className='relative w-16 h-16 rounded-full'>
                   <Image
                      src={fejao}
                      alt="fejao"
                      fill
                      sizes='auto'
                      className='object-cover rounded-full'
                      />
                   </div>
              </div>
            <div className='relative w-96 h-96'>
              <Image
              src={delivery}
              alt="delivey image"
              fill
              sizes='auto'
              className='object-cover'
              />
            </div>


          </div>
          <FormPedidos/>
        </div>
      </div>
    </section>
  )
}

export default page