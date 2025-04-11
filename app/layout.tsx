import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';


import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';




const inter = Inter({subsets:['latin'], variable:'--font-inter', preload:false});
const  ibmPlaxSerif = IBM_Plex_Serif({
  subsets:['latin'], 
  weight:['400', '700'], 
  variable: '--font-ibm-plex-safir', 
  preload:false
}) 

export const metadata: Metadata = {
  title: "TecnAgro",
  description: "Consultoria e prestação de serviços",
  icons:{
    icon:{
     url: '/assets/img/logo.png', 
     sizes:'32x32',
     type:'image/png', 
     rel:'icon'
  },
    
    
  }
};



export default async function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode
 
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${ibmPlaxSerif.variable}`} >
      <body> 
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
