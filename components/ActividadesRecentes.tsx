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
   


function ActividadesRecentes(){
    const [goal, setGoal] = React.useState(350)
    useEffect(()=>{
        
        document.querySelectorAll(".conteudo-actividades").forEach((item) => {
          scroll(animate(item, { opacity: [0, 1, 1, 0], y: [150, 0] }, { delay: stagger(0.1) }), {
              target: item,
              offset: ["start end", "end end", "start start", "end start"],
              
          })
      })
      },[])
 
    function onClick(adjustment: number) {
      setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full">
      <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-green-3 w-[50%] self-center conteudo-actividades">
          <h1 className="text-[28px] font-extrabold uppercase font-ibm-plex-serif text-white">Actividades Recentes</h1>
            <div className="w-full h-1 bg-green-2" />
        </div>
        <div className='grid grid-cols-4 max-sm:grid-cols-2 gap-4 p-12 flex-col w-full'>
          <div className="flex flex-col w-full  justify-between items-center bg-black-3 rounded-xl conteudo-actividades">
            <div className='relative flex w-full h-[400] max-sm:h-[200px]'>
              <Image
              src={"/assets/img20.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-2 '>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>Visita</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>TecnAgro oferece consultoria especializada para optimizar a produção agrícola e gerenciar propriedades rurais de forma eficiente. Nossa equipe de especialistas trabalha em estreita colaboração com os clientes, fornecendo orientação estratégica, análise de dados e recomendações personalizadas para melhorar a produtividade, reduzir os custos e aumentar a rentabilidade.</span>
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

          <div className="flex w-full flex-col  justify-between items-center bg-green-3 rounded-xl conteudo-actividades">
            <div className='relative flex w-full h-[400px] max-sm:h-[200px]'>
              <Image
              src={"/assets/img21.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>Consultoria</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>ornecemos serviços de planejamento e gestão sustentável de florestas, incluindo o manejo de florestas nativas e plantadas e a restauração ecológica.</span>
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

          <div className="flex w-full flex-col justify-between items-center bg-green-3 rounded-xl conteudo-actividades">
            <div className='relative flex w-full h-[400px] max-sm:h-[200px]'>
              <Image
              src={"/assets/img22.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>Treinamento </h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>ferecemos programas de capacitação e treinamento para agricultores, técnicos florestais e ambientalistas, promovendo a adoção de melhores práticas agrícolas e florestais com abordagens agroecológicas e o uso eficiente de tecnologias modernas.</span>
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
        

          <div className="flex w-full flex-col  justify-between items-center bg-green-1 rounded-xl conteudo-actividades">
          <div className='relative flex w-full h-[400px] max-sm:h-[200px]'>
              <Image
              src={"/assets/img23.jpg"}
              alt='consultoria'
              fill
              className='absolute object-cover size-full'
              />
            </div>
            <div className='flex flex-col w-full gap-2 p-4'>
                 <h1 className='text-white font-bold text-[18px] max-xl:text-[20px]'>Formação</h1>
                 <span className='text-[14px] font-semibold text-white text-wrap break-words truncate h-[100px] p-4  tracking-tighter'>nvestimos na capacitação dos profissionais do agronegócio por meio de programas de formação, treinamento e capacitação. Nossos programas abrangem diversas áreas, desde técnicas de cultivo até o uso eficiente de tecnologias agrícolas avançadas, permitindo que os agricultores adquiram conhecimentos actualizados e melhorem suas habilidades para obter melhores resultados.</span>
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
       
        </div>

          

        </div>
  )
}

export default ActividadesRecentes