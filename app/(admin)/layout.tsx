import LeftSideBar from "@/components/LeftSideBar";

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
