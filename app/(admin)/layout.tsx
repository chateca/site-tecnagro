import LeftSideBar from "@/components/LeftSideBar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../api/uploadthing/core";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
      <body>
          <NextSSRPlugin
                  /**
                   * The `extractRouterConfig` will extract **only** the route configs
                   * from the router to prevent additional information from being
                   * leaked to the client. The data passed to the client is the same
                   * as if you were to fetch `/api/uploadthing` directly.
                   */
                  routerConfig={extractRouterConfig(ourFileRouter)}
                />
     
        <div className="flex w-full h-[100vh] max-h-screen">
            <LeftSideBar/>
             <div className="flex flex-col size-full overflow-y-scroll">
             {children}
             </div>
        </div>
       
      </body>
    </html>
  );
}
