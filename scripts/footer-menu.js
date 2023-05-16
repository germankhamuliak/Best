const footerLinks = document.querySelectorAll(".footer__list")


footerLinks.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(window.innerWidth<=1024){
            if(e.classList.contains("list-active")){
                e.classList.remove("list-active")
            } else{
                footerLinks.forEach((li)=>{
                    li.classList.remove("list-active")
                }) 
                e.classList.add("list-active")
            }
            }
        })
    })
