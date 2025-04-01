import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import { Suspense } from "react";
import Loading from "./loading";


    
    
  

 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col w-full h-full">
        <Navbar/>
        <div className="flex flex-col  overflow-x-hidden bg-green-950">
          <Suspense fallback={<Loading/>}>
          {children}
          </Suspense>
           
        </div>
        <Rodape/>
    </main>
      
    
  );
}
