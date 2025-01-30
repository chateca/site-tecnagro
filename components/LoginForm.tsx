"use client"
import React from 'react'
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


const formSchema = z.object({
    email: z.string().email(),
  
    senha:z.string().min(3)
  })

  



function LoginForm() {

     const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
              senha: "",
              email: "",
            
            },
          })
         
    
          function onSubmit(values: z.infer<typeof formSchema>) {
            
            console.log(values)
          }
       
  return (
  
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col space-y-1 w-[50%] border-green-3 border-[1px] rounded-2xl p-4 justify-between">
                      
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Seu email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                          
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Digitar senha</FormLabel>
                            <FormControl>
                                <Input placeholder="Senha" {...field} />
                            </FormControl>
                           
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button className='flex  bg-green-1' type="submit">Entrar</Button>
                    </form>
                    </Form>
  
   
  )
}

export default LoginForm