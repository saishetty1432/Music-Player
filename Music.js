let img=document.querySelector("img");
let audio=document.querySelector("audio");

let backward=document.querySelector(".fa-backward");
let forward=document.querySelector(".fa-forward");
let playBtn=document.querySelector(".fa-play");
let pauseBtn=document.querySelector(".fa-circle-pause");



let storage=[
{imgSrc:"./Images/Kabir Singh.jpeg",     audioSrc:"./Audios/FirstAudio.mpeg"},
{imgSrc:"./Images/100bilions.jpeg",audioSrc:"./Audios/SecondAudio.mpeg"},
{imgSrc:"./Images/6213932.jpg",    audioSrc:"./Audios/ThirdAudio.mpeg"},
{imgSrc:"./Images/teridiwani.jpeg",     audioSrc:"./Audios/FourthAudio.mpeg"},
{imgSrc:"./Images/agar tum saat ho.jpg",audioSrc:"./Audios/FifthAudio.mpeg"}]

// console.log(storage);
let index=0;
let realTime=0;



function playfun(){
    img.src=storage[index].imgSrc;
    audio.src=storage[index].audioSrc;
    audio.currentTime=realTime;
    audio.play();
    pauseBtn.style.display="block";
    playBtn.style.display="none";

}

function pausePlay(){
    if(audio.paused){
        playfun();

    }else{
        audio.pause();
        realTime=audio.currentTime;

        pauseBtn.style.display="none";
        playBtn.style.display="block";
    }


}
pauseBtn.addEventListener("click",pausePlay);
playBtn.addEventListener("click",pausePlay);

forward.addEventListener( "click", ()=>{
    index=(index+1)%storage.length
    realTime=0;
    playfun()
})
