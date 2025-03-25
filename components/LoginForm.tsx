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
import { AuthUser} from '@/lib/actions/atuth.actions'


const formSchema = z.object({
    name:z.string(),
    email: z.string().email(),
    password:z.string().min(3)
  })

  



function LoginForm() {

     const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
              password: "",
              email: "",
              name:""
            
            },
          })
         
    
         async  function onSubmit(values: z.infer<typeof formSchema>) {
            try {
                 await AuthUser(values)
                 //await CreateUser(values)
                 
            } catch (error) {
              console.log('Algo deu errado',error)
            }
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
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Digitar senha</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Senha" {...field} />
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