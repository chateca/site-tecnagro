'use client'

import dynamic from "next/dynamic"
import LoadingComponentImage from "./LoadingComponentImage"

const  BannerComponent  = dynamic(()=>import( "./BannerComponent"),{ loading:()=><LoadingComponentImage/>})


function BannerShow() {

  return (
  <BannerComponent/>
  )
}

export default BannerShow
