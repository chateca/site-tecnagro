"use client"
import * as React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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
import Image from 'next/image';

 
const formSchema = z.object({
    email: z.string().email(),
    nome: z.string().min(2, {message: "O nome tem que ter no minimo 2 letras.", }),
    assunto: z.string().min(2),
    mensagem:z.string().min(3).max(100)
  })


function Contacto() {


   
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nome: "",
          email: "",
          assunto:"",
          mensagem: "",
        },
      })
     

      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
       
      }
   
   
  return (
    <div className="flex flex-col gap-2 p-2 w-full  conteudo-actividades mt-10">
    
    <h1 className='text-center text-green-2 text-[28px] uppercase font-ibm-plex-serif font-extrabold'>Contacto</h1>
      <div className='flex flex-row  w-full h-full   rounded-2xl justify-between max-sm:flex-col bg-gradient-to-t from-green-2 to-green-3'>
        <div className="flex w-full  bg-[url('/assets/img9.png')] bg-cover bg-center rounded-l-xl">
       
         <div className='flex flex-col justify-end p-8 gap-4'>
            <div className='flex gap-4 w-full items-center '>
                <div>
                <Image
                src={"/icons/whatsapp.svg"}
                alt='whatsapp'
                width={45}
                height={45}
                className='rounded-full bg-green-2'
                />
                </div>
                <span className='text-[18px] max-xl:text-[14px] text-gray-300'>Whatsap</span>
            </div>

            <div className='flex gap-4 w-full items-center '>
                <div>

                <Image
                src={"/icons/x.svg"}
                alt='whatsapp'
                width={45}
                height={45}
                className='rounded-full bg-green-2'
                />
                </div>
                <span className='text-[18px] max-xl:text-[14px] text-gray-300'>Rede-X</span>
            </div>

            <div className='flex gap-4 w-full items-center '>
                <div>
                <Image
                src={"/icons/facebook.svg"}
                alt='whatsapp'
                width={45}
                height={45}
                className='rounded-full bg-green-2'
                />
                </div>
                <span className='text-[18px] max-xl:text-[14px] text-gray-300'>Facebook</span>
            </div>

            <div className='flex gap-4 w-full items-center '>
                <div>
                <Image
                src={"/icons/phone.svg"}
                alt='whatsapp'
                width={45}
                height={45}
                className='rounded-full bg-green-2'
                />
                </div>
                <span className='text-[18px] max-xl:text-[14px] text-gray-300'>+244 999999999 / +244 222222222</span>
            </div>

         </div>
        </div>
                <div className='flex flex-col w-full h-full  p-4 rounded-r-xl'>
                    <h1 className='text-center text-green-2 text-[18px] font-extrabold uppercase'>Envia-nos um email</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col  w-full border-green-3 border-[1px] rounded-2xl p-4 gap-1 h-full">
                        <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-green-2 text-[14px] font-bold'>Seu nome</FormLabel>
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
                            <FormLabel className='text-green-2 text-[14px] font-bold'>Seu email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="assunto"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-green-2 text-[14px] font-bold'>Assunto</FormLabel>
                            <FormControl>
                                <Input placeholder="Assunto" {...field} />
                            </FormControl>
                           
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                            <FormField
                            control={form.control}
                            name="mensagem"
                            render={({ field }) => (
                                <FormItem className='h-full'>
                                <FormLabel className='text-green-2 text-[14px] font-bold'>Mensagem</FormLabel>
                                <FormControl>
                                    <Textarea
                                    placeholder="Digite a sua mensagem "
                                    className=" flex h-[200px] max-xl:h-full"
                                    {...field}
                                    />
                                </FormControl>
                               
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        <Button className='flex py-2 bg-green-1 mt-3' type="submit">Enviar </Button>
                    </form>
                    </Form>
                </div>
     
      </div>
        

      </div>
  )
}

export default Contacto
