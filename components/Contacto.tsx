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
    <div id="contactos" data-aos="zoom-in-up" className="flex flex-col-reverse lg:flex-row mt-12 w-full overflow-hidden  shadow-lg bg-white">

 <div className="relative w-full lg:w-1/2 h-[300px] lg:h-auto">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-1"></div>
        </div>
      )}
      <Image
        onLoad={() => setIsLoading(false)}
        src={contato}
        alt="contacto"
        fill
        sizes="100vw"
        className="object-cover brightness-50"
        loading="lazy"
        placeholder="blur"
        blurDataURL="contato"
      />
    </div>
    <div className="flex flex-col justify-center p-8 w-full lg:w-1/2">
      <h2 className="text-2xl font-bold text-green-2 mb-6">Entre em contacto</h2>
  
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-green-2 text-sm font-semibold">Nome</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel className="text-green-2 text-sm font-semibold">Apelido</FormLabel>
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
                <FormLabel className="text-green-2 text-sm font-semibold">Email</FormLabel>
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
                <FormLabel className="text-green-2 text-sm font-semibold">Assunto</FormLabel>
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
              <FormItem>
                <FormLabel className="text-green-2 text-sm font-semibold">Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Digite sua mensagem..."
                    className="min-h-[150px] resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <Button type="submit" className="bg-green-1 hover:bg-green-2 transition-all text-white mt-4">
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  
   
  </div>
  )
}

export default Contacto
