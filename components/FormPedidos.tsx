"use client"
import {useState} from 'react'
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
import { Button } from './ui/button'


const formSchema = z.object({
    nome:z.string().min(3), 
    telefone:z.string().min(9).max(17),
    email: z.string().email(),
    descricao:z.string().min(3),
    endereco:z.string().min(3).max(50),
  })

  




function FormPedidos() {

    const [enviando , setEnviando] = useState(false)


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

  return (
    <div className="flex w-full p-4 pb-2 bg-green-2/60 rounded-tl-3xl rounded-br-full">
           
    <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between w-full h-full ">
                       <div className='flex gap-3 flex-col'>
                           <div className='flex gap-2'>

                         <FormField
                         control={form.control}
                         name="nome"
                         render={({ field }) => (
                             <FormItem>
                             <FormLabel>Nome</FormLabel>
                             <FormControl>
                                 <Input className='border-green-950 border-2' placeholder="Nome" {...field} />
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
                             <FormLabel>Email</FormLabel>
                             <FormControl>
                                 <Input className='border-green-950 border-2' placeholder="Email" {...field} />
                             </FormControl>
                            
                             <FormMessage />
                             </FormItem>
                         )}
                         />
                           </div>
                           <div className='flex gap-2'>

                          <FormField
                         control={form.control}
                         name="telefone"
                         render={({ field }) => (
                             <FormItem>
                             <FormLabel>Telefone</FormLabel>
                             <FormControl>
                                 <Input className='border-green-950 border-2' placeholder="+244 999 999 999" {...field} />
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
                                 <Input className='border-green-950 border-2' placeholder="endereco inclui(Pais, Provincia, Municipio e Bairro)" {...field} />
                             </FormControl>
                            
                             <FormMessage />
                             </FormItem>
                         )}
                         />
                           </div>
                          <FormField
                                 control={form.control}
                                 name="descricao"
                                 render={({ field }) => (
                                     <FormItem>
                                     <FormLabel>Produtos a Solicitar</FormLabel>
                                     <FormControl>
                                         <Textarea
                                         placeholder="Faça o seu pedido"
                                         className="flex full h-96 border-green-950 border-2 "
                                         {...field}
                                         />
                                     </FormControl>
                                                        
                                     <FormMessage />
                                     </FormItem>
                             )}
                             />

                           </div>
                       
                         <Button  type='submit'  className={`btn mt-4 ${enviando ? 'disabled:opacity-75':""}`}>{enviando ? 'Enviando pedido':'Solicitar Produto'}</Button>
                       

                     </form>
   </Form>


</div>
  )
}

export default FormPedidos