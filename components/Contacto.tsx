"use client"
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
import contato from './../public/assets/img/contacto.jpg'
import { useState } from "react"

 
const formSchema = z.object({
    email: z.string().email(),
    nome: z.string().min(2, {message: "O nome tem que ter no minimo 2 letras.", }),
    sobreNome: z.string().min(2, {message: "O apelido tem que ter no minimo 2 letras.", }),
    assunto: z.string().min(2),
    mensagem:z.string().min(3).max(100)
  })


function Contacto() {
    const [isLoading, setIsLoading] = useState(true)
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nome: "",
          email: "",
          assunto:"",
          sobreNome:"",
          mensagem: "",
        },
      })
     

      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
       
      }
   
   
  return (

       
        

      <div className='flex flex-row  w-full h-full  mt-12 justify-between max-md:flex-col'>
         
        <div className="relative w-full min-h-full max-md:h-[40vh]">
        {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-1"></div>
        </div>
      )}
       <Image
       onLoad={()=>setIsLoading(false)}
       src={contato}
       alt='contacto'
       fill
       sizes='100%'
       priority={true}
       className='object-cover size-full brightness-50'
       />
        </div>
                <div className='flex flex-col  p-4  bg-white'>
                   
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col  w-full  px-4 space-y-2 gap-3 h-full">
                        <div className='flex gap-3'>
                        <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-green-2 text-sm font-bold'>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome" {...field} />
                            </FormControl>
                        
                            <FormMessage />
                            </FormItem>
                        )}
                        
                        />
                        <FormField
                        control={form.control}
                        name="sobreNome"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-green-2 text-sm font-bold'>Apelido</FormLabel>
                            <FormControl>
                                <Input placeholder="Apelido" {...field} />
                            </FormControl>
                        
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        </div>
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='text-green-2 text-sm font-bold'>Email</FormLabel>
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
                            <FormLabel className='text-green-2 text-sm font-bold'>Assunto</FormLabel>
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
                                <FormLabel className='text-green-2 text-sm font-bold'>Mensagem</FormLabel>
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
                        <Button className='flex py-1 bg-green-1 mt-3' type="submit">Enviar </Button>
                    </form>
                    </Form>
                </div>
     
      </div>
        
  )
}

export default Contacto
