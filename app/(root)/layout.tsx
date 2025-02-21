import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col w-full h-full">
        <Navbar/>
        <div className="flex flex-col  overflow-x-hidden bg-green-950">
        {children}
        </div>
        <Rodape/>
    </main>
      
    
  );
}
