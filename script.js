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
setInterval(showQuote, 5000);

// ==========================
// HERO SCROLL + PARALLAX
// ==========================
const hero = document.querySelector(".hero");
const header = document.getElementById("header");
const quoteBox = document.getElementById("quote-box");
const social = document.querySelector(".social");
const heroImg = document.querySelector(".hero img");

window.addEventListener("scroll", () => {
  const s = window.scrollY;

  heroImg.style.transform = `translateY(${s * 0.2}px)`;

  if (s > window.innerHeight * 0.4) {
    hero.classList.add("fade-out", "hide-text");
    header.classList.add("show");
    quoteBox.classList.add("show");
    social.classList.add("show");
  } else {
    hero.classList.remove("fade-out", "hide-text");
    header.classList.remove("show");
    quoteBox.classList.remove("show");
    social.classList.remove("show");
  }
});

// ==========================
// 🎯 CARRUSEL PRO (INERCIA + LOOP REAL)
// ==========================
const track = document.querySelector(".track");

let pos = 0;
let velocity = -0.3; // autoplay base
let isDragging = false;
let startX = 0;
let lastX = 0;

// loop continuo
function animate(){
  if(!isDragging){
    pos += velocity;
  }

  // loop infinito REAL
  const width = track.scrollWidth / 2;
  if(pos <= -width) pos += width;
  if(pos >= 0) pos -= width;

  track.style.transform = `translateX(${pos}px)`;

  // fricción (inercia)
  velocity *= 0.95;

  // evitar que se detenga completamente
  if(Math.abs(velocity) < 0.05){
    velocity = velocity < 0 ? -0.05 : 0.05;
  }

  requestAnimationFrame(animate);
}
animate();

// ==========================
// 🖱️ DRAG DESKTOP
// ==========================
track.addEventListener("mousedown", (e)=>{
  isDragging = true;
  startX = e.clientX;
  lastX = e.clientX;
});

window.addEventListener("mousemove", (e)=>{
  if(!isDragging) return;

  const dx = e.clientX - lastX;
  pos += dx;
  velocity = dx; // velocidad real

  lastX = e.clientX;
});

window.addEventListener("mouseup", ()=>{
  isDragging = false;
});

// ==========================
// 📱 TOUCH + INERCIA
// ==========================
track.addEventListener("touchstart", (e)=>{
  isDragging = true;
  startX = e.touches[0].clientX;
  lastX = startX;
});

track.addEventListener("touchmove", (e)=>{
  if(!isDragging) return;

  const x = e.touches[0].clientX;
  const dx = x - lastX;

  pos += dx;
  velocity = dx;

  lastX = x;
});

track.addEventListener("touchend", ()=>{
  isDragging = false;
});

// ==========================
// ⌨️ FLECHAS TECLADO
// ==========================
window.addEventListener("keydown", (e)=>{
  if(e.key === "ArrowRight"){
    velocity -= 2; // derecha
  }
  if(e.key === "ArrowLeft"){
    velocity += 2; // izquierda
  }
});

// ==========================
// OVERLAY
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

// swipe overlay
let startXOverlay = 0;

overlay.addEventListener("touchstart", e=>{
  startXOverlay = e.touches[0].clientX;
});

overlay.addEventListener("touchend", e=>{
  const diff = startXOverlay - e.changedTouches[0].clientX;

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
});

// click cerrar
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
// 🎵 MÚSICA
// ==========================
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");

musicBtn.onclick = () => {

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
};