






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full h-full">
       
        <div className="flex flex-col size-full overflow-hidden bg-green-950">
        {children}
        </div>
        
    </main>
      
    
  );
}
