"use client"
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { useEffect} from 'react'

const items = [
  {
    titulo:"TecnAgro",
    sub:"Formações",
    image:'img1.jpg',
    desc:"lorem e mais alguma coisa que vai impactar o cliente",
    id:1
  }, 
  {
    titulo:"TecnAgro",
    sub:"Formações",
    image:'img7.jpg',
    desc:"lorem e mais alguma coisa que vai impactar o cliente",
    id:2
  }, 
  {
    titulo:"TecnAgro",
    sub:"Formações",
    image:'img4.jpg',
    desc:"lorem e mais alguma coisa que vai impactar o cliente",
    id:3
  }, 

]



function BannerComponent() {
  const router = useRouter()


  useEffect(()=>{
    const  items = document.querySelectorAll('.slider .list .item');
   
    const proximo = document.getElementById('proximo');
    const anterior = document.getElementById('anterior');
    if(!proximo) return 
    if(!anterior) return

    // slide
    const  countItem = items.length;
    let itemAtive = 0
    
    
    
    proximo.onclick = function(){
      itemAtive = itemAtive +1
      if(itemAtive >= countItem){
        itemAtive = 0
      }
      showSlader()
    } 
    
    
    anterior.onclick = function(){
     
      itemAtive = itemAtive -1
      if(itemAtive < 0){
        itemAtive = countItem-1
      }
      showSlader()
    } 
    
    let refreshSlides = setInterval(()=>{
    
      proximo?.click()
    },9000)
    
    
    function showSlader(){
      let indice = 0
       if(itemAtive ===0 ){
         indice = 1 
      }else if(itemAtive === 3){
        indice = 0
        }else{ 
        indice =  itemAtive+1
        }
    
       items[itemAtive]?.classList.remove('ative');
        items[indice]?.classList.add('ative');
     
       

         clearInterval(refreshSlides)
         refreshSlides = setInterval(()=>{
          proximo?.click()
    },9000)
    }
  
  },[])
  


    
  return (
    <div className="relative flex w-full max-h-[100vh] h-[100vh] -mt-[50px] slider">
      <div className='flex flex-col h-full w-full list'>
      <div
            className='relative flex  w-full h-full item ative'>
            <Image
            src={`/assets/img14.jpg`}
            alt='sliderImage'
            fill 
          
           className='object-cover w-[100%] h-[100%] brightness-50'
           />
            <div className='content'>
          
           <div className='flex flex-col gap-2 sm:flex-row mt-3'>
            <button onClick={()=>router.push("/solicitar-produto")} className='btn'>
              <span className='text-white flex'>
                Solicitar prodto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>

              </span>
            </button>
             <button className='btn btn_outline'>
              <span className='text-white flex'>
                No terreno
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
              </svg>

              </span>
             </button>
           </div>

           
            </div>
      
          </div>
        {
          items.map((item)=>(
            <div
            key={item.id} 
            className='relative flex  w-full h-full item'>
            <Image
            src={`/assets/${item.image}`}
            alt='sliderImage'
            fill 
             sizes='100%'
           className='object-cover w-[100%] h-[100%] brightness-50'
           />
            <div className='content'>
          
           <div className='flex flex-col gap-2 sm:flex-row mt-3'>
            <button onClick={()=>router.push("/solicitar-produto")} className='btn'>
              <span className='text-white flex'>
                Solicitar prodto
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>

              </span>
            </button>
             <button className='btn btn_outline'>
              <span className='text-white flex'>
                No terreno
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
              </svg>

              </span>
             </button>
           </div>

            </div>
      
          </div>
          ))
        }


      </div>
      <div className='setas hidden lg:flex space-x-6'>
         <button className='flex items-center justify-center' id='proximo'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
        </svg>
      

         </button>
         <button className='flex items-center justify-center' id='anterior'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
          </svg>

         </button>
      </div>
  </div>
  )
}

export default BannerComponent