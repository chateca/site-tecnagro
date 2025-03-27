"use client"
import React, { useState } from 'react'
import SolicitacoesRecentes from './SolicitacoesRecentes'

interface Props {
    items:string
}
type Dados = {
    pedidosRecentes:[], 
    naoAtivos:[], 
    negados:[] ,
    aceites:[] ,
    pendentes:[],

}

function Solicitacoes({items}:Props) {
    const dados:Dados = JSON.parse(items)
    const [menuNavegacao, setMenunavegacao] = useState("")

    const todas = ()=>{
        return(
            <SolicitacoesRecentes
            dados = {JSON.stringify(dados?.pedidosRecentes)}
            />
        )
    }

    const resolvidas = ()=>{
        return(
            <SolicitacoesRecentes
            dados = {JSON.stringify(dados?.aceites)}
            />
        )
    }

    const pendentes = ()=>{
        return(
            <SolicitacoesRecentes
            dados = {JSON.stringify(dados?.pendentes)}
            />
        )
    }

    const regeitadas = ()=>{
        return(
            <SolicitacoesRecentes
            dados = {JSON.stringify(dados?.negados)}
            />
        )
    }
  return (
    <>
    <div className='w-full p-2 flex justify-between gap-2 mt-4'>
            <button onClick={()=>setMenunavegacao('todas')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-black-3/30 p-4 font-semibold justify-center uppercase'>Todas</button>
            <button onClick={()=>setMenunavegacao('resolvidas')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-green-1/60 p-4 font-semibold justify-center uppercase'>Resolvidas</button>
            <button onClick={()=>setMenunavegacao('pendentes')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-yellow-400/30 p-4 font-semibold justify-center uppercase'>Pendentes</button>
            <button onClick={()=>setMenunavegacao('regeitadas')} className='flex w-full text-[14px] transition hover:scale-[1.02] duration-75 bg-red-500/30 p-4 font-semibold justify-center uppercase'>Rejeitadas</button>
        </div>
        <div className='flex flex-coll w-full '>
            {
                menuNavegacao === "todas" ?
                todas()
                : menuNavegacao === "resolvidas" ?
                resolvidas()
                : menuNavegacao === "pendentes" ?
                pendentes() 
                 : menuNavegacao === "regeitadas" ?
                regeitadas() :
                <SolicitacoesRecentes
                dados = {JSON.stringify(dados?.pedidosRecentes)}
                />
            }
       

        </div>
    </>
  )
}

export default Solicitacoes