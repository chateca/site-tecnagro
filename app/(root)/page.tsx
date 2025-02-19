
import { Suspense } from "react";




export default function Home() {


  return (
    <>
       <Suspense fallback={<Loading />}>
    <section  className="flex flex-col w-full scroll-section ">
     

    </section>
    </Suspense>
  </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

