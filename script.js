// TYPEWRITER
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
const typingEl = document.getElementById("typing");
let i=0;
function typeWriter(){
  if(i<text.length){
    typingEl.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// HERO FADE & COURT + QUOTES
const hero = document.querySelector(".hero");
const court = document.getElementById("court-bg");
const quoteBox = document.getElementById("quote-box");
const quotes = [
  "El talento gana partidos, pero el trabajo en equipo y la inteligencia gana campeonatos. – Michael Jordan",
  "No hay secretos para el éxito. – Michael Jordan",
  "El esfuerzo supera al talento cuando el talento no se esfuerza. – Kevin Durant"
];
let qIndex=0;
const quoteSpan = document.getElementById("quote");
quoteSpan.textContent = quotes[qIndex];
setInterval(()=>{
  qIndex=(qIndex+1)%quotes.length;
  quoteSpan.textContent=quotes[qIndex];
},5000);

window.addEventListener("scroll", ()=>{
  let opacity = 1 - window.scrollY/300;
  hero.style.opacity = opacity<0?0:opacity;
  if(opacity<1){
    court.classList.add("show");
    quoteBox.classList.add("show");
  } else {
    court.classList.remove("show");
    quoteBox.classList.remove("show");
  }
});

// CARRUSEL SCROLL WHEEL
const track = document.querySelector(".track");
track.addEventListener("wheel", (e)=>{
  e.preventDefault();
  track.scrollLeft += e.deltaY;
});

// IMAGES OVERLAY ZOOM
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
let zoomedImg = null;

track.querySelectorAll("img").forEach(img=>{
  img.addEventListener("click", ()=>{
    if(zoomedImg) {
      zoomedImg.classList.remove("zoomed");
      overlay.style.display="none";
      zoomedImg=null;
    }
    img.classList.add("zoomed");
    overlay.style.display="block";
    overlayImg.src=img.src;
    zoomedImg=img;
  });
});

overlay.addEventListener("click", ()=>{
  if(zoomedImg){
    zoomedImg.classList.remove("zoomed");
    overlay.style.display="none";
    zoomedImg=null;
  }
});

// MÚSICA
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let playing=false;
musicBtn.addEventListener("click", ()=>{
  if(!playing){
    music.play();
    musicBtn.textContent="⏸️";
    playing=true;
  } else {
    music.pause();
    musicBtn.textContent="🎵";
    playing=false;
  }
});
