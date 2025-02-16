"use client"
import * as React from 'react'

import { useEffect } from "react";
import Comentario from './Comentario';
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
import { zodResolver } from '@hookform/resolvers/zod';
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
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { BuscarComentariosPaginaInicia, CriarComentario } from '@/lib/actions/comentarioAc.actions';
import Swal from 'sweetalert2';


const formSchema = z.object({
    nome: z.string().min(3),
      descricao:z.string().min(3)
  })

type Dados = {
  _id:string,
  nome:string, 
  descricao:string,
  dataRegistro:string
}  

function Comentarios() {
  const [comentarios, setComentarios] = React.useState<Array<Dados>>()
    const form = useForm<z.infer<typeof formSchema>>({
              resolver: zodResolver(formSchema),
              defaultValues: {
                nome: "",
                descricao:""
              
              },
            })
           
      
            async function onSubmit(values: z.infer<typeof formSchema>) {
              try {
               
               await CriarComentario(values)
               Swal.fire({
                  title: "Comentario enviado com sucesso",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 2000
                });
              } catch (error) {
                Swal.fire({
                  title: "Falha ao enviar comentario porfavor tente mais tarde",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 2000
                });
                console.log(" erro ao enviar comentario publicação", error)
              }
            }
            

   
  useEffect(()=>{
        

      async function getComentarios(){
        try {
          const dados =  await BuscarComentariosPaginaInicia()
          const convertDado = JSON.parse(dados)
        return   setComentarios(convertDado)
        } catch (error) {
         return console.log(error)
        }
        
      } 

      getComentarios()

      },[])
   
   
   
  return (
    <div className="flex flex-col gap-4 p-2 w-full h-full conteudo-actividades mt-10">
    
    <h1 className='text-center text-white text-[28px] uppercase font-ibm-plex-serif font-extrabold'>Comentários</h1>
    <div className='w-full flex items-center justify-center'>
    <Drawer>
                <DrawerTrigger asChild>
                    <Button className='bg-green-2' variant="outline">Diga-nos alguma coisa!</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="flex w-full flex-col items-center justify-center">
                    <DrawerHeader>
                        <DrawerTitle>Comentario</DrawerTitle>
                        <DrawerDescription>
                          Deixe uma sujestão, critica ou reclamação !
                        </DrawerDescription>
                    </DrawerHeader>
                    <div className="flex w-full items-center justify-center  p-4 pb-0">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col space-y-1 w-[50%] border-green-3 border-[1px] rounded-2xl p-4 justify-between">
                      
                        <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu nome" {...field} />
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
                                <FormLabel>Comentario</FormLabel>
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

                        <Button className='flex  bg-green-1' type="submit">Comentar</Button>
                    </form>
                    </Form>
                    </div>
                    <DrawerFooter>
                        
                        <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                    </div>
                </DrawerContent>
    </Drawer>
    </div>
      <div className='grid md:grid-cols-4 grid-cols-2  gap-4 p-8 flex-wrap  w-full justify-between  rounded-2xl'>
    
      {comentarios?.map((item)=>(
          <Comentario key={item._id}
          nome={item.nome}
          descricao = {item.descricao}
          data={item.dataRegistro}
          />
      ))}
     
      </div>
        

      </div>
  )
}

export default Comentarios
