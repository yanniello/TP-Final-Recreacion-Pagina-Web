let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const navBgOn=()=>{
    if(window.innerHeight*0.1 < window.scrollY  ){
        document.querySelector("nav").classList.add("nav-scrolled")
    }else{
    document.querySelector("nav").classList.remove("nav-scrolled")
        
       
    }
} 
function iniciar(){
    var images=document.querySelectorAll('.images');
     soltar=document.getElementById('box-drop');  
     soltar2  =document.getElementById('box-drop2'); 
     soltar3 = document.getElementById('box-drop3'); 

    for(var i=0; i<images.length; i++){
        images[i].addEventListener('dragstart', arrastrado, false);
        
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    
    let imagen=document.getElementById(id);
    console.log(imagen)
    imagen.style.display= 'none';
    let contenedor;
    if(e.target.tagName ==="P"){
        contenedor=e.target.parentNode;
    }else{
        contenedor= e.target;
    }
    contenedor.innerHTML='<img src="'+imagen.src+'" height="100%" width="100%">';
    contador++
    

    if(contador ==3){
        let image1=document.querySelector("#box-drop>img").getAttribute("src").split("/").includes("Rompe1.png")
        let image2=document.querySelector("#box-drop2>img").getAttribute("src").split("/").includes("rompe2.png")
        let image3=document.querySelector("#box-drop3>img").getAttribute("src").split("/").includes("Rompe3.png")
        document.querySelector(".boxes").style.gap="0px";
        let cajitas=document.querySelectorAll(".box")

        document.querySelector(".boxes").style="transform:scale(1.5);gap:0;border:0";
        for(let box of cajitas){
            box.style.border="0";
        }
        
        if(image1&&image2&&image3){
            setTimeout(()=>{
                document.querySelector(".boxes").style="transform:scale(1);gap:0";

            },3000)
            setTimeout(()=>{ 
                document.querySelector(".juego-title").innerHTML=`<span>Felicitaciones!!<br>Puzzle correctamente resuelto`;
            document.querySelector(".juego-title").style="animation:juego-title-anim 3s forwards;position:relative";
             document.querySelector(".boxes").style="opacity:0;gap:0";
        },6000)
       
         
        }else{
            for(let box of cajitas){
                box.style.border=0;
                box.classList.remove("boxHover")
                
            }
            setTimeout(()=>{
                for(let box of cajitas){
                    box.style.opacity="0.7";
                }
                document.querySelector(".juego-title").innerHTML=`Lo sentimos, Puzzle no resuelto.<br/>Prueba otra vez <img width=50px src="./assets/icons/icons8-double-down-80.png"/> `
                document.querySelector(".juego-title").style="animation:juego-title-anim 3s forwards; z-index:3;position:relative;color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                document.querySelector(".boxes").style="background-color:#000000;transform:scale(1);gap:0"
            },5000)

        }
    }

}
function restartGame() {
    window.location.reload();
}
iniciar()
