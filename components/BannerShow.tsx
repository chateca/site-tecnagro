'use client'
import dynamic from 'next/dynamic'
import React from 'react'
const BannerComponent  = dynamic(()=> import('@/components/BannerComponent'), {ssr:false})

function BannerShow() {

  return (
  <BannerComponent/>
  )
}

export default BannerShow
