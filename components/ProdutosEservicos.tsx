"use client"
import Image from 'next/image'
import folha1 from './../public/assets/img/folha1.png'
import folha2 from './../public/assets/img/folha2.png'


function ProdutosEservicos() {

    
  return (
    <div className='relative bg-white flex flex-col overflow-hidden py-4'>
     <div  className='telative flex flex-col z-30 relative  gap-3  mb-4 md:mb-8 px-10'>
          <h2 className='titulo text-center '>Principais Serviços</h2> 

        </div>
    
    <div className='container w-full grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8'>
        <Image
        src={folha1}
        alt='folha'
        width={200}
        height={200}
        sizes='100px'
        className='absolute  -top-14 left-14 animate-mediaAnimation'
        loading='lazy'
        blurDataURL={'folha1'}
        placeholder='blur'
    
        />

        <Image
        src={folha2}
        alt='folha'
        width={200}
        height={200}
        sizes='100px'
        className='absolute bottom-0 -right-20 animate-mediaAnimation'
        loading='lazy'
        blurDataURL={'folha2'}
        placeholder='blur'
                   
        />
        <div  className='relative bg-green-1 border p-5 cursor-pointer rounded-md hover:-translate-y-5 duration-300 space-y-5'>
            <div className='flex items-center gap-5'>
            <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <p className='md:text-lg font-bold'>
                Entrega<br/>
                Imediata
            </p>
            </div>
            <p>
                Entregamos produtos agrícolas em qualquer lugar de Angola, faça já o seu pedido.
            </p>
        </div>

        <div data-aos="fade-up" className='relative border bg-green-1 p-5 cursor-pointer rounded-md hover:-translate-y-1 duration-300 space-y-5'>
            <div className='flex items-center gap-5'>
            <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>

            <p className='md:text-lg font-bold'>
                Formação <br/>
                Agrária
            </p>
            </div>
            <p>
               Oferecemos formação diversa em agricultura.
            </p>
        </div>

        <div data-aos='fade-up' className='relative border bg-green-1 p-5 cursor-pointer rounded-md hover:-translate-y-1 duration-300 space-y-5'>
            <div className='flex items-center gap-5'>
            <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>

            <p className='md:text-lg font-bold'>
                Acompanhamento & Elaboração<br/>
                de Projectos
            </p>
            </div>
            <p>
               Prestamos serviços de acompanhamento e elaboração de estudos de viabilidade e projecto.
            </p>
        </div>
    </div>
    </div>
  )
}

export default ProdutosEservicos