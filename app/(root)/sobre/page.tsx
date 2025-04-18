"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sementes from "./../../../public/assets/img/semente.jpg"
import solo from "./../../../public/assets/img/solo.jpg"
import irrigacao from "./../../../public/assets/img/irrigacao.jpg"
import tecnologia from "./../../../public/assets/img/tecnologia.jpg"
import crescer from "./../../../public/assets/img/crescer.png"
import { Sprout, Eye, Handshake } from 'lucide-react'

const items = [
  {
    title: 'Missão',
    icon: <Sprout className="w-10 h-10 text-green-700" />,
    description:`Nossa missão é oferecer serviços e soluções de alto valor agregado
              que atendam às necessidades específicas dos sistemas
              agroflorestais e ambientais, contribuindo para o crescimento
              sustentável e a competitividade do setor. Fornecemos consultoria
              especializada, tecnologia e conhecimento atualizado para auxiliar
              agricultores e demais agentes do setor a superar desafios,
              implementar as melhores práticas e alcançar resultados de
              excelência em suas operações, com foco em diversas áreas,
              incluindo estudos ecológicos, florestais e ambientais.`,
  },
  {
    title: 'Visão',
    icon: <Eye className="w-10 h-10 text-green-700" />,
    description:
                  ` A TecnAgro busca estabelecer parcerias estratégicas que otimizem o
              uso dos recursos e fatores de produção. Nossa visão é ser
              referência na prestação de serviços de consultoria agroflorestal e
              ambiental, inovação agrícola e tecnologia, oferecendo soluções
              inteligentes e inovadoras que maximizem a produtividade, a
              eficiência e a rentabilidade dos negócios agrícolas de nossos
              clientes e parceiros. Aspiramos a liderar os estudos ecológicos, a
              gestão de sistemas florestais e a avaliação ambiental em Angola.`,
  },
  {
    title: 'Diferenciação',
    icon: <Handshake className="w-10 h-10 text-green-700" />,
    description:
      `
A TecnAgro se destaca pela sua ampla atuação nos setores de agronegócio, ecologia, sistemas florestais e tecnologia agrícola. Além de realizar estudos específicos sobre a implementação de inovações e tecnologias agrícolas, contamos com uma equipe de consultores altamente qualificados, com vasta experiência técnica na instalação de sistemas de irrigação e no uso de equipamentos especializados`,
  },
]

function page() {
  return (
    <div className="flex flex-col w-full bg-white pb-8">
    
  
    <section className="py-20" id="quem-somos">
      <div className="container px-4 mx-auto text-center">
      <div
        className="flex flex-col items-center justify-center pb-6 space-y-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-green-3 font-mono text-2xl sm:text-4xl font-bold">
          Quem somos?
        </h2>
        <p className="text-gray-600 sm:text-lg max-w-4xl">
        A TecnAgro é uma empresa inovadora de consultoria agrícola
            especializada na prestação de serviços de consultoria agroflorestal
            e ambiental, incluindo estudos ecológicos, sistemas florestais e
            ambientais. Fundada em 2020, a TecnAgro consolidou uma forte
            presença no mercado angolano, construindo uma reputação de
            excelência e confiabilidade.
        </p>
      </div>
  
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    <section className="container space-y-20 px-4 mt-10">
    
  
      <div className="flex flex-col md:flex-row items-center justify-between gap-10" data-aos="fade-up">
        <div className="space-y-4 max-w-xl">
          <h3 className="text-green-2 text-xl sm:text-2xl font-bold">
            Como trabalhamos?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
          Trabalhamos com base em princípios de ética, inovação e
              responsabilidade socioambiental, a TecnAgro busca estabelecer
              parcerias sólidas e duradouras com seus clientes, parceiros e
              demais stakeholders, trabalhando juntos para impulsionar o
              agronegócio rumo a um futuro próspero, sustentável e
              tecnologicamente avançado.
          </p>
        </div>
        <div className="space-y-4 max-w-xl">
          <p className="text-gray-600 text-sm sm:text-base">
          Acreditamos que os sistemas agroflorestais do futuro serão
              impulsionados pela integração do conhecimento tradicional com
              tecnologias de ponta, e nos comprometemos a ser agentes
              facilitadores desse progresso, promovendo um futuro mais
              sustentável, resiliente e conectado.
          </p>
        </div>
      </div>
  
      <div className="space-y-8" data-aos="fade-up">
        <h2 className="text-green-3 font-bold font-mono text-2xl sm:text-4xl">
          Quais produtos e serviços a Tecnagro oferece?
        </h2>
        <h3 className="text-green-2 text-lg sm:text-2xl font-bold font-serif">
          Entre os serviços oferecidos, destacamos:
        </h3>
  
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative h-80 rounded-3xl overflow-hidden">
            <Image
              src={sementes}
              alt="Sementes"
              fill
              sizes="100px"
              className="object-cover brightness-50"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-green-3 font-bold text-xl sm:text-3xl">
            Comercialização de Sementes e Produção de Mudas
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
            Oferta de sementes de espécies nativas e florestais, além da
                produção de mudas adaptadas ao bioma angolano, promovendo a
                conservação da biodiversidade e o reflorestamento sustentável
            </p>
          </div>
        </div>
  
        <div className="flex flex-col lg:flex-row gap-8" data-aos="fade-up">
          <ul className="flex-1 space-y-4">
            {[
              "Desenvolvimento de Projetos Agrícolas",
              "Formação em Práticas Agroflorestais",
              "Estudos Ecológicos",
              "Instalação de Sistemas de Irrigação",
              "Soluções de Agricultura Digital",
            ].map((service, i) => (
              <li key={i} className="bg-green-2/30 p-4 rounded-2xl italic text-sm font-semibold text-gray-700">
                {service}
              </li>
            ))}
          </ul>
  
          <div className="grid grid-cols-2 gap-4 flex-1">
            {[solo, irrigacao, tecnologia].map((img, i) => (
              <div
                key={i}
                className={`relative h-40 w-full col-span-${i === 2 ? "2" : "1"} rounded-3xl overflow-hidden`}
              >
                <Image
                  src={img}
                  alt="Imagem"
                  fill
                  sizes="100px"
                  className="object-cover brightness-50"
                />
              </div>
            ))}
          </div>
        </div>
  
        <div className="flex justify-center">
          <Link href="/produtos-servicos/todos" className="btn">
            Quero saber mais sobre os produtos e serviços
          </Link>
        </div>
      </div>
  
      <div className="flex flex-col items-center justify-center space-y-4 pt-16" data-aos="zoom-in">
        <Image
          src={crescer}
          alt="Crescimento"
          width={120}
          height={120}
          style={{
            width:"120px",
            height:"120px"
          }}
          className="rounded-full object-cover brightness-50"
        />
        <p className="text-gray-600 font-serif uppercase text-sm sm:text-base font-bold">
          Juntos plantamos um futuro próspero
        </p>
      </div>
    </section>
  </div>
  
  );
}

export default page;
