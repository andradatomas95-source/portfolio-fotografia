// ==========================
// 🌐 CONTADOR REAL (API)
// ==========================
const counterEl = document.getElementById("visit-count");

// ⚠️ cambiá "tomasandrada" por algo único si querés
fetch("https://api.countapi.xyz/hit/tomasandrada/portfolio")
  .then(res => res.json())
  .then(res => {
    counterEl.innerText = String(res.value).padStart(5, "0");
  })
  .catch(() => {
    counterEl.innerText = "00000";
  });

// ==========================
// QUOTES
// ==========================
const quotes = [
 "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos - Michael Jordan",
  "El trabajo duro vence al talento, cuando el talento no trabaja duro - Kevin Durant",
  "Si no crees en ti mismo, nadie mas lo hará - Kobe Bryant"
];

let q = 0;
const quoteEl = document.getElementById("quote");

function showQuote(){
  quoteEl.innerText = quotes[q];
  q = (q+1)%quotes.length;
}
showQuote();
setInterval(showQuote,5000);

// ==========================
// HERO
// ==========================
const hero = document.querySelector(".hero");
const header = document.getElementById("header");
const quoteBox = document.getElementById("quote-box");
const social = document.querySelector(".social");
const heroImg = document.querySelector(".hero img");

window.addEventListener("scroll", () => {
  let s = window.scrollY;

  heroImg.style.transform = `translateY(${s*0.2}px)`;

  if(s > window.innerHeight * 0.4){
    hero.classList.add("fade-out","hide-text");
    header.classList.add("show");
    quoteBox.classList.add("show");
    social.classList.add("show");
  } else {
    hero.classList.remove("fade-out","hide-text");
    header.classList.remove("show");
    quoteBox.classList.remove("show");
    social.classList.remove("show");
  }
});

// ==========================
// 🎯 CARRUSEL PRO
// ==========================
const track = document.querySelector(".track");
const carousel = document.querySelector(".carousel");

let pos = 0;
let velocity = -0.3;
let isDragging = false;
let lastX = 0;

function animate(){
  if(!isDragging){
    pos += velocity;
  }

  let w = track.scrollWidth / 2;

  if(pos <= -w) pos += w;
  if(pos >= 0) pos -= w;

  track.style.transform = `translateX(${pos}px)`;

  velocity *= 0.95;

  if(Math.abs(velocity) < 0.05){
    velocity = velocity < 0 ? -0.05 : 0.05;
  }

  requestAnimationFrame(animate);
}
animate();

// ==========================
// 🖱️ DRAG DESKTOP (FIX)
// ==========================
carousel.addEventListener("mousedown", (e)=>{
  isDragging = true;
  lastX = e.clientX;
});

window.addEventListener("mousemove", (e)=>{
  if(!isDragging) return;

  let dx = e.clientX - lastX;
  pos += dx;
  velocity = dx;

  lastX = e.clientX;
});

window.addEventListener("mouseup", ()=>{
  isDragging = false;
});

// ==========================
// 📱 TOUCH MOBILE
// ==========================
carousel.addEventListener("touchstart", e=>{
  isDragging = true;
  lastX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", e=>{
  if(!isDragging) return;

  let x = e.touches[0].clientX;
  let dx = x - lastX;

  pos += dx;
  velocity = dx;

  lastX = x;
});

carousel.addEventListener("touchend", ()=>{
  isDragging = false;
});

// ==========================
// ⌨️ FLECHAS (FIX REAL)
// ==========================
window.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight"){
    velocity -= 3; // más fuerte → se nota
  }

  if(e.key === "ArrowLeft"){
    velocity += 3;
  }
});

// ==========================
// OVERLAY + HAPTIC
// ==========================
const imgs = document.querySelectorAll(".track img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

let current = 0;

imgs.forEach((img,i)=>{
  img.onclick = () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
    current = i;
  };
});

let startX = 0;

overlay.addEventListener("touchstart", e=>{
  startX = e.touches[0].clientX;
});

overlay.addEventListener("touchend", e=>{
  let diff = startX - e.changedTouches[0].clientX;

  if(Math.abs(diff) < 50){
    overlay.style.display = "none";
    return;
  }

  if(diff > 0){
    current = (current + 1) % imgs.length;
  } else {
    current = (current - 1 + imgs.length) % imgs.length;
  }

  overlayImg.src = imgs[current].src;

  if(navigator.vibrate){
    navigator.vibrate(30);
  }
});

overlay.addEventListener("click", ()=>{
  overlay.style.display = "none";
});

// ==========================
// CURSOR
// ==========================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ==========================
// 🎧 MÚSICA
// ==========================
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", ()=>{

  if(music.paused){

    music.volume = 0;
    music.play();

    let v = 0;
    let fade = setInterval(()=>{
      v += 0.05;
      music.volume = v;
      if(v >= 1) clearInterval(fade);
    },100);

    musicBtn.classList.add("playing");

  } else {

    let v = music.volume;

    let fade = setInterval(()=>{
      v -= 0.05;
      music.volume = v;

      if(v <= 0){
        music.pause();
        clearInterval(fade);
      }
    },100);

    musicBtn.classList.remove("playing");
  }
});

// AUTO PAUSE
document.addEventListener("visibilitychange", ()=>{
  if(document.hidden){
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
