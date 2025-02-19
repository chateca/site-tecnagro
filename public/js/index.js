const navMenu = document.getElementById('nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const hamburger = document.getElementById('hamburger')
const closedMenu = document.getElementById('closedMenu')

    



//menu 
hamburger?.addEventListener("click",()=>{
  navMenu?.classList?.toggle("left-[0]")
  hamburger.classList?.add("hidden")
  closedMenu.classList?.remove("hidden")
})

closedMenu.addEventListener('click',()=>{
    navMenu?.classList?.toggle("left-[0]")
    hamburger.classList?.remove("hidden")
    closedMenu.classList?.add("hidden")
})

navLink.forEach(link =>{
    link.addEventListener('click', ()=>{
        navMenu?.classList?.toggle("left-[0]")
        hamburger.classList?.remove("hidden")
        closedMenu.classList?.add("hidden")
    })
})


// botao voltar 
const scrollUp = ()=>{
                                                 
    const scrollUpBtn = document.getElementById("scroll-up")
    if(!scrollUpBtn) return null 
    if(this.scrollY >=250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
        
       
    }
}

window.addEventListener("scroll",scrollUp)



//nav bar

const scrollNav = ()=>{
                                                 
    const navBar = document.getElementById("navBar")
    if(this.scrollY >=50){
     
        navBar.classList.add("border-b", "border-green-2")
    }else{
   
        navBar.classList.remove("border-b", "border-green-2")
        
       
    }
}

window.addEventListener("scroll",scrollNav)


//Actived link 
const activedLink = ()=>{
                                                 
    
}

window.addEventListener("scroll",activedLink )

const sr = ScrollReveal(({
    origin:"top", 
    distance:"60px", 
    duration:2500, 
    delay:300, 
    reset:true
}))



sr.reveal('.service__card', {interval:100})
sr.reveal('.atividade__item', {interval:100})
