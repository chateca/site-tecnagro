
import NavBar from "@/components/MenuBar";
import Rodape from "@/components/Rodape";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  

    return (
      <>
      
      <NavBar/>
        <main>
        <section className='bg-green-950'>
            {children}
        </section>
       </main>
        
      </>
     
    );
  }
  