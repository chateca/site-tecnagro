import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';




const inter = Inter({subsets:['latin'], variable:'--font-inter'});
const  ibmPlaxSerif = IBM_Plex_Serif({
  subsets:['latin'], 
  weight:['400', '700'], 
  variable: '--font-ibm-plex-safir'
}) 

export const metadata: Metadata = {
  title: "TecnAgro",
  description: "Consultoria e prestação de serviços",
  icons:{
    icon:"/assets/img/logo.png"
    
  }
};



export default async function RootLayout({
  children,
}:{
  children: React.ReactNode
 
}) {
  return (
    <html lang='en'  className={`${inter.variable} ${ibmPlaxSerif.variable}`}  >
      <body 
     
      > 
        {children}
     
      </body>
    </html>
  );
}
