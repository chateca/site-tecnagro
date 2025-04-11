

const ScrollRevealConfig = async  ()=>{

  if (typeof window !== "undefined") {
    // Importar dinamicamente apenas no cliente
    const ScrollReveal = (await import("scrollreveal")).default;

    
    const sr  = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 300,
        reset: true,
      });

      sr.reveal(".about__item__title");
      sr.reveal(".about__item__1-image", { origin: "right" });
      sr.reveal(".about__item__1-content", { origin: "left" });
      sr.reveal(".about__item__1-numbers", { delay: 500, scale: 0.5 });
      sr.reveal(".atividade__item", { interval: 100 });
      sr.reveal(".service__card", { interval: 100 });
      sr.reveal(".about__item__folha", { delay: 500, scale: 0.3 });
    }
    }
    


export default ScrollRevealConfig

  
