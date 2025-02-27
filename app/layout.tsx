import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";


import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import Script from "next/script";



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

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'nl' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en-US' | 'nl' }>
}>) {
  return (
    <html lang={(await params).lang} >
      <body className={`${inter.variable} ${ibmPlaxSerif.variable} antialiased`} > 
        {children}
        <Script src="https://unpkg.com/scrollreveal" ></Script>
      </body>
    </html>
  );
}
