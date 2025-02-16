"use client"
import * as React from 'react'
import Image from 'next/image'

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

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from './ui/textarea';
import { CrearPedido } from '@/lib/actions/pedidos.actions'
import Swal from 'sweetalert2'


const formSchema = z.object({
    nome:z.string().min(3), 
    telefone:z.string().min(9).max(17),
    email: z.string().email(),
    descricao:z.string().min(3),
    endereco:z.string().min(3).max(50),
  })

  



   

function Consultorias() {
  
       
    const [enviando , setEnviando] = React.useState(false)


     const form = useForm<z.infer<typeof formSchema>>({
                resolver: zodResolver(formSchema),
                defaultValues: {
                  nome: "",
                  email: "",
                  descricao:"",
                  telefone:"",
                  endereco:""
                
                },
              })
             
        
    async function onSubmit(values: z.infer<typeof formSchema>) {
                     setEnviando(true)
                    try {
                     
                            await CrearPedido(values)
                            setEnviando(false)
                          
                          Swal.fire({
                            title: "Pedido Enviado com sucesso",
                            icon: "success",
                       
                            showConfirmButton: false,
                            timer: 2000
                          });
                    } catch (error) {
                      Swal.fire({
                        title: "Alfo deu errado porfavor tente novamente mais tarde!",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000
                      });
                      console.log("erro ao enviar dados", error)
                    }
               
              }

  
    const detalhes = ()=>{
      return(
        <DrawerContent>
        <div className="w-full overflow-y-scroll">
        <DrawerHeader>
            <DrawerTitle className='md:text-[28px] sm:text-[18px] text-[14px] text-green-2 font-mono font-extrabold'>Saiba mais sobre o que podemos oferecer</DrawerTitle>
            <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full p-4 pb-0">
        <div className='w-full hfull flex bg-white '>
            <div className='flex flex-col w-full gap-2 p-2 '>
               
                <div className='flex flex-col w-full h-full'>
                   <ul className=' relative flex flex-col gap-1 justify-between h-full -right-6 z-20'>
                    <li className='flex gap-2 p-1  rounded-l-3xl  bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px] flex flex-col'>
                        Desenvolvimento de Projetos Agrícolas e Estudos de Viabilidade 
                         <span className='mt-2 text-[14px] font-normal'>
                        Elaboração de projetos personalizados e estudos de viabilidade econômica para novos empreendimentos agrícolas, garantindo a sustentabilidade e a rentabilidade dos investimentos.
                        </span>
                        </span>
                    </li>

                    <li className='flex gap-2 p-1  rounded-l-3xl bg-gradient-to-r h- from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] flex flex-col text-[12px]'>
                        Formação em Práticas Agroflorestais 
                        <span className='mt-2 text-[14px] font-normal'>
                        Programas de capacitação para agricultores, técnicos florestais e ambientalistas, promovendo as melhores práticas agroecológicas e o uso eficiente de tecnologias modernas.
                        </span>
                        </span>
                    </li>

                    <li className='flex gap-2 p-1  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] flex flex-col text-[12px]'>
                        Estudos Ecológicos e Ambientais 
                        <span className='mt-2 text-[14px] font-normal'>
                        Levantamentos e estudos detalhados sobre biodiversidade, ecossistemas e impactos ambientais, incluindo análise de flora e fauna, avaliação de habitats, monitoramento ambiental e elaboração de relatórios de impacto ambiental.
                        </span>
                        </span>
                    </li>

                    <li className='flex gap-2 p-1  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] flex flex-col text-[12px]'>
                        Instalação e Montagem de Sistemas de Irrigação 
                        <span className='mt-2 text-[14px] font-normal'>
                        Desenvolvimento e implementação de sistemas de irrigação eficientes e sustentáveis, adaptados às necessidades específicas de cada propriedade agrícola.
                        </span>
                        </span>
                    </li>

                    <li className='flex gap-2 p-1  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold flex flex-col 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Soluções de Agricultura Digital  
                        <span className='mt-2 text-[14px] font-normal'>
                        Implementação de tecnologias digitais avançadas para monitoramento e gestão de operações agrícolas, promovendo a agricultura de precisão e a otimização de recursos.
                        </span>
                        </span>
                    </li>

                    <li className='flex gap-2 p-1  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold flex flex-col 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Comercialização de Sementes e Produção de Mudas 
                        <span className='mt-2 text-[14px] font-normal'>
                        Oferta de sementes de espécies nativas e florestais, além da produção de mudas adaptadas ao bioma angolano, promovendo a conservação da biodiversidade e o reflorestamento sustentável
                        </span>
                        </span>
                    </li>
                  </ul>   
                </div>
               
            </div>

           
            
            
         </div>

            
        </div>
        <DrawerFooter>
        
            <DrawerClose asChild>
            <Button className='bg-green-3 text-white text-[14px] font-medium ' variant="outline">Sair</Button>
            </DrawerClose>
        </DrawerFooter>
        </div>
    </DrawerContent>
      )
    }

    const detalhesPedido = ()=>{
      return(
        <DrawerContent className='flex flex-col w-full p-2 gap-2' >
        <div className="flex flex-col w-full overflow-y-scroll ">
        <DrawerHeader className='flex flex-col w-full '>
            <DrawerTitle>Solicitar Produto </DrawerTitle>
            <DrawerDescription>Solicite os seus produtos</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full p-4 pb-2">
           
                 <Form {...form}>
                                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col   justify-between w-full h-full ">
                                    
                                      <FormField
                                      control={form.control}
                                      name="nome"
                                      render={({ field }) => (
                                          <FormItem>
                                          <FormLabel>Seu Nome</FormLabel>
                                          <FormControl>
                                              <Input placeholder="Nome" {...field} />
                                          </FormControl>
                                        
                                          <FormMessage />
                                          </FormItem>
                                      )}
                                      />
                                       <FormField
                                      control={form.control}
                                      name="email"
                                      render={({ field }) => (
                                          <FormItem>
                                          <FormLabel>Seu Email</FormLabel>
                                          <FormControl>
                                              <Input placeholder="Email" {...field} />
                                          </FormControl>
                                         
                                          <FormMessage />
                                          </FormItem>
                                      )}
                                      />
                                       <FormField
                                      control={form.control}
                                      name="telefone"
                                      render={({ field }) => (
                                          <FormItem>
                                          <FormLabel>Telefone</FormLabel>
                                          <FormControl>
                                              <Input placeholder="+244 999 999 999" {...field} />
                                          </FormControl>
                                         
                                          <FormMessage />
                                          </FormItem>
                                      )}
                                      />
                                      
                                       <FormField
                                      control={form.control}
                                      name="endereco"
                                      render={({ field }) => (
                                          <FormItem>
                                          <FormLabel>Seu endereço completo</FormLabel>
                                          <FormControl>
                                              <Input placeholder="endereco inclui(Pais, Provincia, Municipio e Bairro)" {...field} />
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
                                                  <FormLabel>Produtos a Solicitar</FormLabel>
                                                  <FormControl>
                                                      <Textarea
                                                      placeholder="Digite a sua mensagem "
                                                      className=" flex full max-xl:h-full"
                                                      {...field}
                                                      />
                                                  </FormControl>
                                                                     
                                                  <FormMessage />
                                                  </FormItem>
                                          )}
                                          />
                                        <DrawerFooter className=''>
                                      <Button  type='submit'  className={`${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Solicitar Produto'}</Button>
                                      <DrawerClose asChild>
                                      <Button variant="outline">Cancel</Button>
                                      </DrawerClose>
                                    </DrawerFooter>
             
                                  </form>
                </Form>
             
            
        </div>
       
        </div>
    </DrawerContent>
      )
    }
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full conteudo-actividades">
        <div className='grid  md:grid-cols-2 grid-cols-1 w-full self-center'>
         <div className='w-full p-2'>
          <div className='grid grid-cols-2   gap-2'>
            <div className='relative flex lg:h-[200px] xl:h-[500px] w-full rounded-2xl conteudo-actividades'>
            <Image
              src={"/assets/img4.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl w-full brightness-75 '
              />
            </div>

            <div className='relative flex lg:h-[200px] xl:h-[500px] w-full rounded-2xl conteudo-actividades'>
            <Image
              src={"/assets/img7.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl brightness-75'
              />
            </div>

            <div className='relative flex h-[200px] w-full rounded-2xl conteudo-actividades'>
            <Image
              src={"/assets/img5.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl brightness-75 '
              />
            </div>

            <div className='relative flex h-[200px]  w-full rounded-2xl conteudo-actividades'>
            <Image
              src={"/assets/img6.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl brightness-75'
              />
            </div>
          </div>
         </div>

         <div className='w-full hfull flex bg-white '>
            <div className='flex flex-col w-full gap-2 p-2 '>
                 <h1 className='text-green-2 font-bold lg:text-[18px] xl:text-[28px]  text-[18px] '>Entre os serviços oferecidos, destacamos:</h1>
                <div className='flex flex-col w-full h-full'>
                   <ul className=' relative flex flex-col gap-1 justify-between h-full -right-6 z-20'>
                    <li className='flex gap-2 p-1 xl:p-4 rounded-l-3xl h-16 bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Desenvolvimento de Projetos Agrícolas e Estudos de Viabilidade 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16 rounded-l-3xl bg-gradient-to-r h- from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Formação em Práticas Agroflorestais 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Estudos Ecológicos e Ambientais 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Instalação e Montagem de Sistemas de Irrigação 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Soluções de Agricultura Digital  
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold font-mono 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Comercialização de Sementes e Produção de Mudas 
                        </span>
                    </li>
                  </ul>   
                </div>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger className='flex w-full' asChild>
                    <Button variant="outline" className='flex bg-black-3 hover:bg-green-3 text-white font-semibold text-[14px]'>Saber mais</Button>
                </DrawerTrigger>
                 {
                  detalhes()
                 }
            </Drawer>
                  </div>
            </div>

           
            <div className='relative  w-[400px] xl:w-[1000px] h-full '>
              <Image
              src={"/assets/img2.jpg"}
              alt='consultoria'
              fill
              className='object-cover size-full rounded-l-2xl'
              />
                <div className="absolute inset-0 bg-gradient-to-l size-full from-transparent to-black-3 opacity-100"></div>
            </div>
            
         </div>

     

        
        </div>

   

       

        <div className='flex flex-col w-full  py-8 items-center justify-center  rounded-3xl'>

      
  <div className="flex flex-col w-full h-[500px] md:flex-row  justify-between items-center  bg-gradient-to-l from-green-1   rounded-l-xl ">
            <div className='relative flex w-full  h-full'>
              <Image
              src={"/assets/img9.png"}
              alt='consultoria'
              fill
              className='absolute object-cover rounded-l-xl size-full'
              />
            </div>
            <div className='flex w-full flex-col gap-2 p-4'>
                 <h1 className='text-black-3 font-bold text-[28px] max-xl:text-[20px] max-sm:text-[14px]'>Solicitar produto</h1>
                 <span className='text-[14px] font-semibold text-black-3 text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>Fornecemos serviços e produtos variados, faça seu pedido e receba a quantidade solicitada em apenas um clique</span>
                  <div className='flex w-full justify-center'>
                  <Drawer>
                <DrawerTrigger className='flex' asChild>
                    <Button className='bg-black-3 text-white' variant="outline">Solicitar produto</Button>
                </DrawerTrigger>
                 {
                  detalhesPedido()
                 }
            </Drawer>
                  </div>
            </div>
           
           
          </div>
        </div>

          

        </div>
  )
}

export default Consultorias