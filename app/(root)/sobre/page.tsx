"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col w-full bg-white pb-8">
      <div className="relative  items-center justify-center flex flex-col w-full min-h-screen">
        <Image
          src={"/assets/img/banner3.jpg"}
          alt="banner3"
          fill
          sizes="100%"
          className="absolute  object-cover min-h-screen w-full brightness-50 after:bg-gradient-to-t after:from-white after:to-transparent "
        />
        <div className="container">
          <div className="relative w-[60%] flex flex-col text-center items-center justify-center mt-18">
            <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-sans font-bold leading-normal">
              Cresça com a Tecnologia, Inovação e Resultados da{" "}
              <span className="text-green-2 lg:text-4xl md:text-2xl text-xl">
                Tecn
              </span>
              agro
            </h1>
          </div>
          <div className="absolute w-96 top-0 flex flex-col bg-[#000]/80 p-12 right-0 h-full items-center justify-center ">
            <h3 className="text-gray-200 lg:text-xl md:text-lg text-base  font-serif font-black leading-normal">
              Aspiramos a liderar os estudos ecológicos, a gestão de sistemas
              florestais e a avaliação ambiental em Angola.
            </h3>
            <span className="text-gray-300 text-sm font-mono ">
              Na Tecnagro, acreditamos que o sucesso no agronegócio depende de
              parcerias estratégicas e soluções inteligentes. Nossa experiencia,
              aliada à inovação e tecnologia, impulsiona sua produção, reduz
              custos e maximiza seus lucros.
            </span>
          <div className="flex flex-col gap-2 sm:flex-row mt-3">
            <Link href={"/solicitar-produto"} className="btn">
              <span className="text-white flex">
                Solicitar produto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </span>
            </Link>
            <Link href={"/solicitar-produto"} className="btn btn_outline">
              <span className="text-white flex">
                Solicitar serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
       </div>
      </div>

      <div className="container mt-14 space-y-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-2">
          <div className="flex flex-col text-center rounded-2xl p-4 shadow-black-3 shadow-lg">
            <h2 className="text-green-2 font-mono md:text-4xl">Missão</h2>
            <span className="text-gray-500 font-serif text-sm">
              Nossa missão é oferecer serviços e soluções de alto valor agregado
              que atendam às necessidades específicas dos sistemas
              agroflorestais e ambientais, contribuindo para o crescimento
              sustentável e a competitividade do setor. Fornecemos consultoria
              especializada, tecnologia e conhecimento atualizado para auxiliar
              agricultores e demais agentes do setor a superar desafios,
              implementar as melhores práticas e alcançar resultados de
              excelência em suas operações, com foco em diversas áreas,
              incluindo estudos ecológicos, florestais e ambientais.
            </span>
          </div>

          <div className="flex flex-col text-center rounded-2xl shadow-black-3 shadow-lg  p-4">
            <h2 className="text-green-2 font-mono md:text-4xl">Visão</h2>
            <span className="text-gray-500 font-serif text-sm">
              A TecnAgro busca estabelecer parcerias estratégicas que otimizem o
              uso dos recursos e fatores de produção. Nossa visão é ser
              referência na prestação de serviços de consultoria agroflorestal e
              ambiental, inovação agrícola e tecnologia, oferecendo soluções
              inteligentes e inovadoras que maximizem a produtividade, a
              eficiência e a rentabilidade dos negócios agrícolas de nossos
              clientes e parceiros. Aspiramos a liderar os estudos ecológicos, a
              gestão de sistemas florestais e a avaliação ambiental em Angola.
            </span>
          </div>

          <div className="flex flex-col text-center lg:col-span-1 md:col-span-3 rounded-2xl shadow-black-3 shadow-lg  p-4">
            <h2 className="text-green-2 font-mono md:text-4xl">
              Diferenciação
            </h2>
            <span className="text-gray-500 font-serif text-sm">
              A TecnAgro se destaca pela sua ampla atuação nos setores de
              agronegócio, ecologia, sistemas florestais e tecnologia agrícola.
              Além de realizar estudos específicos sobre a implementação de
              inovações e tecnologias agrícolas, contamos com uma equipe de
              consultores altamente qualificados, com vasta experiência técnica
              na instalação de sistemas de irrigação e no uso de equipamentos
              especializados.
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <h2 className="text-green-3 font-mono lg:text-6xl md:text-4xl text-2xl font-bold">
            Quem somos?
          </h2>
          <span className="text-gray-500 lg:text-xl md:text-lg text-base font-serif">
            A TecnAgro é uma empresa inovadora de consultoria agrícola
            especializada na prestação de serviços de consultoria agroflorestal
            e ambiental, incluindo estudos ecológicos, sistemas florestais e
            ambientais. Fundada em 2020, a TecnAgro consolidou uma forte
            presença no mercado angolano, construindo uma reputação de
            excelência e confiabilidade.
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-8 items-center justify-center">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl text-green-2  font-bold font-mono">
              Como trabalhamos?
            </h1>
            <p className="lg:text-xl md:text-lg text-base text-gray-500">
              Trabalhamos com base em princípios de ética, inovação e
              responsabilidade socioambiental, a TecnAgro busca estabelecer
              parcerias sólidas e duradouras com seus clientes, parceiros e
              demais stakeholders, trabalhando juntos para impulsionar o
              agronegócio rumo a um futuro próspero, sustentável e
              tecnologicamente avançado.
            </p>
          </div>
          <div>
            <h1 className="text-3xl text-green-2 text-center font-bold font-mono"></h1>
            <p className="lg:text-xl md:text-lg text-base text-gray-500">
              Acreditamos que os sistemas agroflorestais do futuro serão
              impulsionados pela integração do conhecimento tradicional com
              tecnologias de ponta, e nos comprometemos a ser agentes
              facilitadores desse progresso, promovendo um futuro mais
              sustentável, resiliente e conectado.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <h1 className="lg:text-6xl md:text-4xl text-2xl text-green-3 font-bold font-mono">
            Quais produtos e serviços a Tecnagro oferece?
          </h1>
          <h3 className="lg:text-2xl md:text-xl text-lg  font-serif font-bold text-green-2">
            Entre os serviços oferecidos, destacamos:
          </h3>

          <div className="flex gap-4 items-center justify-between">
            <div className="relative md:h-96 h-80   w-full">
              <Image
                src={"/assets/img/semente.jpg"}
                alt="Sementes"
                fill
                sizes="100%"
                className="object-cover rounded-3xl brightness-50"
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="lg:text-4xl md:text-2xl text-xl font-serif font-bold text-green-3 text-end">
                Comercialização de Sementes e Produção de Mudas
              </h2>
              <span className="text-gray-500 font-mono text-center">
                Oferta de sementes de espécies nativas e florestais, além da
                produção de mudas adaptadas ao bioma angolano, promovendo a
                conservação da biodiversidade e o reflorestamento sustentável
              </span>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 justify-between">
            <div className="flex flex-col">
              <ul className="list-none flex flex-col gap-4">
                <li className=" bg-green-2/30 rounded-3xl p-4">
                  <span className="text-gray-500  text-sm font-mono font-bold italic">
                    Desenvolvimento de Projetos Agrícolas e Estudos de
                    Viabilidade
                  </span>
                </li>
                <li className=" bg-green-2/30 rounded-3xl p-4">
                  <span className="text-gray-500  text-sm  font-mono font-bold italic">
                    Formação em Práticas Agroflorestais
                  </span>
                </li>
                <li className=" bg-green-2/30 rounded-3xl p-4">
                  <span className="text-gray-500  text-sm  font-mono font-bold italic">
                    Estudos Ecológicos e Ambientais
                  </span>
                </li>
                <li className=" bg-green-2/30 rounded-3xl p-4">
                  <span className="text-gray-500  text-sm  font-mono font-bold italic">
                    Instalação e Montagem de Sistemas de Irrigação
                  </span>
                </li>
                <li className=" bg-green-2/30 rounded-3xl p-4">
                  <span className="text-gray-500  text-sm  font-mono font-bold italic">
                    Soluções de Agricultura Digital
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 place-content-center gap-4 w-full">
              <div className="relative h-40 w-full">
                <Image
                  src={"/assets/img/solo.jpg"}
                  alt="Sementes"
                  fill
                  sizes="100%"
                  className="object-cover rounded-3xl brightness-50"
                />
              </div>
              <div className="relative h-40 w-full">
                <Image
                  src={"/assets/img/irrigacao.jpg"}
                  alt="Sementes"
                  fill
                  sizes="100%"
                  className="object-cover rounded-3xl brightness-50"
                />
              </div>

              <div className="relative  col-span-2 h-40 w-full">
                <Image
                  src={"/assets/img/tecnologia.jpg"}
                  alt="Sementes"
                  fill
                  sizes="100%"
                  className="object-cover rounded-3xl brightness-50"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <Link className="btn" href={"/produtos-servicos/todos"}>
              <span className="text-lg font-serif text-white">
                Quero saber mais sobre os produtos e serviços
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/assets/img/crescer.png"}
            alt="Sementes"
            width={120}
            height={120}
            sizes="100px"
            className="object-cover rounded-full brightness-50"
          />
          <p className="font-bold text-gray-500 uppercase font-serif">
            Jusntos plantamos um futuro prospero
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
