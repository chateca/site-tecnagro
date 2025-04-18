"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthUser } from "@/lib/actions/atuth.actions";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const formSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(3, { message: "A senha deve ter no mínimo 3 caracteres" }),
});

function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const entrar = await AuthUser(values);
      if (entrar?.status === 400) {
        Swal.fire({
          title: "Erro ao efectuar o login",
          icon: "error",
          showConfirmButton: true,
          text:"Email ou palavra passe incorretos!"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Erro ao efectuar o login",
        icon: "error",
        showConfirmButton: true,
        text:"Algo deu errado por favor tente novamente, caso o erro continuar tente mais tarde."
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-green-3 rounded-2xl shadow-md p-6 md:p-8">
        <h2 className="text-2xl font-bold text-center text-green-3 mb-6">
          Login
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Digite seu email"
                      {...field}
                    />
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
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Digite sua senha"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-green-1 hover:bg-green-2 transition-colors"
            >
              Entrar
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
              className="w-full border-green-3 text-green-3 hover:bg-green-100"
            >
              Ir à página principal
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
