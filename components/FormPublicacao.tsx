"use client";
import { useState } from "react";
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
import { Textarea } from "./ui/textarea";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import { CrearPublicacao } from "@/lib/actions/actividades.actions";

const formSchema = z.object({
  titulo: z.string().min(3),
  descricao: z.string().min(3),
});

function FormPublicacao() {
  const [imageUrl, setImageUrl] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titulo: "",
      descricao: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await CrearPublicacao({ ...values, imagem: imageUrl });
    } catch (error) {
      console.log("nao deu enviar dados publicação", error);
    }
  }

  return (
    <div className="w-full flex lg:flex-row flex-col justify-between gap-4 ">
      <div className="flex flex-col p-2 gap-4">
        <div className="relative flex lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] border-[1px] border-black-3 rounded-xl">
          <Image
            src={imageUrl ? `${imageUrl}` : "/assets/img9.png"}
            alt="Image Publicacao"
            fill
            unoptimized
            className="absolute object-cover"
          />
        </div>
        <UploadButton
          className="bg-green-3 flex h-14 text-sm py-1  rounded-xl"
          endpoint="imageUploader"
          onClientUploadComplete={(res: any) => {
            // Do something with the response
            setImageUrl(res[0].url);
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 md:w-[50%] w-full border-green-3 border-[1px] rounded-2xl p-4 "
        >
          <FormField
            control={form.control}
            name="titulo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input placeholder="Titulo da publicação" {...field} />
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
                <FormLabel>Produtos a Solicitar</FormLabel>
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

          <Button className="flex  bg-green-1 mt-5" type="submit">
            Criar Publicação
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default FormPublicacao;
