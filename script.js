// TYPEWRITER
const txt = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
const el = document.getElementById("typing");
let idx = 0;
function typeWriter(){
  if(idx < txt.length){
    el.textContent += txt.charAt(idx++);
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// HERO fade + show cancha & quotes
const hero = document.querySelector(".hero");
const court = document.getElementById("court-bg");
const quoteBox = document.getElementById("quote-box");
const quotes = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No se trata de ser el mejor, se trata de ser mejor que ayer.",
  "La fuerza no proviene de la capacidad física, sino de una voluntad indomable.",
  "El dolor es temporal, la gloria es para siempre."
];
let qI = 0;
function changeQuote(){
  quoteBox.textContent = quotes[qI];
  qI = (qI+1) % quotes.length;
}
changeQuote();
setInterval(changeQuote, 5000);

window.addEventListener("scroll", ()=>{
  const opacity = Math.max(0, 1 - window.scrollY/300);
  hero.style.opacity = opacity;
  if(opacity < 1){
    court.classList.add("show");
    quoteBox.classList.add("show");
  } else {
    court.classList.remove("show");
    quoteBox.classList.remove("show");
  }
});

// SCROLL HORIZONTAL CON WHEEL
const track = document.querySelector(".track");
track.addEventListener("wheel", e => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
});

// OVERLAY ZOOM
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
let zoomed = null;
track.querySelectorAll("img").forEach(img=>{
  img.addEventListener("click", ()=>{
    overlay.classList.add("show");
    overlayImg.src = img.src;
  });
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
});

// CURSOR pelota
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// MÚSICA
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");
musicBtn.addEventListener("click", ()=> music.paused ? music.play() : music.pause());
