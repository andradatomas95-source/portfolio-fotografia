// QUOTES
const quotes = [
  "El talento gana partidos, el equipo campeonatos - Michael Jordan",
  "Nunca digas nunca - LeBron James",
  "El trabajo duro vence al talento - Kevin Durant",
  "Si no crees en ti, nadie lo hará - Kobe Bryant"
];

const quoteEl = document.getElementById("quote");
let q = 0;
function changeQuote(){
  quoteEl.innerText = quotes[q];
  q = (q + 1) % quotes.length;
}
setInterval(changeQuote, 5000);
changeQuote();

// SCROLL EFECTOS
const hero = document.querySelector(".hero");
const header = document.getElementById("header");
const quoteBox = document.getElementById("quote-box");
const social = document.querySelector(".social");
const heroImg = document.querySelector(".hero img");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const trigger = window.innerHeight * 0.4;

  // PARALLAX
  heroImg.style.transform = `translateY(${scroll * 0.3}px) scale(1.05)`;

  if(scroll > trigger){
    hero.classList.add("fade-out");
    header.classList.add("show");
    header.classList.add("compact");
    quoteBox.classList.add("show");
    social.classList.add("show");
  } else {
    hero.classList.remove("fade-out");
    header.classList.remove("show");
    header.classList.remove("compact");
    quoteBox.classList.remove("show");
    social.classList.remove("show");
  }
});

// CARRUSEL INFINITO REAL
const track = document.querySelector(".track");
let pos = 0;
const speed = 0.3;
const total = track.scrollWidth / 2;

function loop(){
  pos -= speed;
  if(Math.abs(pos) >= total){
    pos = 0;
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(loop);
}
loop();

// OVERLAY
const images = document.querySelectorAll(".track img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});

// CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  if(cursor){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// MÚSICA
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");

function fadeIn(audio){
  audio.volume = 0;
  audio.play();
  let v = 0;
  let i = setInterval(()=>{
    v += 0.05;
    if(v>=1) clearInterval(i);
    audio.volume = v;
  },100);
}

function fadeOut(audio){
  let v = audio.volume;
  let i = setInterval(()=>{
    v -= 0.05;
    if(v<=0){
      audio.pause();
      clearInterval(i);
    }
    audio.volume = v;
  },100);
}

musicBtn.addEventListener("click", ()=>{
  if(music.paused){
    fadeIn(music);
    musicBtn.classList.add("playing");
  } else {
    fadeOut(music);
    musicBtn.classList.remove("playing");
  }
});