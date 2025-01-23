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
    useEffect(()=>{
        document.querySelectorAll(".conteudo-container").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], x: [100, 0] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
          })
      })
      },[])
 
    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
   
  return (
    <div className="flex gap-4 p-2 w-full h-full">
        <div className='grid md:grid-flow-col max-sm:grid-cols-1 md:grid-rows-3 gap-4 max-sm:gap-2 p-12 max-sm:p-2 flex-col w-full self-center'>
          <div className="md:row-span-2  flex flex-col max-sm:flex-row w-full  justify-between items-center bg-black-3 rounded-xl conteudo-container">
            <div className='relative flex w-full h-[400] max-sm:h-[150px] max-sm:hidden'>
              <Image
              src={"/assets/img2.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-2 '>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px] max-sm:text-[14px]'>Consultoria e gestão</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>TecnAgro oferece consultoria especializada para optimizar a produção agrícola e gerenciar propriedades rurais de forma eficiente. Nossa equipe de especialistas trabalha em estreita colaboração com os clientes, fornecendo orientação estratégica, análise de dados e recomendações personalizadas para melhorar a produtividade, reduzir os custos e aumentar a rentabilidade.</span>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Saber mais</Button>
                </DrawerTrigger>
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
            </Drawer>
                  </div>
            </div>

            <div className='hidden relative max-sm:flex  h-full w-[150px]'>
              <Image
              src={"/assets/img2.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
           
          </div>

          <div className="md:col-span-2 md:row-span-1 flex w-full  justify-between items-center bg-green-3 rounded-xl conteudo-container">
            <div className='relative flex w-[400px] max-sm:w-[150px] h-full'>
              <Image
              src={"/assets/img4.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px] max-sm:text-[14px]'>Consultoria em Sistemas Florestais</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>ornecemos serviços de planejamento e gestão sustentável de florestas, incluindo o manejo de florestas nativas e plantadas e a restauração ecológica.</span>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Saber mais</Button>
                </DrawerTrigger>
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
            </Drawer>
                  </div>
            </div>
           
          </div>

          <div className=" md:row-span-1  flex w-full  justify-between items-center bg-green-3 rounded-xl conteudo-container">
            <div className=' max-sm:hidden relative flex w-[400px] max-sm:w-[150] h-full'>
              <Image
              src={"/assets/img5.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px] max-sm:text-[14px]'>Treinamento em Práticas Agroflorestais</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>ferecemos programas de capacitação e treinamento para agricultores, técnicos florestais e ambientalistas, promovendo a adoção de melhores práticas agrícolas e florestais com abordagens agroecológicas e o uso eficiente de tecnologias modernas.</span>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Saber mais</Button>
                </DrawerTrigger>
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
            </Drawer>
                  </div>
            </div>

            <div className='hidden relative max-sm:flex w-[400px] max-sm:w-[150] h-full'>
              <Image
              src={"/assets/img5.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
           
          </div>
        

          <div className=" md:row-span-1 flex w-full  justify-between items-center bg-green-3 rounded-xl conteudo-container">
          <div className='hidden relative max-sm:flex w-[300px] max-sm:w-[150px] h-full'>
              <Image
              src={"/assets/img6.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px] max-sm:text-[14px]'>Formação, Treinamento e Capacitação Agrícola</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] max-sm:h-[50px] p-4  tracking-tighter'>nvestimos na capacitação dos profissionais do agronegócio por meio de programas de formação, treinamento e capacitação. Nossos programas abrangem diversas áreas, desde técnicas de cultivo até o uso eficiente de tecnologias agrícolas avançadas, permitindo que os agricultores adquiram conhecimentos actualizados e melhorem suas habilidades para obter melhores resultados.</span>
                  <div className='flex w-full '>
                  <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Saber mais</Button>
                </DrawerTrigger>
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
            </Drawer>
                  </div>
            </div>

            <div className='max-sm:hidden relative flex w-[300px] max-sm:w-[150px] h-full'>
              <Image
              src={"/assets/img6.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
           
          </div>
        </div>

          

        </div>
  )
}

export default Consultorias