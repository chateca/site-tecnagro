"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea'
import { UploadButton } from '@/lib/uploadthing'
import { useForm } from 'react-hook-form'
import { DescartarPublicacao, EditarPublicacao, Publicar, RetirarDoAr } from '@/lib/actions/actividades.actions'
import { useRouter } from 'next/navigation'


interface Props{
  dados:string
}

type Actividades = {
  _id:string,
  titulo:string, 
  imagem:string, 
  descricao:string,
  dataRegistro:string, 
  ativo:boolean
}[]

type TodasActividades = {
 todas:Actividades, 
 activas:Actividades, 
 naoActivas:Actividades

}

type Edicao = {
  id:string, 
  titulo:string, 
  imagem:string, 
  descricao:string
}

const formSchema = z.object({
    titulo: z.string(),
      descricao:z.string()
  })

  

function PublicacoesAdmin({dados}:Props) {
  const [imageUrl , setImageUrl] = useState("")
  const [menuNavegacao , setMenuNavegacao] = useState('')
  const [dadosActuais , setDadosActuais] = useState<{id:string, titulo:string, imagem:string, descricao:string}>({id:"", imagem:"", descricao:"", titulo:""})
const  router = useRouter()
       const form = useForm<z.infer<typeof formSchema>>({
              resolver: zodResolver(formSchema),
              defaultValues: {
                titulo: "",
                descricao:""
              
              },
            })
           
  const dadosActividade:TodasActividades = JSON.parse(dados)

    const [enviando, setEnviando] = useState(false)
  
      const publicar = async ({id}:{id:string })=>{
          setEnviando(true)
            try {
             
              await Publicar(id)
              setEnviando(false)
            } catch (error) {
              console.log(error)
            }
      }
      const retirarDoAr = async ({id}:{id:string })=>{
        setEnviando(true)
          try {
           
            await RetirarDoAr(id)
            setEnviando(false)
          } catch (error) {
            console.log(error)
          }
    }
  
      const descartarPublicacao= async (id:string)=>{
          try {
              await DescartarPublicacao(id)
          } catch (error) {
              console.log(error)
          }
  
      }

      const todas = ()=>{
        return (
          <div className='grid lg:grid-cols-4 mb:grid-cols-2 grid-cols-1 gap-4 w-full mt-2 p-4'>
          {
           dadosActividade.todas.map((item)=>(
                  <div key={item._id} className="flex flex-col  justify-between items-center rounded-xl ">
                   <div className='relative flex w-full h-[200px]'>
                     <Image
                     src={item.imagem}
                     alt='consultoria'
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className='object-cover'
                     />
                   </div>
                   <div className='flex size-full justify-between flex-col gap-2 p-2 bg-black-3/50 '>
                        <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>{item.titulo}</h1>
                        <span className='text-[14px] font-semibold text-white text-wrap break-words truncate  p-4  tracking-tighter'>{item.descricao}</span>
                         <div className='flex w-full '>
                       <Drawer>
                                                           <DrawerTrigger asChild>
                                                               <Button onClick={()=>setDadosActuais({id:item._id, titulo:item.titulo, imagem:item.imagem, descricao:item.descricao})} variant="outline">Ver detalhes</Button>
                                                           </DrawerTrigger>
                                                            {
                                                             detalhesPublicacao({
                                                               id : item._id,
                                                               titulo:item.titulo, 
                                                               descricao:item.descricao, 
                                                               imagem:item.imagem, 
                                                             
                                                             }
                                                             )
                                                            }
                                                       </Drawer>
                         </div>
                         <span className={`text-[14px] font-semibold upercase ${item.ativo ? 'text-green-3' : 'text-yellow-500'}`}>{item.ativo ?'Ativa':'Não Ativa'}</span>
                   </div>
       
                 </div>
           ))
          }
       
       
                 
           </div>
        )
      } 

      const ativas = ()=>{
        return (
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-2 p-4'>
          {
           dadosActividade.activas.map((item)=>(
                  <div key={item._id} className="flex flex-col  justify-between items-center rounded-xl ">
                   <div className='relative flex w-full h-[200px]'>
                     <Image
                     src={item.imagem}
                     alt='consultoria'
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className='absolute object-cover'
                     />
                   </div>
                   <div className='flex size-full justify-between flex-col gap-2 p-2 bg-black-3/50 '>
                        <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>{item.titulo}</h1>
                        <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>{item.descricao}</span>
                         <div className='flex w-full '>
                       <Drawer>
                                                           <DrawerTrigger asChild>
                                                               <Button onClick={()=>setDadosActuais({id:item._id, titulo:item.titulo, imagem:item.imagem, descricao:item.descricao})} variant="outline">Ver detalhes</Button>
                                                           </DrawerTrigger>
                                                            {
                                                             detalhesPublicacao({
                                                               id : item._id,
                                                               titulo:item.titulo, 
                                                               descricao:item.descricao, 
                                                               imagem:item.imagem, 
                                                             
                                                             }
                                                             )
                                                            }
                                                       </Drawer>
                         </div>
                         <span className={`text-[14px] font-semibold upercase ${item.ativo ? 'text-green-3' : 'text-yellow-500'}`}>{item.ativo ?'Ativa':'Não Ativa'}</span>
                   </div>
       
                 </div>
           ))
          }
       
       
                 
           </div>
        )
      } 

      const naoAtivas = ()=>{
        return (
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full mt-2 p-4'>
          {
           dadosActividade.naoActivas.map((item)=>(
                  <div key={item._id} className="flex flex-col  justify-between items-center rounded-xl ">
                   <div className='relative flex w-full h-[200px]'>
                     <Image
                     src={item.imagem}
                     alt='consultoria'
                     fill
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     className='absolute object-cover'
                     />
                   </div>
                   <div className='flex size-full justify-between flex-col gap-2 p-2 bg-black-3 '>
                        <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>{item.titulo}</h1>
                        <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>{item.descricao}</span>
                         <div className='flex w-full '>
                       <Drawer>
                                                           <DrawerTrigger asChild>
                                                               <Button onClick={()=>setDadosActuais({id:item._id, titulo:item.titulo, imagem:item.imagem, descricao:item.descricao})} variant="outline">Ver detalhes</Button>
                                                           </DrawerTrigger>
                                                            {
                                                             detalhesPublicacao({
                                                               id : item._id,
                                                               titulo:item.titulo, 
                                                               descricao:item.descricao, 
                                                               imagem:item.imagem, 
                                                             
                                                             }
                                                             )
                                                            }
                                                       </Drawer>
                         </div>
                         <span className={`text-[14px] font-semibold upercase ${item.ativo ? 'text-green-3' : 'text-yellow-500'}`}>{item.ativo ?'Ativa':'Não Ativa'}</span>
                   </div>
       
                 </div>
           ))
          }
       
       
                 
           </div>
        )
      } 

         async function onSubmit(values: z.infer<typeof formSchema>) {
                  try {
                    const dados = {
                      titulo: values.titulo ? values.titulo : dadosActuais.titulo, 
                      imagem: imageUrl ? imageUrl: dadosActuais.imagem, 
                      descricao: values.descricao ? values.descricao : dadosActuais.descricao, 
                      id:dadosActuais.id
                    }
                   
                   await EditarPublicacao(dados)
                      return router.refresh()
                  } catch (error) {
                    console.log("nao deu enviar dados publicação", error)
                  }
                }

      
          const detalhesPublicacao = ({id, titulo, imagem , descricao}:Edicao)=>{
            
              return(
                  <DrawerContent className='flex flex-col w-full bg-white ' >
                  <div className="flex flex-col w-full ">
                  <DrawerHeader className='flex flex-col w-full items-center '>
                      <DrawerTitle className='text-[28px]'>Publicação</DrawerTitle>
                      <DrawerDescription className='text-[18px]'>Editar Publicacão</DrawerDescription>
                  </DrawerHeader>
                  <div className="flex flex-col  w-full p-4 pb-0 overflow-y-scroll">
                  <div className='w-full flex md:flex-row flex-col justify-between gap-4 '>
         <div className='flex flex-col p-2 gap-4'>
        <div className='relative flex md:w-[300px] md:h-[300px] w-[150px] h-[150px] border-[1px] border-black-3 rounded-xl'>
           <Image
           src={imageUrl ? `${imageUrl}` : imagem}
           alt='Image Publicacao'
           fill
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           unoptimized
           className='absolute object-cover'
           />           

        </div>
        <UploadButton className='bg-green-3 flex rounded-xl h-14'
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImageUrl(res[0].url)
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
        </div>
  
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col space-y-1 md:w-[50%] w-full border-green-3 border-[1px] rounded-2xl p-4">
                      
                        <FormField
                        control={form.control}
                        name="titulo"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Titulo</FormLabel>
                            <FormControl>
                                <Input placeholder={titulo} {...field} />
                            </FormControl>
                          
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                             control={form.control}
                             name="descricao"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Descrição da Publicação</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder={descricao}
                                    className=" flex full max-xl:h-full"
                                    {...field}
                                    />
                                </FormControl>
                                                                     
                                <FormMessage />
                                </FormItem>
                            )}
                            />

                        <Button className='flex  bg-green-1' type="submit">Editar Publicação</Button>
                    </form>
                    </Form>
  
   </div>
                  <DrawerFooter className='w-full justify-end'>
                      <Button  onClick={()=>publicar({id:id})}  className={`bg-green-2 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Publicar'}</Button>
                      <Button  onClick={()=>retirarDoAr({id:id})}   className={`bg-red-500 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Retirar do ar'}</Button>
                      <Button  onClick={()=>descartarPublicacao(id)}   className={`bg-gray-500 text-black-3 text-[14px] font-bold uppercase  ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Descartar publicação'}</Button>
                      <DrawerClose asChild>
                      <Button onClick={()=>setDadosActuais({id:"", imagem:"", titulo:"", descricao:""})} variant="outline">Cancel</Button>
                      </DrawerClose>
                  </DrawerFooter>
                      
                  </div>
                 
                  </div>
              </DrawerContent>
              )
            }

  return (
    <div className='flex flex-col w-full p-4'>
        <h2 className='text-[18px] font-bold text-gray-400 uppercase'>Publicações criadas : 20</h2>
        <div className='w-full p-2 flex justify-between gap-2'>
            <button onClick={()=>setMenuNavegacao('todas')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-green-3/30 p-4 font-semibold justify-center uppercase'>Todas</button>
            <button  onClick={()=>setMenuNavegacao('ativas')}className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-green-3/60 p-4 font-semibold justify-center uppercase'>Activas</button>
            <button onClick={()=>setMenuNavegacao('naoAtivas')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-yellow-200/30 p-4 font-semibold justify-center uppercase'>Não Activas</button>

        </div>
        {
          menuNavegacao === "todas" ?
          todas()
          :menuNavegacao === 'ativas' ?
          ativas()
          :menuNavegacao === 'naoAtivas'?
          naoAtivas()
          :todas()
        }
    </div>
  )
}

export default PublicacoesAdmin