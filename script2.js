let video=document.querySelector('video');
let playButton = document.getElementById("play-button");
let pauseButton= document.getElementById("pause-button");
const distanciaHis1=window.innerHeight*0.35+document.querySelector("#cardHist1").offsetHeight;
const navBgOn=()=>{
    if(window.innerHeight*0.1 < window.scrollY){
        document.querySelector("nav").classList.add("nav-scrolled")
    }else{
    document.querySelector("nav").classList.remove("nav-scrolled")
    }

    if(window.innerHeight*0.1< window.scrollY && distanciaHis1 >window.scrollY){
        document.querySelector("#cardHist1>img").style="animation: aparecer1 1.5s ease-out forwards;";
        document.querySelector("#cardHist1>div").style="animation: opacity1 2s ease-out forwards";
        return;
    }

    if(distanciaHis1 < window.scrollY && distanciaHis1 +document.querySelector("#cardHist2").offsetHeight> window.scrollY){
        document.querySelector("#cardHist2>img").style="animation: aparecer2 1.5s ease-out forwards;";
        document.querySelector("#cardHist2>div").style="animation: opacity2 2s ease-out forwards";
        return; 
    }

    if(distanciaHis1 +document.querySelector("#cardHist2").offsetHeight< window.scrollY){
        document.querySelector("#cardHist3>img").style="animation: aparecer1 1.5s ease-out forwards;";
        document.querySelector("#cardHist3>div").style="animation: opacity1 2s ease-out forwards";
        return; 
    }
} 

let transformarTiempoActual=(tiempo)=>{
    if(tiempo<60){
        if(tiempo.toFixed(0)<10){
            return `00:0${tiempo.toFixed(0)}`
        }
        return `00:${tiempo.toFixed(0)}`
    }else{
        console.log(tiempo/60 )
        let minutos=parseInt(tiempo/60)
        let segundos= (tiempo/60 - minutos)*60
        if(segundos<10){
            return `${minutos}:0${segundos.toFixed(0)}`
        }
        return `${minutos}:${segundos.toFixed(0)}`
    }
}
let timeProgression;

setTimeout(()=>{

    document.getElementById('video-show-time').innerHTML=` Duracion video  04:41`},100);

playButton.addEventListener('click',()=>{
    video.play()
    timeProgression=setInterval(()=>{
        document.getElementById('video-show-time').innerHTML=`${transformarTiempoActual(video.currentTime)}`
    },1000)
});

pauseButton.addEventListener('click',()=>{
    video.pause();
    flag=false;
    clearInterval(timeProgression)
});
