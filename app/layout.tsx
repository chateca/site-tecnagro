import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import "./globals.css";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({subsets:['latin'], variable:'--font-inter'});
const  ibmPlaxSerif = IBM_Plex_Serif({
  subsets:['latin'], 
  weight:['400', '700'], 
  variable: '--font-ibm-plex-safir'
}) 

export const metadata: Metadata = {
  title: "TecnAgro",
  description: "COnsultoria e prestação de serviços",
  icons:{
    icon:"/assets/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
      <body
        className={`${inter.variable} ${ibmPlaxSerif.variable}`}>
          <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        {children}
      </body>
    </html>
  );
}
