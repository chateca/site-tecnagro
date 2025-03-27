import LeftSideBar from "@/components/LeftSideBar";
export default function AdminLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
  
        <main className="flex w-full h-[100vh] max-h-screen">
            <LeftSideBar/>
             <div className="flex flex-col size-full overflow-y-scroll">
             {children}
             </div>
        </main>
       
  
  );
}
