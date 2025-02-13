"use client"
import * as React from 'react'
import Image from 'next/image'
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
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
import {animate, scroll, stagger} from "motion"
import { useEffect } from "react";
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

  


 
const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]
   

function Consultorias() {
    const [goal, setGoal] = React.useState(350)
       
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

    useEffect(()=>{
        document.querySelectorAll(".conteudo-container").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], x: [0, 100] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
          })
      })

       document.querySelectorAll(".conteudo-produtos").forEach((item) => {
                scroll(animate(item, { opacity: [0, 1, 1, 0], y: [150, 0] }, { delay: stagger(0.1) }), {
                    target: item,
                    offset: ["start end", "end end", "start start", "end start"],
                    
                })
            })
      },[])
 
    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    const detalhes = ()=>{
      return(
        <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
            >
                <Minus />
                <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                Calories/day
                </div>
            </div>
            <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
            >
                <Plus />
                <span className="sr-only">Increase</span>
            </Button>
            </div>
            <div className="mt-3 h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                <Bar
                    dataKey="goal"
                    style={
                    {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                    } as React.CSSProperties
                    }
                />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
        <DrawerFooter>
            <Button>Solicitar orçamento</Button>
            <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
            </DrawerClose>
        </DrawerFooter>
        </div>
    </DrawerContent>
      )
    }

    const detalhesPedido = ()=>{
      return(
        <DrawerContent className='flex flex-col w-full ' >
        <div className="flex flex-col w-full ">
        <DrawerHeader className='flex flex-col w-full '>
            <DrawerTitle>Solicitar Produto </DrawerTitle>
            <DrawerDescription>Solicite os seus produtos</DrawerDescription>
        </DrawerHeader>
        <div className="flex w-full p-4 pb-0 overflow-y-scroll">
           
                 <Form {...form}>
                                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-1    p-4 justify-between w-full h-full ">
                                    
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
                                        <DrawerFooter>
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
    <div className="flex flex-col gap-4 p-2 w-full h-full">
        <div className='grid  grid-cols-2 w-full self-center'>
         <div className='w-full p-2'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='relative flex lg:h-[200px] xl:h-[500px] w-full rounded-2xl'>
            <Image
              src={"/assets/img4.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl w-full brightness-75'
              />
            </div>

            <div className='relative flex lg:h-[200px] xl:h-[500px] w-full rounded-2xl'>
            <Image
              src={"/assets/img7.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl brightness-75'
              />
            </div>

            <div className='relative flex h-[200px] w-full rounded-2xl'>
            <Image
              src={"/assets/img5.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full rounded-2xl brightness-75'
              />
            </div>

            <div className='relative flex h-[200px]  w-full rounded-2xl'>
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
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Desenvolvimento de Projetos Agrícolas e Estudos de Viabilidade 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16 rounded-l-3xl bg-gradient-to-r h- from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Formação em Práticas Agroflorestais 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Estudos Ecológicos e Ambientais 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Instalação e Montagem de Sistemas de Irrigação 
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
                        Soluções de Agricultura Digital  
                        </span>
                    </li>

                    <li className='flex gap-2 p-1 xl:p-4 xl:h-16  rounded-l-3xl bg-gradient-to-r  from-green-1 to-black-3 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-green-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                        <span className='text-white font-extrabold 2xl:text-[18px] md:text-[14px] text-[12px]'>
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

   

       

        <div className='flex flex-col w-full  py-8 items-center justify-center conteudo-produtos rounded-3xl'>

      
  <div className="flex flex-col w-full h-[500px] md:flex-row  justify-between items-center  bg-gradient-to-l from-green-1   rounded-l-xl conteudo-container">
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
                 <span className='text-[14px] font-semibold text-black-3 text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>ornecemos serviços de planejamento e gestão sustentável de florestas, incluindo o manejo de florestas nativas e plantadas e a restauração ecológica.</span>
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