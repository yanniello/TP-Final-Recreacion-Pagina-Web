function navBgOn(){
    if(window.innerHeight*0.1 < window.scrollY){
        document.querySelector("nav").classList.add("nav-scrolled")
        document.querySelector("#card1").style="animation:appearLeft 3s 1s forwards;"
        document.querySelector("#card2").style=" animation:appearRight 3s forwards;"
    }else{
    document.querySelector("nav").classList.remove("nav-scrolled")
}};
