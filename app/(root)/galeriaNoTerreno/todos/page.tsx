import Fotos from "@/components/galeria/Fotos";
import Videos from "@/components/galeria/Videos";
import { BuscarActividadesActivasUser } from "@/lib/actions/actividades.actions";
import { notFound } from "next/navigation";
import React, { cache } from "react";

const getActiviti = cache(
  async ({ perPage, page }: { perPage: number; page: number }) => {
    const atividadess: { data: string; total: number } =
      await BuscarActividadesActivasUser({ perPage, page });
    const convertActi = JSON.parse(atividadess?.data);

    if(!atividadess) return notFound()
    return {
      activiti: convertActi,
      total: atividadess.total,
    };
  }
);

async function page({ searchParams }: { searchParams: { page: number } }) {
  let { page } = searchParams;
  page = !Number(page) || Number(page) < 1 ? 1 : Number(page);
  const perPage = 3;

  const getActivities = await getActiviti({ perPage, page });

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="container pt-28">
        <div className="flex lg:flex-row flex-col space-x-4 shadow-black-3 shadow-lg rounded-2xl px-8">
          <div className="flex flex-col p-16">
            <h1
              suppressHydrationWarning
              className=" atividade__item text-green-2 font-extrabold text-3xl "
            >
              Galeria de midia TecnAgro
            </h1>
            <span className="text-black-3 lg:text-2xl md:text-xl text-lg ">
              Seja parte dessa transformação. Tecnagro Conectando inovação ao
              campo para um futuro mais produtivo!
            </span>
          </div>

          <div>
            <Videos />
          </div>
        </div>
        <h3 className=" font-mono lg:text-3xl md:2xl text-lg text-green-2 font-bold my-12">
          Actividades Recentes:
        </h3>
        <Fotos
          page={Number(page)}
          perPage={perPage}
          atividades={JSON.stringify(getActivities?.activiti)}
          total={getActivities?.total || 0}
        />
      </div>
    </section>
  );
}

export default page;
